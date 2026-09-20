import { Boxes, Globe2, Smartphone, Workflow } from 'lucide-react';
import copperLedgerLogo from '../assets/CopperLedger Logo.svg';

const nodes = [
  { label: 'Suite', icon: Boxes, position: 'left-[3%] top-[8%]', delay: '0s' },
  { label: 'Web apps', icon: Globe2, position: 'right-[2%] top-[16%]', delay: '-1.5s' },
  { label: 'Mobile apps', icon: Smartphone, position: 'left-[5%] bottom-[10%]', delay: '-3s' },
  { label: 'Custom systems', icon: Workflow, position: 'right-[0%] bottom-[7%]', delay: '-4.5s' },
] as const;

export function SystemsIllustration() {
  return (
    <figure className="relative aspect-square w-full max-w-[500px] ml-auto" aria-label="Copper Ledger connects its products, web apps, mobile apps and custom systems.">
      <figcaption className="sr-only">Copper Ledger connects Suite, web applications, mobile applications and custom systems.</figcaption>

      <div
        className="absolute inset-0 rounded-[36px] border border-[#dedbd3] overflow-hidden"
        style={{
          backgroundColor: '#f5f2eb',
          backgroundImage: 'linear-gradient(#dedbd366 1px, transparent 1px), linear-gradient(90deg, #dedbd366 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        <div className="absolute inset-[14%] rounded-full border border-[#d9d4ca] system-ring" />
        <div className="absolute inset-[27%] rounded-full border border-[#d9d4ca] system-ring system-ring-reverse" />

        <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <path d="M250 250 C205 210 155 145 91 87" className="system-connector" />
          <path d="M250 250 C310 210 355 145 416 123" className="system-connector system-connector-delay-1" />
          <path d="M250 250 C195 300 145 350 94 411" className="system-connector system-connector-delay-2" />
          <path d="M250 250 C305 300 360 355 421 422" className="system-connector system-connector-delay-3" />
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#faf9f5] border border-[#cbc5ba] shadow-[0_16px_50px_rgba(28,25,23,0.10)] flex items-center justify-center z-10">
          <img src={copperLedgerLogo} alt="" className="w-20 h-auto" />
        </div>

        {nodes.map(({ label, icon: Icon, position, delay }) => (
          <div
            key={label}
            className={`system-node absolute ${position} z-20 min-w-[128px] rounded-2xl border border-[#d7d1c7] bg-[#faf9f5] px-4 py-3 shadow-[0_10px_30px_rgba(28,25,23,0.08)] flex items-center gap-3`}
            style={{ animationDelay: delay }}
          >
            <span className="w-8 h-8 rounded-full bg-[#eee6d7] text-[#9a650d] flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4" strokeWidth={1.7} />
            </span>
            <span className="text-[13px] font-medium whitespace-nowrap">{label}</span>
          </div>
        ))}

        <div className="absolute left-[14%] top-[48%] w-2 h-2 rounded-full bg-[#c27803] system-signal" />
        <div className="absolute right-[13%] top-[51%] w-2 h-2 rounded-full bg-[#c27803] system-signal system-signal-delay" />
      </div>
    </figure>
  );
}
