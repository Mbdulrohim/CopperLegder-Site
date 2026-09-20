import copperLedgerWm from '../assets/CopperLedger WM.svg';
import { site } from '../content/site';

/**
 * The large wordmark, and the lines a registered company owes its website.
 *
 * It read "© 2026 Copper Ledger, Inc. All rights reserved." Copper Ledger is a
 * limited company in Nigeria, not an American Inc., and CAMA requires the
 * registration number here. The Terms, Privacy and Security links pointed at
 * anchors that did not exist, so they are gone until the pages do.
 */
export function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4] bg-[#faf9f5] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="pt-14 pb-10 sm:pt-20 sm:pb-14 flex items-center justify-center">
          <a href="/" className="w-full flex justify-center focus:outline-none group">
            <img
              src={copperLedgerWm}
              alt="Copper Ledger"
              className="w-[85%] max-w-4xl h-auto max-h-[119px] object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </a>
        </div>

        <div className="border-t border-[#e7e5e4]/80 py-8 grid md:grid-cols-3 items-center gap-6 text-xs text-[#78716c]">
          <nav aria-label="Footer" className="flex items-center justify-center md:justify-start gap-6">
            <a href="/work/" className="hover:text-[#1c1917] transition-colors">Work</a>
            <a href="/team/" className="hover:text-[#1c1917] transition-colors">Team</a>
            <a href="/notes/" className="hover:text-[#1c1917] transition-colors">Notes</a>
            <a href="/contact/" className="hover:text-[#1c1917] transition-colors">Contact</a>
          </nav>
          <div className="text-center">
            <a href={`mailto:${site.email}`} className="hover:text-[#1c1917] transition-colors">
              {site.email}
            </a>
          </div>

          <div className="text-center md:text-right space-y-1">
            {/* The year is the build's; a page prerendered in December still hydrates in January. */}
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} {site.legalName}. RC {site.rcNumber}. {site.city}, Nigeria.
            </p>
            <p>
              Built by{' '}
              <a href={site.author.url} rel="author" className="hover:text-[#1c1917] transition-colors">
                {site.author.name}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
