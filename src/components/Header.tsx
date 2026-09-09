import { ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenAccess: () => void;
}

export function Header({ onOpenAccess }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#faf9f5]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-6 h-6 bg-[#1c1917] rounded-[4px] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
            {/* Minimalist modern ledger geometric cut */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-[#c27803] rounded-bl-[3px]" />
            <div className="w-1.5 h-1.5 bg-[#faf9f5] rounded-full z-10" />
          </div>
          <span className="font-sans tracking-wider font-bold text-base text-[#1c1917]">
            COPPER LEDGER
          </span>
        </a>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center gap-9 text-[15px] text-[#57534e] font-sans">
          <a
            href="#about"
            className="hover:text-[#1c1917] transition-colors"
          >
            About
          </a>
          <a
            href="#library"
            className="hover:text-[#1c1917] transition-colors"
          >
            Library
          </a>
          <a
            href="#irl"
            className="hover:text-[#1c1917] transition-colors"
          >
            IRL
          </a>
          <a
            href="#careers"
            className="hover:text-[#1c1917] transition-colors flex items-center gap-1.5"
          >
            Careers
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c27803]" />
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="header-get-access-btn"
            onClick={onOpenAccess}
            className="group flex items-center gap-2 bg-[#1c1917] hover:bg-[#292524] active:scale-[0.98] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer"
          >
            <span>Get access</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Floating Edge Starburst Badge as seen on the right edge in the screenshot */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <button
          type="button"
          onClick={onOpenAccess}
          title="Join Copper Ledger Alpha"
          className="bg-[#1c1917] hover:bg-[#292524] text-[#fbbf24] p-2.5 rounded-l-md shadow-lg border-l border-y border-[#292524] transition-transform hover:-translate-x-1 cursor-pointer flex items-center justify-center"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
        </button>
      </div>
    </header>
  );
}
