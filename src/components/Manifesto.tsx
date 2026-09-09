import { FloatingTag } from './FloatingTag';

export function Manifesto() {
  return (
    <article className="pt-12 pb-24 relative">
      {/* Floating collaborative tag above headline matching screenshot */}
      <FloatingTag />

      {/* Main Headline */}
      <div className="text-center px-4 mb-16 sm:mb-20">
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-[-0.03em] text-[#1c1917] max-w-4xl mx-auto font-normal">
          The modern team<br />
          ledger platform
        </h1>
      </div>

      {/* Content Column with Right-Gutter Footnote */}
      <div className="max-w-[680px] mx-auto px-6 sm:px-8 relative">
        {/* Paragraph 1 with Drop Cap & Paragraph 2 */}
        <div className="space-y-6 text-[17px] sm:text-[18px] leading-[1.72] text-[#292524] font-sans font-normal">
          <p className="drop-cap">
            Agents have gotten incredibly good at doing our work. But we still keep them outside the room where work actually happens. We hand them a task, send them off, and come back for the answer.
          </p>

          <p>
            But the best work has always been collaborative. Ideas get sharper as they move between people, and momentum builds when everyone moves together. The future isn’t everyone working alongside their own AI... it’s companies becoming greater than the sum of all the people and machines inside them.
          </p>
        </div>

        {/* Section: The current system is broken */}
        <div className="mt-14 space-y-5 text-[17px] sm:text-[18px] leading-[1.72] text-[#292524] font-sans">
          <h2 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-[#1c1917] pt-2">
            The current system is broken
          </h2>

          <div className="relative">
            <p>
              Unfortunately, existing messaging platforms have held us back from what should be possible when people and agents are truly working in flow. This is why we are working on “the new Slack”<sup className="font-editorial text-sm font-semibold text-[#c27803] cursor-pointer ml-0.5" title="Footnote 1">1</sup>.
            </p>

            {/* Footnote matching screenshot: On desktop, positioned in the right gutter */}
            <aside className="lg:absolute lg:left-full lg:ml-12 lg:top-0 lg:w-[280px] mt-6 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#e7e5e4]">
              <div className="text-[12px] sm:text-[13px] leading-[1.55] text-[#78716c] font-sans bg-[#f7f5ef]/80 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none">
                <span className="font-editorial font-bold text-[#1c1917] mr-1">1</span>
                <span>Sam Afolabi, “Copper Ledger: Building from Scratch,” </span>
                <span className="italic">New Ontologies</span>
                <span>, April 21, 2026</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

