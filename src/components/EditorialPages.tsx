import { ArrowLeft, ArrowRight } from 'lucide-react';
import { site } from '../content/site';

const note = {
  slug: '/notes/software-should-follow-the-business/',
  title: 'Software should follow the business.',
  summary: 'Useful business software begins with the operation, its records and the people doing the work.',
  readTime: '4 minute read',
} as const;

function ClosingContact() {
  return (
    <section className="mt-24 sm:mt-32 border-t border-[#1c1917] pt-10 grid md:grid-cols-12 gap-8 items-end">
      <h2 className="md:col-span-7 font-editorial text-4xl sm:text-5xl leading-[1.06] tracking-[-0.03em]">Work with the people who build the system.</h2>
      <a href="/contact/" className="md:col-span-4 md:col-start-9 group inline-flex items-center justify-between border-b border-[#1c1917] pb-3 text-sm font-semibold">
        Contact Copper Ledger
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </section>
  );
}

export function TeamPage() {
  const disciplines = [
    ['Product judgement', 'Understanding what the business needs before deciding what the software should become.'],
    ['Design clarity', 'Making complicated work legible without stripping away the details that matter.'],
    ['Engineering ownership', 'Building, maintaining and improving the same systems over time.'],
  ];

  return (
    <article className="px-5 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="max-w-5xl font-editorial text-[clamp(3.75rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.05em]">The people behind the systems.</h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <p className="lg:col-span-7 text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">Copper Ledger is a product and engineering team in Lagos. We build Suite, and we build software for businesses whose work deserves more than a generic template.</p>
          <p className="lg:col-span-4 lg:col-start-9 text-[16px] leading-7 text-[#78716c]">The people who think through the product stay close to the people who design, build and maintain it. Responsibility does not disappear between departments.</p>
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
            <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.03em]">Small enough to stay responsible.</h2>
          </div>
          <div className="lg:col-span-7 py-10 sm:py-14 lg:pl-14 flex items-end">
            <p className="text-lg sm:text-xl leading-8 text-[#78716c] max-w-2xl">Copper Ledger works as one team across its own products and custom work. What we learn from operating Suite improves what we build for others. What we learn from other businesses sharpens Suite.</p>
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
          <p className="font-editorial text-3xl sm:text-4xl leading-[1.2] tracking-[-0.025em]">Based in {site.city}, building for businesses at home and across borders.</p>
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
        <p className="mt-9 max-w-2xl text-xl sm:text-2xl leading-[1.5] tracking-[-0.02em] text-[#57534e]">What Copper Ledger has learned from building and operating software for real businesses.</p>

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
          <p className="article-lead">A business does not begin with a dashboard. It begins with work: a sale, a patient arriving, a student returning for another term, a payment that needs to be understood months later.</p>

          <h2>Start with what must remain true</h2>
          <p>Every useful system protects a set of truths. A store needs to know which exact device arrived, where it went and whether it was paid for. A school needs one dependable history for a student and family. A hospital needs a patient’s visit to remain coherent as it moves between people and departments.</p>
          <p>If those truths are unclear, adding screens only makes the confusion faster. Product work starts by identifying the records the business relies on and the rules that keep those records trustworthy.</p>

          <h2>Follow the hand-offs</h2>
          <p>Most operational problems live between roles. One person records information, another acts on it, and someone else has to explain the result. A system succeeds when those hand-offs remain visible and understandable.</p>
          <p>This is why generic templates often fail serious operations. They model the common nouns but miss the relationships. They can store a customer or an invoice while ignoring the decisions that connect them.</p>

          <h2>Make the interface earn its place</h2>
          <p>A polished interface matters, but polish is not decoration. It is the removal of hesitation. The right information appears when a decision has to be made. The next action is clear. Errors are difficult to create and straightforward to correct.</p>
          <p>Good design makes the underlying system easier to understand. It does not hide a weak system behind colour, motion or impressive language.</p>

          <h2>Stay after launch</h2>
          <p>Real use exposes what planning cannot. A dependable software company watches how the product behaves in the operation, learns where friction remains and improves the system without breaking the trust already placed in it.</p>
          <p>That is the standard we use for Suite and for the custom software we build. The software follows the business closely enough to support it, then becomes sturdy enough for the business to rely on.</p>
        </div>

        <ClosingContact />
      </div>
    </article>
  );
}
