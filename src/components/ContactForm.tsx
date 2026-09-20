import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { site } from '../content/site';

const SECTORS = [
  { value: 'store', label: 'A store using Suite' },
  { value: 'school', label: 'A school interested in Suite' },
  { value: 'hospital', label: 'A hospital interested in Suite' },
  { value: 'build', label: 'A website, app or custom software' },
] as const;

type Sector = (typeof SECTORS)[number]['value'];
type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'failed'; error: string };

const FIELD = 'w-full bg-transparent border-b border-[#bdb8ae] focus:border-[#1c1917] px-0 py-3 text-base text-[#1c1917] placeholder:text-[#a8a29e] outline-none transition-colors';
const LABEL = 'block text-sm font-medium text-[#57534e]';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [sector, setSector] = useState<Sector>('store');
  const [message, setMessage] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const sectorLabel = SECTORS.find((item) => item.value === sector)?.label ?? '';
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `Enquiry from ${business.trim() || name.trim() || 'the website'}`,
  )}&body=${encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      ...(phone.trim() === '' ? [] : [`Phone: ${phone}`]),
      `Business: ${business}`,
      `Runs: ${sectorLabel}`,
      '',
      message,
    ].join('\n'),
  )}`;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus({ kind: 'sending' });
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, email, phone, business, sector, message, website }),
      });
      if (response.ok) {
        setStatus({ kind: 'sent' });
        return;
      }
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus({ kind: 'failed', error: body.error ?? 'That did not send.' });
    } catch {
      setStatus({ kind: 'failed', error: 'That did not send. The connection dropped.' });
    }
  };

  if (status.kind === 'sent') {
    return (
      <div className="border-t border-[#1c1917] pt-10">
        <Check className="w-8 h-8 text-[#9a650d] mb-8" />
        <h2 className="font-editorial text-4xl sm:text-5xl tracking-[-0.03em]">Message received.</h2>
        <p className="mt-5 text-lg leading-8 text-[#78716c] max-w-xl">
          Thank you, <span className="text-[#1c1917]">{name.trim() || 'there'}</span>. We will reply to <span className="text-[#1c1917]">{email.trim()}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={(event) => { void handleSubmit(event); }} className="border-t border-[#1c1917] pt-9 space-y-8">
      <div>
        <label htmlFor="enquiry-name" className={LABEL}>Your name</label>
        <input id="enquiry-name" type="text" required autoComplete="name" maxLength={120} value={name} onChange={(event) => setName(event.target.value)} className={FIELD} />
      </div>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="enquiry-email" className={LABEL}>Email</label>
          <input id="enquiry-email" type="email" required autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@business.com" className={FIELD} />
        </div>
        <div>
          <label htmlFor="enquiry-phone" className={LABEL}>Phone <span className="font-normal text-[#a8a29e]">(optional)</span></label>
          <input id="enquiry-phone" type="tel" autoComplete="tel" maxLength={32} value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="0803 123 4567" className={FIELD} />
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-business" className={LABEL}>Business name</label>
        <input id="enquiry-business" type="text" required autoComplete="organization" maxLength={160} value={business} onChange={(event) => setBusiness(event.target.value)} className={FIELD} />
      </div>

      <div>
        <label htmlFor="enquiry-sector" className={LABEL}>What do you run?</label>
        <select id="enquiry-sector" value={sector} onChange={(event) => setSector(event.target.value as Sector)} className={FIELD}>
          {SECTORS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="enquiry-message" className={LABEL}>What do you need? <span className="font-normal text-[#a8a29e]">(optional)</span></label>
        <textarea id="enquiry-message" rows={4} maxLength={500} value={message} onChange={(event) => setMessage(event.target.value)} className={`${FIELD} resize-y`} />
      </div>

      <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="enquiry-website">Leave this empty</label>
        <input id="enquiry-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} />
      </div>

      {status.kind === 'failed' && (
        <div role="alert" className="border-l-2 border-[#b42318] pl-4 text-sm leading-relaxed text-[#b42318]">
          {status.error}{' '}
          <a href={mailto} className="font-medium underline underline-offset-2">Email {site.email} instead.</a>{' '}
          What you typed is already included.
        </div>
      )}

      <button type="submit" disabled={status.kind === 'sending'} className="group w-full sm:w-auto bg-[#1c1917] hover:bg-[#292524] disabled:opacity-60 text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all inline-flex items-center justify-center gap-3 cursor-pointer">
        <span>{status.kind === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
