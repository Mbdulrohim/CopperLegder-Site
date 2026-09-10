import { useState, useEffect } from 'react';

export function FloatingTag() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const items = [
    {
      sector: 'Schools',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      name: 'Dr. Adeleke',
      message: 'student tracking sync: 100%',
    },
    {
      sector: 'Hospitals',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      name: 'Amaka',
      message: 'patient care workflow active',
    },
    {
      sector: 'Gadgets',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      name: 'Tunde',
      message: 'inventory oversight: 0 skew',
    },
  ];

  const current = items[activeIdx];

  const handleManualNext = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % items.length);
      setIsFading(false);
    }, 180);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % items.length);
        setIsFading(false);
      }, 200);
    }, 3200);

    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="flex justify-center mb-10">
      {/* Eyebrow container: borderless and transparent */}
      <div
        onClick={handleManualNext}
        title="Click to cycle sectors"
        className="group inline-flex items-center justify-center h-10 select-none cursor-pointer"
      >
        {/* Only the item inside transitions */}
        <div
          className={`flex items-center gap-2.5 transition-all duration-200 ${
            isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Avatar and name grouped tighter */}
          <div className="flex items-center gap-1.5 shrink-0">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-5 h-5 rounded-full object-cover ring-1 ring-black/5 shrink-0"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1c1917] shrink-0">
              {current.sector}
            </span>
          </div>

          {/* Message badge (no separating dot) */}
          <div className="bg-[#f0ede6]/70 group-hover:bg-[#f0ede6] text-[#44403c] text-xs px-2.5 py-1 rounded-full font-mono flex items-center gap-1 transition-colors shrink-0">
            <span>{current.message}</span>
            <span className="w-1.5 h-3 bg-[#1c1917] inline-block animate-pulse opacity-60 ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
