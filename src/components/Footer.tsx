import copperLedgerWm from '../assets/CopperLedger WM.svg';

export function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4] bg-[#faf9f5] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Big Wordmark Display (0.85x scaled) */}
        <div className="pt-14 pb-10 sm:pt-20 sm:pb-14 flex items-center justify-center">
          <a href="/" className="w-full flex justify-center focus:outline-none group">
            <img
              src={copperLedgerWm}
              alt="Copper Ledger"
              className="w-[85%] max-w-4xl h-auto max-h-[119px] object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>
        </div>

        {/* Bottom Bar: Terms on one side, Copyright on the other */}
        <div className="border-t border-[#e7e5e4]/80 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-[#1c1917] transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="hover:text-[#1c1917] transition-colors">
              Privacy Policy
            </a>
            <a href="#security" className="hover:text-[#1c1917] transition-colors">
              Security
            </a>
          </div>

          <div>
            © 2026 Copper Ledger, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

