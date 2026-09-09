export function Footer() {
  return (
    <footer className="border-t border-[#e7e5e4] bg-[#faf9f5] py-10 font-sans text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-[#1c1917] rounded-[3px] flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#c27803] rounded-bl-[2px]" />
            <div className="w-1 h-1 bg-[#faf9f5] rounded-full z-10" />
          </div>
          <span className="font-sans tracking-wider font-bold text-sm text-[#1c1917]">
            COPPER LEDGER, INC.
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#78716c]">
          © 2026 Copper Ledger, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

