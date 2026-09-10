import { ArrowRight, Sparkles } from 'lucide-react';
import copperLedgerWm from '../assets/CopperLedger WM.svg';

interface HeaderProps {
  onOpenAccess: () => void;
}

export function Header({ onOpenAccess }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf9f5]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo: Wordmark from asset (0.85x of 24px = 20.4px) */}
        <a href="/" className="flex items-center group focus:outline-none">
          <img
            src={copperLedgerWm}
            alt="Copper Ledger"
            className="h-[20.4px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="header-contact-us-btn"
            onClick={onOpenAccess}
            className="group flex items-center gap-2 bg-[#1c1917] hover:bg-[#292524] active:scale-[0.98] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Floating Edge Starburst Badge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <button
          type="button"
          onClick={onOpenAccess}
          title="Contact Us"
          className="bg-[#1c1917] hover:bg-[#292524] text-[#fbbf24] p-2.5 rounded-l-md shadow-lg border-l border-y border-[#292524] transition-transform hover:-translate-x-1 cursor-pointer flex items-center justify-center"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
        </button>
      </div>
    </header>
  );
}
