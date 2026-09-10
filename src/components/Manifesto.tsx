import { FloatingTag } from './FloatingTag';

interface ManifestoProps {
  onOpenAccess?: () => void;
}

export function Manifesto({ onOpenAccess }: ManifestoProps) {
  return (
    <article className="pt-12 pb-24 relative">
      {/* Floating collaborative tag above headline matching screenshot */}
      <FloatingTag />

      {/* Main Headline */}
      <div className="text-center px-4 mb-16 sm:mb-20">
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-[-0.03em] text-[#1c1917] max-w-4xl mx-auto font-normal">
          The modern business<br />
          partner
        </h1>
      </div>

      {/* Content Column with Right-Gutter Footnote */}
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 relative">
        <div className="space-y-7 text-[17px] sm:text-[18px] leading-[1.78] text-[#555555] tracking-[1px] font-sans font-normal">
          {/* Paragraph 1 with Drop Cap */}
          <p className="drop-cap">
            At CopperLedger, we are a software consortium giving forward-thinking Nigerian businesses a definitive avenue to demand success from their future. We build digital interfaces and intelligent software engineered to help enterprises accurately measure, interpret, and manage the metrics that drive growth. For <span className="font-medium text-[#1c1917]">schools</span>, our platforms streamline administration and student tracking to directly elevate academic performance. For <span className="font-medium text-[#1c1917]">hospitals</span>, our systems optimize patient care workflows to guarantee that every client is promptly and thoroughly catered to. For <span className="font-medium text-[#1c1917]">gadgets</span> and electronics vendors, we provide transparent oversight to monitor every unit of inventory and ensure end consumers receive an exceptional experience. Across every sector, our objective is to anchor day-to-day operations to clear, measurable outcomes that define modern industry.
          </p>

          {/* Paragraph 2 with Call to Action and Footnote */}
          <div className="relative pt-2">
            <p>
              From robust inventory management systems and tailored CRM infrastructure to responsive websites and enterprise mobile applications, we engineer with relentless speed, an obsession with quality, and unyielding scalability. That is what deliberate work looks like. That is what measured progress looks like.<sup className="font-editorial text-sm font-semibold text-[#c27803] cursor-pointer ml-0.5" title="Footnote 1">1</sup>{' '}
              <button
                type="button"
                onClick={onOpenAccess}
                className="font-semibold text-[#1c1917] underline decoration-[#c27803] decoration-2 underline-offset-4 hover:text-[#c27803] transition-colors cursor-pointer inline"
              >
                Contact Us today.
              </button>
            </p>

            {/* Footnote: On desktop, positioned in the right gutter */}
            <aside className="lg:absolute lg:left-full lg:ml-12 lg:top-0 lg:w-[280px] mt-8 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#e7e5e4]">
              <div className="text-[12px] sm:text-[13px] leading-[1.55] text-[#78716c] font-sans bg-[#f7f5ef]/80 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none">
                <span className="font-editorial font-bold text-[#1c1917] mr-1">1</span>
                <span>Sam Afolabi, “Copper Ledger: Deliberate Engineering,” </span>
                <span className="italic">New Ontologies</span>
                <span>, 2026</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

