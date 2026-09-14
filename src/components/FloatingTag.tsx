import { useEffect, useState } from 'react';

/**
 * The eyebrow above the headline: what Copper Ledger makes, one line at a time.
 *
 * Same shape as before — a label, a monospaced status with a blinking cursor,
 * fading from one entry to the next, and a click to move it on. It used to show
 * stock photographs captioned "Dr. Adeleke", "Amaka" and "Tunde" beside
 * figures like "inventory oversight: 0 skew". None of them were customers and
 * none of the figures had been measured, so a visitor was being shown invented
 * people vouching for invented numbers. Each line is now a status that is true.
 */
const ITEMS = [
  { sector: 'Stores', status: 'suite · live' },
  { sector: 'Schools', status: 'suite · early access' },
  { sector: 'Hospitals', status: 'suite · early access' },
  { sector: 'Businesses', status: 'websites, apps, custom builds' },
];

export function FloatingTag() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const current = ITEMS[activeIdx] ?? ITEMS[0];

  const advance = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % ITEMS.length);
      setIsFading(false);
    }, 190);
  };

  useEffect(() => {
    const timer = setInterval(advance, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center mb-10">
      <button
        type="button"
        onClick={() => { if (!isFading) advance(); }}
        title="Show the next one"
        className="group inline-flex items-center justify-center h-10 select-none cursor-pointer"
      >
        <span
          aria-live="polite"
          className={`flex items-center gap-2.5 transition-all duration-200 ${
            isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
          }`}
        >
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#c27803] shrink-0" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1c1917] shrink-0">
              {current.sector}
            </span>
          </span>

          <span className="bg-[#f0ede6]/70 group-hover:bg-[#f0ede6] text-[#44403c] text-xs px-2.5 py-1 rounded-full font-mono flex items-center gap-1 transition-colors shrink-0">
            <span>{current.status}</span>
            <span className="w-1.5 h-3 bg-[#1c1917] inline-block animate-pulse opacity-60 ml-0.5" aria-hidden="true" />
          </span>
        </span>
      </button>
    </div>
  );
}
