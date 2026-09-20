import { ArrowRight } from 'lucide-react';
import copperLedgerWm from '../assets/CopperLedger WM.svg';
import type { SitePath } from '../App';

interface HeaderProps {
  currentPath: SitePath;
}

const links: { href: SitePath; label: string }[] = [
  { href: '/work/', label: 'Work' },
  { href: '/capabilities/', label: 'Capabilities' },
  { href: '/team/', label: 'Team' },
  { href: '/notes/', label: 'Notes' },
];

export function Header({ currentPath }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-transparent bg-[#faf9f5]/92 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 h-20 flex items-center justify-between gap-6">
        <a href="/" className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c27803] focus-visible:ring-offset-4">
          <img
            src={copperLedgerWm}
            alt="Copper Ledger"
            className="h-[20px] sm:h-[21px] w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-3 sm:gap-7">
          <nav aria-label="Primary" className="hidden sm:flex items-center gap-5 lg:gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={currentPath === link.href ? 'page' : undefined}
                className={`text-[13px] font-medium transition-colors ${
                  currentPath === link.href ? 'text-[#1c1917]' : 'text-[#78716c] hover:text-[#1c1917]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="/contact/"
            id="header-contact-us-btn"
            aria-current={currentPath === '/contact/' ? 'page' : undefined}
            className="group flex items-center gap-2 bg-[#1c1917] hover:bg-[#292524] active:scale-[0.98] text-white px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer"
          >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
      <nav aria-label="Mobile" className="sm:hidden px-5 pb-4 flex flex-wrap gap-x-6 gap-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={currentPath === link.href ? 'page' : undefined}
            className={`text-xs font-medium ${currentPath === link.href ? 'text-[#1c1917]' : 'text-[#78716c]'}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
