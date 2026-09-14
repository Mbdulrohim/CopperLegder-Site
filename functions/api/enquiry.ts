/**
 * Enquiries from copperledgerhq.com, into Control's leads list.
 *
 * Written to the same `waitlist` table suite.ng's form uses, through the same
 * D1 binding, so a business asking about a school system and a trader asking
 * about Suite for stores land in one list an operator already works through.
 * `source` is what tells them apart: Control labels these "copperledgerhq.com".
 *
 * The business name goes in `shop_name`, which is what the list shows as the
 * lead's title. Everything else about the enquiry — what they run, and what
 * they asked — goes in `note`, prefixed so it still reads correctly when the
 * same email has asked before and the note is appended to rather than replaced.
 */
import { clean, json, readBody, sameOriginOnly, validEmail, validPhone } from '../_lib/form.ts';
import type { D1Binding } from '../_lib/d1.ts';

export const SOURCE = 'copperledgerhq';

export const SECTORS: Record<string, string> = {
  store: 'Store',
  school: 'School',
  hospital: 'Hospital',
  build: 'Website, app or custom software',
};

interface Context {
  request: Request;
  env: { 'copper-ledger'?: D1Binding };
}

const UNSENT = 'We could not send that just now.';

export const onRequestPost = async ({ request, env }: Context): Promise<Response> => {
  const refused = sameOriginOnly(request);
  if (refused !== null) return refused;

  const body = await readBody(request);
  if ('response' in body) return body.response;
  const { input } = body;

  // A field people never see. Answer success so the trap teaches nothing, but
  // never write the submission.
  const trap = clean(input, 'website', 200);
  if (trap === 'invalid') return json({ error: 'Send valid form details.' }, 400);
  if (trap !== null) return json({ ok: true });

  const emailValue = clean(input, 'email', 254);
  const name = clean(input, 'name', 120);
  const phone = clean(input, 'phone', 32);
  const business = clean(input, 'business', 160);
  const sector = clean(input, 'sector', 16);
  const message = clean(input, 'message', 500);
  if ([emailValue, name, phone, business, sector, message].includes('invalid')) {
    return json({ error: 'One of those details is too long or malformed.' }, 400);
  }

  if (name === null) return json({ error: 'Tell us your name.' }, 400);
  if (business === null) return json({ error: 'Tell us the name of the business.' }, 400);
  const email = typeof emailValue === 'string' ? emailValue.toLowerCase() : '';
  if (!validEmail(email)) return json({ error: 'Enter a valid email address.' }, 400);
  if (phone !== null && !validPhone(phone)) return json({ error: 'Enter a valid phone number.' }, 400);
  const runs = sector === null ? undefined : SECTORS[sector];
  if (runs === undefined) return json({ error: 'Choose what you run.' }, 400);

  const note = `copperledgerhq.com · ${runs} · ${business}${message === null ? '' : ` — ${message}`}`;

  const db = env['copper-ledger'];
  if (db === undefined) {
    console.error('enquiry intake: copper-ledger D1 binding is missing');
    return json({ error: UNSENT }, 500);
  }

  try {
    /*
     * The partial unique index is on email WHERE archived_at IS NULL AND email
     * IS NOT NULL; the conflict target has to name the same predicate. A
     * returning address keeps its existing title and has this enquiry added
     * to its note, so an earlier conversation is never overwritten.
     */
    await db.prepare(
      `INSERT INTO waitlist (id, email, name, phone, shop_name, note, source)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(email) WHERE archived_at IS NULL AND email IS NOT NULL DO UPDATE SET
         name = coalesce(excluded.name, waitlist.name),
         phone = coalesce(excluded.phone, waitlist.phone),
         shop_name = coalesce(waitlist.shop_name, excluded.shop_name),
         note = CASE WHEN waitlist.note IS NULL THEN excluded.note
                     ELSE waitlist.note || char(10) || excluded.note END`,
    ).bind(
      `wait_${crypto.randomUUID().replace(/-/g, '').slice(0, 16)}`,
      email,
      name,
      phone,
      business,
      note,
      SOURCE,
    ).run();
    return json({ ok: true });
  } catch (error) {
    console.error('enquiry intake failed', error);
    return json({ error: UNSENT }, 500);
  }
};
