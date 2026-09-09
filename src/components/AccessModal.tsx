import { useState, FormEvent } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccessModal({ isOpen, onClose }: AccessModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('Continuous Close');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state or allow close
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-[#faf9f5] border border-[#e7e5e4] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 font-sans">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 text-[#78716c] hover:text-[#1c1917] hover:bg-[#e7e5e4]/50 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-2xl font-medium text-[#1c1917]">
              Invitation Requested
            </h3>
            <p className="text-sm text-[#78716c] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#1c1917] font-medium">{name || 'there'}</span>. We have logged your request for <span className="text-[#1c1917] font-medium">{company || 'your team'}</span> into the Copper Ledger Alpha queue.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#1c1917] hover:bg-[#292524] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer"
              >
                Return to manifesto
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e7e5e4] text-xs font-mono text-[#78716c] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c27803]" />
              PRIVATE ACCESS
            </div>

            <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#1c1917] mb-2">
              Request Copper Ledger Alpha
            </h3>
            <p className="text-sm text-[#78716c] mb-6">
              Access the next-generation general ledger engine built for software-native enterprise and autonomous agents.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#57534e] mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nicole Seah"
                  className="w-full bg-white border border-[#d6d3d1] focus:border-[#1c1917] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1917] placeholder:text-[#a8a29e] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#57534e] mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nicole@company.com"
                  className="w-full bg-white border border-[#d6d3d1] focus:border-[#1c1917] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1917] placeholder:text-[#a8a29e] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#57534e] mb-1.5">
                  Company / Organization
                </label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Inc."
                  className="w-full bg-white border border-[#d6d3d1] focus:border-[#1c1917] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1917] placeholder:text-[#a8a29e] outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#57534e] mb-1.5">
                  Primary Interest
                </label>
                <select
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full bg-white border border-[#d6d3d1] focus:border-[#1c1917] rounded-xl px-3.5 py-2.5 text-sm text-[#1c1917] outline-none transition-all"
                >
                  <option value="Continuous Close">Continuous Close & Real-Time Balancing</option>
                  <option value="Autonomous Agent Spend">Autonomous Agent Spend & Attestation</option>
                  <option value="ERP Replacement">Modern Replacement for Legacy ERP</option>
                  <option value="Developer API">High-Throughput Ledger API</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1c1917] hover:bg-[#292524] text-white py-3 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                >
                  <span>Submit Request</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              <p className="text-[11px] text-[#a8a29e] text-center pt-1">
                Zero spam. Guaranteed confidential onboarding.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
