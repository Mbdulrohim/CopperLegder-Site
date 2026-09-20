import { ArrowLeft, ArrowRight } from 'lucide-react';
import { site } from '../content/site';

const note = {
  slug: '/notes/software-should-follow-the-business/',
  title: 'Software should follow the business.',
  summary: 'Good business software starts with the work people already do.',
  readTime: '3 minute read',
} as const;

function ClosingContact() {
  return (
    <section className="mt-24 sm:mt-32 border-t border-[#1c1917] pt-10 grid md:grid-cols-12 gap-8 items-end">
      <h2 className="md:col-span-7 font-editorial text-4xl sm:text-5xl leading-[1.06] tracking-[-0.03em]">Need software? Talk to the team that will build it.</h2>
      <a href="/contact/" className="md:col-span-4 md:col-start-9 group inline-flex items-center justify-between border-b border-[#1c1917] pb-3 text-sm font-semibold">
        Contact Copper Ledger
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  );
}

export function TeamPage() {
  const disciplines = [
    ['Product planning', 'We learn what the business needs and decide what the software should do.'],
    ['Clear design', 'We make complicated work easier to understand and complete.'],
    ['Building and support', 'We build, maintain and improve the software over time.'],
  ];

  return (
    <article className="px-5 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="max-w-5xl font-editorial text-[clamp(3.75rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.05em]">Meet the team.</h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <p className="lg:col-span-7 text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">Copper Ledger is a software company in Lagos. We make Suite and build custom software for other businesses.</p>
          <p className="lg:col-span-4 lg:col-start-9 text-[16px] leading-7 text-[#78716c]">The people who plan each product work closely with the people who design, build and maintain it.</p>
        </div>

        <section className="mt-20 sm:mt-28 grid md:grid-cols-2 border-t border-[#1c1917]">
          {site.founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`py-10 sm:py-14 ${index === 0 ? 'md:pr-12 border-b md:border-b-0 md:border-r' : 'md:pl-12 border-b md:border-b-0'} border-[#dedbd3]`}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f1ede4] flex items-center justify-center font-editorial text-3xl sm:text-4xl text-[#9a650d]" aria-hidden="true">
                {founder.initials}
              </div>
              <h2 className="mt-8 font-editorial text-4xl sm:text-5xl leading-[1.05] tracking-[-0.03em]">
                {founder.name}
              </h2>
              <p className="mt-3 text-base text-[#78716c]">{founder.role}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 sm:mt-28 grid lg:grid-cols-12 border-y border-[#dedbd3]">
          <div className="lg:col-span-5 py-10 sm:py-14 lg:pr-14 border-b lg:border-b-0 lg:border-r border-[#dedbd3]">
            <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.03em]">One team from planning to maintenance.</h2>
          </div>
          <div className="lg:col-span-7 py-10 sm:py-14 lg:pl-14 flex items-end">
            <p className="text-lg sm:text-xl leading-8 text-[#78716c] max-w-2xl">The same team works on our own products and client projects. What we learn from Suite helps us build better custom software, and client work helps us improve Suite.</p>
          </div>
        </section>

        <section className="mt-20 sm:mt-28">
          <h2 className="font-editorial text-4xl sm:text-5xl tracking-[-0.03em] mb-10">How the team works</h2>
          <div className="border-t border-[#1c1917]">
            {disciplines.map(([title, copy], index) => (
              <div key={title} className="grid sm:grid-cols-12 gap-4 sm:gap-8 py-8 sm:py-10 border-b border-[#dedbd3]">
                <span className="sm:col-span-1 text-sm text-[#9a650d]">0{index + 1}</span>
                <h3 className="sm:col-span-4 font-editorial text-3xl">{title}</h3>
                <p className="sm:col-span-6 sm:col-start-7 text-[16px] leading-7 text-[#78716c]">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 sm:mt-28 max-w-3xl">
          <p className="font-editorial text-3xl sm:text-4xl leading-[1.2] tracking-[-0.025em]">Based in {site.city}. Building software for businesses in Nigeria and other countries.</p>
        </div>

        <ClosingContact />
      </div>
    </article>
  );
}

export function NotesPage() {
  return (
    <article className="px-5 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-editorial text-[clamp(4rem,9vw,8rem)] leading-[0.9] tracking-[-0.055em]">Notes.</h1>
        <p className="mt-9 max-w-2xl text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">Ideas and lessons from building software for businesses.</p>

        <section className="mt-20 sm:mt-28 border-t border-[#1c1917]">
          <a href={note.slug} className="group grid md:grid-cols-12 gap-6 md:gap-10 py-10 sm:py-14 border-b border-[#dedbd3]">
            <h2 className="md:col-span-7 font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.03em] group-hover:text-[#9a650d] transition-colors">{note.title}</h2>
            <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between gap-8">
              <p className="text-[16px] leading-7 text-[#78716c]">{note.summary}</p>
              <span className="inline-flex items-center justify-between text-sm font-medium">
                {note.readTime}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </section>
      </div>
    </article>
  );
}

export function NoteArticlePage() {
  return (
    <article className="px-5 sm:px-10 pt-12 sm:pt-20 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto">
        <a href="/notes/" className="inline-flex items-center gap-2 text-sm text-[#78716c] hover:text-[#1c1917] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Notes
        </a>

        <header className="mt-12 sm:mt-16 max-w-5xl">
          <h1 className="font-editorial text-[clamp(3.75rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.05em]">{note.title}</h1>
          <p className="mt-9 max-w-3xl text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">{note.summary}</p>
          <p className="mt-6 text-sm text-[#8c867e]">By Copper Ledger · {note.readTime}</p>
        </header>

        <div className="mt-16 sm:mt-24 max-w-[720px] mx-auto article-copy">
          <p className="article-lead">Good business software starts with the work people already do. That may be recording a sale, collecting school fees or moving a patient from reception to the pharmacy.</p>

          <h2>Start with the records</h2>
          <p>A store must know which device arrived, where it went and whether the customer paid. A school needs one clear record for each student and family. A hospital needs one patient record that follows the visit from one department to the next.</p>
          <p>Before we design screens, we identify the records the business needs and the rules that keep them accurate.</p>

          <h2>Follow work between people</h2>
          <p>Many problems happen when work moves from one person to another. Someone records information, another person uses it, and someone else checks the result.</p>
          <p>The software should show what happened, who did it and what needs to happen next. A generic template often stores the data but misses these steps.</p>

          <h2>Make every screen useful</h2>
          <p>A good screen shows the right information at the right time. The next action is clear. It should be hard to make mistakes and easy to correct them.</p>
          <p>Good design makes the system easier to understand. Colour and motion cannot fix a system that does not work.</p>

          <h2>Keep improving after launch</h2>
          <p>People will use the software in ways no plan can predict. We watch where they struggle, fix problems and improve the product without breaking what already works.</p>
          <p>We use this approach for Suite and for the custom software we build.</p>
        </div>

        <ClosingContact />
      </div>
    </article>
  );
}
