import { useEffect, useId, useState, type FormEvent } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { site } from '../content/site';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * The contact form — the one place on this site where something happens.
 *
 * It used to answer every submission with "Message Received … and will get in
 * touch promptly" without sending anything anywhere, so every enquiry since
 * the site went up ended in that sentence. It now posts to /api/enquiry, which
 * writes it into Control's leads list beside the ones from suite.ng. If that
 * fails for any reason, the form says so and offers an email with everything
 * already typed into it — an enquiry is never lost quietly again.
 */

const SECTORS = [
  { value: 'store', label: 'A store — Suite for stores' },
  { value: 'school', label: 'A school — Suite for schools (early access)' },
  { value: 'hospital', label: 'A hospital — Suite for hospitals (early access)' },
  { value: 'build', label: 'A website, app or custom software' },
] as const;

type Sector = (typeof SECTORS)[number]['value'];

type Status =
  | { kind: 'idle' }
  | { kind: 'sending' }
  | { kind: 'sent' }
  | { kind: 'failed'; error: string };

const FIELD = 'w-full bg-white border border-[#d6d3d1] focus:border-[#1c1917] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1917] placeholder:text-[#a8a29e] outline-none transition-all';
const LABEL = 'block text-xs font-mono uppercase tracking-wider text-[#57534e] mb-1.5';

export function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const titleId = useId();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [sector, setSector] = useState<Sector>('store');
  const [message, setMessage] = useState('');
  // Hidden from people. A bot that fills it is told "sent" and nothing is saved.
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sectorLabel = SECTORS.find((item) => item.value === sector)?.label ?? '';

  /** The same enquiry as an email, for when the form could not send it. */
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
      setStatus({ kind: 'failed', error: 'That did not send — the connection dropped.' });
    }
  };

  const handleClose = () => {
    if (status.kind === 'sent') {
      setName(''); setEmail(''); setPhone(''); setBusiness(''); setSector('store'); setMessage('');
      setStatus({ kind: 'idle' });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={handleClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-[#faf9f5] border border-[#e7e5e4] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 font-sans"
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-6 right-6 p-1.5 text-[#78716c] hover:text-[#1c1917] hover:bg-[#e7e5e4]/50 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {status.kind === 'sent' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 id={titleId} className="font-editorial text-2xl font-medium text-[#1c1917]">
              Message received
            </h3>
            <p className="text-sm text-[#78716c] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#1c1917] font-medium">{name.trim() || 'there'}</span>. It is with
              us, and we will reply to <span className="text-[#1c1917] font-medium">{email.trim()}</span>.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="bg-[#1c1917] hover:bg-[#292524] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer"
              >
                Back to the page
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e7e5e4] text-xs font-mono text-[#78716c] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c27803]" />
              GET IN TOUCH
            </div>

            <h3 id={titleId} className="font-editorial text-2xl sm:text-3xl font-medium text-[#1c1917] mb-2">
              Contact Copper Ledger
            </h3>
            <p className="text-sm text-[#78716c] mb-6">
              Tell us what you run and what you need, and we will reply by email.
            </p>

            <form onSubmit={(event) => { void handleSubmit(event); }} className="space-y-4">
              <div>
                <label htmlFor="enquiry-name" className={LABEL}>Your name</label>
                <input id="enquiry-name" type="text" required autoComplete="name" maxLength={120}
                  value={name} onChange={(e) => setName(e.target.value)} className={FIELD} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="enquiry-email" className={LABEL}>Email</label>
                  <input id="enquiry-email" type="email" required autoComplete="email" maxLength={254}
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com" className={FIELD} />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className={LABEL}>Phone <span className="normal-case tracking-normal text-[#a8a29e]">(optional)</span></label>
                  <input id="enquiry-phone" type="tel" autoComplete="tel" maxLength={32}
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                    placeholder="0803 123 4567" className={FIELD} />
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-business" className={LABEL}>Business name</label>
                <input id="enquiry-business" type="text" required autoComplete="organization" maxLength={160}
                  value={business} onChange={(e) => setBusiness(e.target.value)} className={FIELD} />
              </div>

              <div>
                <label htmlFor="enquiry-sector" className={LABEL}>What do you run?</label>
                <select id="enquiry-sector" value={sector} onChange={(e) => setSector(e.target.value as Sector)} className={FIELD}>
                  {SECTORS.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="enquiry-message" className={LABEL}>What do you need? <span className="normal-case tracking-normal text-[#a8a29e]">(optional)</span></label>
                <textarea id="enquiry-message" rows={3} maxLength={500}
                  value={message} onChange={(e) => setMessage(e.target.value)} className={`${FIELD} resize-none`} />
              </div>

              <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                <label htmlFor="enquiry-website">Leave this empty</label>
                <input id="enquiry-website" type="text" tabIndex={-1} autoComplete="off"
                  value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              {status.kind === 'failed' && (
                <div role="alert" className="rounded-xl border border-[#b42318]/20 bg-[#b42318]/5 px-3.5 py-3 text-sm leading-relaxed text-[#b42318]">
                  {status.error}{' '}
                  <a href={mailto} className="font-medium underline underline-offset-2">
                    Email {site.email} instead
                  </a>
                  {' '}— what you typed is already in it.
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status.kind === 'sending'}
                  className="w-full bg-[#1c1917] hover:bg-[#292524] disabled:opacity-60 text-white py-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>{status.kind === 'sending' ? 'Sending…' : 'Send'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <p className="text-[11px] text-[#a8a29e] text-center pt-1">
                {site.legalName} · RC {site.rcNumber} · {site.city}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
