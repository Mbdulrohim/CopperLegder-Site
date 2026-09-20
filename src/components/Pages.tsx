import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';
import { ContactForm } from './ContactForm';
import { SystemsIllustration } from './SystemsIllustration';
import { site } from '../content/site';

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1c1917]">
      <span className="border-b border-[#c27803] pb-0.5">{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function ContactBand() {
  return (
    <section className="px-5 sm:px-10 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto rounded-[28px] bg-[#1c1917] px-7 py-10 sm:px-12 sm:py-14 text-[#faf9f5] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.05] tracking-[-0.025em]">Bring us the way the business actually works.</h2>
        </div>
        <a href="/contact/" className="group shrink-0 self-start md:self-auto rounded-full bg-[#faf9f5] text-[#1c1917] px-6 py-3.5 text-sm font-semibold flex items-center gap-3 hover:bg-white transition-colors">
          Tell us what you need
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <article>
        <section className="px-5 sm:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-editorial text-[clamp(3.75rem,7vw,6.75rem)] leading-[0.88] tracking-[-0.055em] text-[#1c1917]">
                Software<br />businesses<br />run on.
              </h1>
              <p className="mt-10 sm:mt-12 text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e] max-w-2xl">
                Copper Ledger builds its own products and creates custom systems around how a business already operates. From Lagos, across borders.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <TextLink href="/work/">See the work</TextLink>
                <a href="/contact/" className="text-sm font-semibold text-[#78716c] hover:text-[#1c1917] transition-colors">Contact us</a>
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <SystemsIllustration />
            </div>
          </div>
        </section>

        <section className="border-y border-[#dedbd3] bg-[#f5f2eb] px-5 sm:px-10">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-3">
            <div className="py-8 sm:py-10 sm:pr-8 border-b sm:border-b-0 sm:border-r border-[#dedbd3]">
              <p className="font-editorial text-4xl sm:text-5xl tracking-[-0.04em]">₦1bn+</p>
              <p className="mt-2 text-sm text-[#78716c]">processed through Suite</p>
            </div>
            <div className="py-8 sm:py-10 sm:px-8 border-b sm:border-b-0 sm:border-r border-[#dedbd3]">
              <p className="font-editorial text-4xl sm:text-5xl tracking-[-0.04em]">Lagos</p>
              <p className="mt-2 text-sm text-[#78716c]">where Copper Ledger is based</p>
            </div>
            <div className="py-8 sm:py-10 sm:pl-8">
              <p className="font-editorial text-4xl sm:text-5xl tracking-[-0.04em]">Beyond borders</p>
              <p className="mt-2 text-sm text-[#78716c]">software used outside its home market</p>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-10 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.03em]">We make products. We build what does not exist yet.</h2>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 border-t md:border-t-0 md:border-l border-[#dedbd3]">
              <div className="pt-8 md:pt-1 md:px-10 pb-10 border-b md:border-b-0 md:border-r border-[#dedbd3]">
                <h3 className="font-editorial text-3xl mb-4">Our own operating software</h3>
                <p className="text-[16px] leading-7 text-[#78716c]">Suite follows the real work of stores, schools and hospitals: the stock, people, payments and records that cannot be left to guesswork.</p>
                <a href={site.suiteUrl} className="inline-flex items-center gap-2 mt-7 text-sm font-semibold">Visit Suite <ExternalLink className="w-3.5 h-3.5" /></a>
              </div>
              <div className="pt-8 md:pt-1 md:px-10">
                <h3 className="font-editorial text-3xl mb-4">Software shaped around the business</h3>
                <p className="text-[16px] leading-7 text-[#78716c]">Web applications, mobile applications and complete business systems, built around the operation rather than forced into a template.</p>
                <div className="mt-7"><TextLink href="/capabilities/">What we build</TextLink></div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 sm:px-10 pb-20 sm:pb-32">
          <div className="max-w-7xl mx-auto border-t border-[#dedbd3] pt-12 sm:pt-16 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <blockquote className="font-editorial text-4xl sm:text-6xl leading-[1.08] tracking-[-0.035em]">The interface is only the visible edge. The real work is making the whole system hold together.</blockquote>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 self-end text-[16px] leading-7 text-[#78716c]">We care about the unglamorous details: records that remain accurate, workflows people can follow, and software that keeps doing its job after launch.</p>
          </div>
        </section>
      </article>
      <ContactBand />
    </>
  );
}

