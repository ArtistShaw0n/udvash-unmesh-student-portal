import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { ProgramListCard } from "@/components/cards/ProgramListCard";

/*
 * Figma V2 — Performance Report screen, program list (state A). light 1:6583 · dark 1:6613.
 *   header + "Performance Report" title (y74) + underline (y100, w256) + 2 wide filter
 *   pills (All Course / All Program, w159, y141) + 2 program cards (hero banner + title +
 *   "View Report", y203, gap-20) + footer. frame 376×1015. (Same card as Program List.)
 */
function PerfFilterPill({ label, left }: { label: string; left: number }) {
  return (
    <div className="absolute top-[141px] flex h-[32px] w-[159px] items-center justify-between rounded-[99px] bg-white px-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]" style={{ left }}>
      <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] text-[#616161] dark:text-[#e8e8e8]">{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/filter-chevron.svg" alt="" aria-hidden="true" className="h-[4px] w-[8px]" />
    </div>
  );
}

export default function PerformancePage() {
  return (
    <main className="relative mx-auto min-h-[1015px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(70.4596deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Performance Report
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[256px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <PerfFilterPill label="All Course" left={24} />
      <PerfFilterPill label="All Program" left={193} />

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <ProgramListCard heroSrc="/components/images/performance-employee.png" title="Employee Training Program 2021 (Online)" ctaLabel="View Report" />
        <ProgramListCard heroSrc="/components/images/performance-class12.png" title="Class 12 Academic Program Online 2025" ctaLabel="View Report" />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
