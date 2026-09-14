import { FloatingTag } from './FloatingTag';
import { site } from '../content/site';

interface ManifestoProps {
  onOpenAccess?: () => void;
}

/**
 * The page, as one piece of writing.
 *
 * The shape is the design and it stays: an editorial headline, a long opening
 * paragraph with a drop cap, a shorter one that ends on the call to action, and
 * a note in the margin. What changed is that every sentence is now something
 * true today. It used to call Copper Ledger "a software consortium giving
 * forward-thinking Nigerian businesses a definitive avenue to demand success
 * from their future", promise to "guarantee that every client is promptly and
 * thoroughly catered to", and cite, in its footnote, an essay in a publication
 * that does not exist.
 *
 * The margin note is real now: where Suite lives, and the registration number
 * CAMA requires the site to carry.
 */
export function Manifesto({ onOpenAccess }: ManifestoProps) {
  return (
    <article className="pt-12 pb-24 relative">
      <FloatingTag />

      <div className="text-center px-4 mb-16 sm:mb-20">
        <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.08] tracking-[-0.03em] text-[#1c1917] max-w-4xl mx-auto font-normal">
          The modern business<br />
          partner
        </h1>
      </div>

      <div className="max-w-[680px] mx-auto px-6 sm:px-8 relative">
        <div className="space-y-7 text-[17px] sm:text-[18px] leading-[1.78] text-[#777777] tracking-[0.5px] font-inter font-normal">
          <div className="relative">
            <p className="drop-cap">
              Copper Ledger is a software company in {site.city}. We build the systems a business runs on, and we run one of our own:{' '}
              <a
                href={site.suiteUrl}
                className="font-medium text-[#1c1917] underline decoration-[#c27803]/40 decoration-2 underline-offset-4 hover:decoration-[#c27803] transition-colors"
              >
                Suite
              </a>
              <sup className="font-editorial text-sm font-semibold text-[#c27803] ml-0.5">
                <a href="#note-1" aria-label="Note 1">1</a>
              </sup>
              , which has processed over ₦1 billion for the businesses that use it. For{' '}
              <span className="font-medium text-[#1c1917]">stores</span>, Suite tracks every phone, laptop and inverter by its IMEI or serial number, from the day it arrives to the day it sells. For{' '}
              <span className="font-medium text-[#1c1917]">schools</span>, it keeps every student and family on one record across every campus, with fees invoiced, paid and receipted. For{' '}
              <span className="font-medium text-[#1c1917]">hospitals</span>, it follows each patient from the front desk to the pharmacy and on to billing. Stores run on it today; schools and hospitals are in early access.
            </p>

            {/* The margin note: in the right gutter on desktop, under the paragraph on a phone. */}
            <aside
              id="note-1"
              className="lg:absolute lg:left-full lg:ml-12 lg:top-0 lg:w-[280px] mt-8 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#e7e5e4]"
            >
              <div className="text-[12px] sm:text-[13px] leading-[1.55] text-[#78716c] font-sans bg-[#f7f5ef]/80 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none">
                <span className="font-editorial font-bold text-[#1c1917] mr-1">1</span>
                <span>
                  Suite is at{' '}
                  <a href={site.suiteUrl} className="underline underline-offset-2 hover:text-[#1c1917]">suite.ng</a>.{' '}
                  {site.legalName} is registered with the Corporate Affairs Commission, RC {site.rcNumber}.
                </span>
              </div>
            </aside>
          </div>

          <p>
            We also build for other businesses: websites, mobile apps and custom software, shaped around how the business already works rather than how a template assumes it should. It is the same work we do on Suite, done for someone else. That is what deliberate work looks like. That is what measured progress looks like.{' '}
            <button
              type="button"
              onClick={onOpenAccess}
              className="font-semibold text-[#1c1917] underline decoration-[#c27803] decoration-2 underline-offset-4 hover:text-[#c27803] transition-colors cursor-pointer inline"
            >
              Contact us today.
            </button>
          </p>
        </div>
      </div>
    </article>
  );
}
