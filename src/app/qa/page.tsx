import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Q&A Services list (footer-tab). light 1:27656 · dark 1:27665. frame 376×812.
 *   header + "Q&A Services" title + underline + 3 program cards (colour icon-chip @15% +
 *   program icon + title + colour chevron) + footer (Home active).
 */
const I = "/components/icons/qa";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

const ROWS = [
  { top: 121, color: "#1489af", icon: "medical", title: "Medical Admission Program 2025" },
  { top: 201, color: "#9824c1", icon: "varsity-ka", title: "Varsity KA Admission Program 2025" },
  { top: 281, color: "#ff0000", icon: "varsity-kha", title: "Varsity KHA Admission Program 2025" },
];

function QaRow({ top, color, icon, title }: { top: number; color: string; icon: string; title: string }) {
  return (
    <Link href="/qa/questions" className="absolute left-1/2 h-[68px] w-[336px] -translate-x-1/2 rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ top }}>
      <div className="absolute left-[12px] top-[16px] size-[36px] rounded-[8px]">
        <div className="absolute inset-0 rounded-[8px] opacity-[0.15]" style={{ backgroundColor: color }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="absolute left-1/2 top-1/2 size-[24px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <p className={`absolute left-[58px] right-[31px] top-1/2 -translate-y-1/2 font-['Inter',sans-serif] text-[14px] font-medium leading-[20px] ${TXT}`}>{title}</p>
      <svg width="9" height="17" viewBox="0 0 11.0887 21.3379" fill="none" aria-hidden="true" className="absolute right-[12px] top-1/2 -translate-y-1/2" style={{ color }}>
        <path d="M0.743294 0.668965L9.74329 10.669L0.743294 20.669" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Link>
  );
}

export default function QAServicesPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>Q&amp;A Services</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {ROWS.map((r) => (
        <QaRow key={r.icon} {...r} />
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