export function WorkPage() {
  const kinds = [
    ['01', 'Business systems', 'Connected software for operations that have outgrown spreadsheets and disconnected tools.'],
    ['02', 'Web applications', 'Responsive products for teams and customers, designed for the work they need to complete.'],
    ['03', 'Mobile applications', 'Purpose-built mobile experiences that belong inside a wider, reliable system.'],
  ];

  return (
    <>
      <article className="px-5 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-5xl font-editorial text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.93] tracking-[-0.05em]">Built for the work behind the business.</h1>
          <p className="mt-10 max-w-2xl text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">Copper Ledger makes Suite and builds custom software for businesses in Nigeria and beyond.</p>

          <section className="mt-20 sm:mt-28 rounded-[28px] bg-[#1c1917] text-[#faf9f5] overflow-hidden">
            <div className="p-7 sm:p-12 lg:p-16 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-6xl sm:text-8xl tracking-[-0.05em]">Suite</h2>
                <p className="mt-7 text-lg sm:text-xl leading-8 text-[#c9c5bd] max-w-2xl">Operational software for stores, schools and hospitals. One system follows the records and transactions that make each business run.</p>
                <a href={site.suiteUrl} className="group inline-flex items-center gap-2 mt-9 text-sm font-semibold">suite.ng <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-px bg-[#3b3835] border border-[#3b3835] rounded-2xl overflow-hidden self-end">
                {[
                  ['Stores', 'Live'], ['Schools', 'Early access'], ['Hospitals', 'Early access'], ['Processed', '₦1bn+'],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#24211f] p-5 sm:p-6 min-h-28 flex flex-col justify-between">
                    <span className="text-xs text-[#918c84]">{label}</span><strong className="text-sm sm:text-base font-medium">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-24 sm:mt-32">
            <div className="grid lg:grid-cols-12 gap-10 mb-12">
              <div className="lg:col-span-5">
                <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.03em]">Not every business fits somebody else’s software.</h2>
              </div>
              <p className="lg:col-span-5 lg:col-start-8 text-lg leading-8 text-[#78716c] self-end">We build complete systems and focused applications around the business itself, including its records, decisions, customers and day-to-day work.</p>
            </div>
            <div className="border-t border-[#1c1917]">
              {kinds.map(([number, title, copy]) => (
                <div key={number} className="grid sm:grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-10 border-b border-[#dedbd3]">
                  <span className="sm:col-span-1 font-mono text-xs text-[#9a650d]">{number}</span>
                  <h3 className="sm:col-span-4 font-editorial text-3xl">{title}</h3>
                  <p className="sm:col-span-6 sm:col-start-7 text-[16px] leading-7 text-[#78716c]">{copy}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
      <ContactBand />
    </>
  );
}

export function CapabilitiesPage() {
  const capabilities = [
    ['01', 'Product and system design', 'We turn the way a business works into a clear product structure: users, records, permissions and the decisions that connect them.'],
    ['02', 'Web applications', 'Fast, accessible applications for internal teams, customers, or both. Built as products, not decorated pages.'],
    ['03', 'Mobile applications', 'Focused mobile software connected to the same dependable data and operations as the wider business.'],
    ['04', 'Custom business software', 'Purpose-built systems for inventory, transactions, people, billing, reporting and the workflows between them.'],
    ['05', 'Long-term product work', 'Software needs deliberate improvement after it goes live. We can keep building, refining and maintaining the system.'],
  ];

  return (
    <>
      <article className="px-5 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-5xl font-editorial text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.93] tracking-[-0.05em]">The whole system, not just the screen.</h1>
          <div className="mt-10 grid lg:grid-cols-12 gap-8">
            <p className="lg:col-span-7 text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">We build websites, mobile applications and custom software around the operation they need to support.</p>
            <p className="lg:col-span-4 lg:col-start-9 text-[16px] leading-7 text-[#78716c]">That means understanding the records, rules and people first. Technology follows the shape of the problem, never the other way around.</p>
          </div>

          <section className="mt-20 sm:mt-28 border-t border-[#1c1917]">
            {capabilities.map(([number, title, copy]) => (
              <div key={number} className="grid sm:grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-11 border-b border-[#dedbd3]">
                <span className="sm:col-span-1 font-mono text-xs text-[#9a650d]">{number}</span>
                <h2 className="sm:col-span-4 font-editorial text-3xl sm:text-4xl tracking-[-0.02em]">{title}</h2>
                <p className="sm:col-span-6 sm:col-start-7 text-[16px] sm:text-[17px] leading-7 text-[#78716c] max-w-xl">{copy}</p>
              </div>
            ))}
          </section>

          <section className="mt-24 sm:mt-32 grid lg:grid-cols-12 gap-10 border-t border-[#dedbd3] pt-12 sm:pt-16">
            <div className="lg:col-span-4">
              <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.03em]">Tell us where the work breaks down.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 grid sm:grid-cols-2 gap-8 text-[15px] leading-7 text-[#78716c]">
              <p>Bring the process people repeat, the spreadsheet nobody trusts, the hand-off that loses information, or the product that needs to exist.</p>
              <p>We will talk through what the business needs before deciding what should be designed and built.</p>
            </div>
          </section>
        </div>
      </article>
      <ContactBand />
    </>
  );
}

export function ContactPage() {
  return (
    <article className="px-5 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5">
          <h1 className="font-editorial text-[clamp(3.75rem,7vw,7rem)] leading-[0.92] tracking-[-0.05em]">Let’s talk about the work.</h1>
          <p className="mt-8 text-lg sm:text-xl leading-8 text-[#78716c] max-w-lg">Tell us what you run, what is getting in the way, and what you think software could do better.</p>
          <div className="mt-12 pt-8 border-t border-[#dedbd3] text-sm leading-7 text-[#78716c]">
            <p>Prefer email?</p>
            <a href={`mailto:${site.email}`} className="text-[#1c1917] underline underline-offset-4 decoration-[#c27803]">{site.email}</a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </div>
    </article>
  );
}
