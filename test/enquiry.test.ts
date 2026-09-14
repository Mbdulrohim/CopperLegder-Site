/**
 * The contact form's endpoint.
 *
 * What matters: a real enquiry becomes exactly one row in Control's leads list,
 * tagged so it can be told apart from suite.ng's; anything that is not a real
 * enquiry writes nothing; and a failure is reported as a failure, because the
 * form turns that into an email instead of a lost message.
 */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { onRequestPost, SOURCE } from '../functions/api/enquiry.ts';

class RecordingD1 {
  writes: { sql: string; values: unknown[] }[] = [];
  down = false;

  prepare(sql: string) {
    let values: unknown[] = [];
    const statement = {
      bind: (...bound: unknown[]) => { values = bound; return statement; },
      run: async () => {
        if (this.down) throw new Error('D1 unavailable');
        this.writes.push({ sql, values });
        return {};
      },
    };
    return statement;
  }
}

const valid = {
  name: 'Adaeze Okafor',
  email: 'Adaeze@Example.com',
  phone: '0803 123 4567',
  business: 'Brightfield Schools',
  sector: 'school',
  message: 'Fees across two campuses.',
};

const post = (db: RecordingD1 | undefined, body: unknown, headers: Record<string, string> = {}) =>
  onRequestPost({
    request: new Request('https://copperledgerhq.com/api/enquiry', {
      method: 'POST',
      headers: { 'content-type': 'application/json', origin: 'https://copperledgerhq.com', ...headers },
      body: JSON.stringify(body),
    }),
    env: db === undefined ? {} : { 'copper-ledger': db },
  });

describe('an enquiry from copperledgerhq.com', () => {
  it('becomes one lead, tagged with where it came from', async () => {
    const db = new RecordingD1();
    const response = await post(db, valid);
    assert.equal(response.status, 200);
    assert.equal(db.writes.length, 1);
    const [id, email, name, phone, business, note, source] = db.writes[0]!.values as string[];
    assert.match(id!, /^wait_[a-f0-9]{16}$/, 'Control only routes lead ids of this shape');
    assert.equal(email, 'adaeze@example.com');
    assert.equal(name, 'Adaeze Okafor');
    assert.equal(phone, '0803 123 4567');
    assert.equal(business, 'Brightfield Schools');
    assert.equal(note, 'copperledgerhq.com · School · Brightfield Schools — Fees across two campuses.');
    assert.equal(source, SOURCE);
  });

  it('never overwrites what an existing lead already said', async () => {
    const db = new RecordingD1();
    await post(db, valid);
    const sql = db.writes[0]!.sql;
    assert.match(sql, /ON CONFLICT\(email\) WHERE archived_at IS NULL AND email IS NOT NULL/);
    assert.match(sql, /shop_name = coalesce\(waitlist\.shop_name, excluded\.shop_name\)/);
    assert.match(sql, /waitlist\.note \|\| char\(10\) \|\| excluded\.note/);
  });

  it('writes nothing for a bot that filled the hidden field, and tells it nothing', async () => {
    const db = new RecordingD1();
    const response = await post(db, { ...valid, website: 'http://spam.example' });
    assert.equal(response.status, 200);
    assert.equal(db.writes.length, 0);
  });

  it('refuses a submission from another site', async () => {
    const db = new RecordingD1();
    const response = await post(db, valid, { origin: 'https://evil.example' });
    assert.equal(response.status, 403);
    assert.equal(db.writes.length, 0);
  });

  for (const [field, value, expected] of [
    ['business', '', 'Tell us the name of the business.'],
    ['name', '   ', 'Tell us your name.'],
    ['email', 'not-an-email', 'Enter a valid email address.'],
    ['sector', 'casino', 'Choose what you run.'],
  ] as const) {
    it(`refuses a missing or bad ${field}, and says which`, async () => {
      const db = new RecordingD1();
      const response = await post(db, { ...valid, [field]: value });
      assert.equal(response.status, 400);
      assert.equal(((await response.json()) as { error: string }).error, expected);
      assert.equal(db.writes.length, 0);
    });
  }

  it('reports a database failure as a failure, so the form can offer email instead', async () => {
    const db = new RecordingD1();
    db.down = true;
    const response = await post(db, valid);
    assert.equal(response.status, 500);
  });

  it('reports a missing binding as a failure rather than pretending it sent', async () => {
    const response = await post(undefined, valid);
    assert.equal(response.status, 500);
  });
});
