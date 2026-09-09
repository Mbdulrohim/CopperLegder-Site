import { useState } from 'react';

export function FloatingTag() {
  const [activeIdx, setActiveIdx] = useState(0);

  const notes = [
    {
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      name: 'Sara',
      message: 'hey team - do we thi',
      fullMessage: 'hey team - do we reconcile batch #408 before Friday close?',
      timestamp: 'Just now',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      name: 'Marcus',
      message: 'debit line verified',
      fullMessage: 'debit line verified against Stripe Connect webhook',
      timestamp: '2m ago',
    },
    {
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      name: 'Elena',
      message: 'agent ledger sync: 0.2ms',
      fullMessage: 'agent ledger sync completed in 0.2ms with zero skew',
      timestamp: '5m ago',
    },
  ];

  const current = notes[activeIdx];

  const toggleNext = () => {
    setActiveIdx((prev) => (prev + 1) % notes.length);
  };

  return (
    <div className="flex justify-center mb-10">
      <div
        onClick={toggleNext}
        title="Click to cycle live team activity"
        className="group inline-flex items-center gap-2 bg-white/90 hover:bg-white border border-[#e7e5e4] shadow-[0_2px_12px_-3px_rgba(0,0,0,0.06)] rounded-full pl-1.5 pr-4 py-1.5 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-[#d6d3d1] select-none"
      >
        <img
          src={current.avatar}
          alt={current.name}
          className="w-7 h-7 rounded-full object-cover ring-1 ring-black/5"
          referrerPolicy="no-referrer"
        />
        <span className="text-sm font-medium text-[#1c1917]">
          {current.name}
        </span>
        <div className="bg-[#f5f5f4] group-hover:bg-[#f0ede6] text-[#44403c] text-xs px-2.5 py-1 rounded-full font-mono flex items-center gap-1 transition-colors">
          <span>{current.message}</span>
          <span className="w-1.5 h-3 bg-[#1c1917] inline-block animate-pulse opacity-60 ml-0.5" />
        </div>
      </div>
    </div>
  );
}
