import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { ExamResultCard } from "@/components/cards/ExamResultCard";

/*
 * Figma V2 — Performance Report, filter-expanded variant. light 1:30358 · dark 1:30740.
 *   Same as /performance/report but the 3 filter pills are replaced by a "Filter" button
 *   (y166) + 4 dropdown rows (Admission / All Subject / All Platform / All Platform, y212–332),
 *   pushing the report body down by +156. frame 376×2734.
 */
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const I = "/components/icons/perf";
const F = "/components/icons/filter";
const AC = "/components/icons/add-course";
const FILTERS = ["Admission", "All Subject", "All Platform", "All Platform"];

function PillStat({ icon, label, value, top }: { icon: string; label: string; value: string; top: number }) {
  return (
    <div className="absolute left-[12px] flex h-[39px] w-[304px] items-center justify-between rounded-[5px] bg-white px-[12px] shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_4px_0px_rgba(0,0,0,0.5)]" style={{ top }}>
      <span className="flex items-center gap-[6px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="size-[18px]" />
        <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>{label}</span>
      </span>
      <span className={`font-['Inter',sans-serif] text-[16px] font-bold ${TXT}`}>{value}</span>
    </div>
  );
}

export default function PerformanceReportFilteredPage() {
  return (
    <main className="relative mx-auto min-h-[2734px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(82.0453deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Performance Report</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[183px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className="absolute left-1/2 top-[111px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Employee Training Program 2021</p>

      {/* Filter button */}
      <div className="absolute left-[147px] top-[166px] flex h-[32px] w-[83px] items-center justify-center gap-[12px] rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Filter</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${F}/funnel.svg`} alt="" aria-hidden="true" className="h-[16px] w-[21px]" />
      </div>
      {/* 4 filter dropdowns */}
      {FILTERS.map((label, i) => (
        <div key={i} className="absolute left-[24px] flex h-[32px] w-[328px] items-center justify-between rounded-[5px] bg-white px-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]" style={{ top: 212 + i * 40 }}>
          <span className={`font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] ${TXT}`}>{label}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${AC}/batch-chevron.svg`} alt="" aria-hidden="true" className="h-[4px] w-[8px] dark:invert" />
        </div>
      ))}

      <p className={`absolute left-[24px] top-[394px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Employee Training Course</p>

      <ExamResultCard top={424} status="In Branch" statusColor="#25b7d3" />
      <ExamResultCard top={821} status="Live" statusColor="#ff3a3a" />
      <ExamResultCard top={1218} status="In Branch" statusColor="#25b7d3" />
      <ExamResultCard top={1615} status="In Branch" statusColor="#25b7d3" />

      {/* Course Total row */}
      <div className="absolute left-[24px] top-[2018px] flex h-[62px] w-[328px] items-center justify-between rounded-[10px] bg-white px-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <span className="flex items-center gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/badge.svg`} alt="" aria-hidden="true" className="size-[20px]" />
          <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Course Total</span>
        </span>
        <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] ${TXT}`}>-4/1715</span>
      </div>

      <p className={`absolute left-[24px] top-[2096px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Course Merit Summary</p>

      {/* Course Merit Summary card */}
      <div className="absolute left-[24px] top-[2126px] h-[423px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className={`absolute left-[12px] top-[20px] w-[304px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[20px] ${TXT}`}>1. Engineering Full Course (Offline)</p>
        <p className="absolute left-[12px] top-[48px] font-['Inter',sans-serif] text-[12px] text-[#999999]">Based on In-Branch Exam</p>
        <PillStat icon="mcq" label="MCQ" value="0.00/1000" top={75} />
        <PillStat icon="written" label="Written" value="0.00/1000" top={122} />
        <PillStat icon="obtained" label="Total Obtained" value="0.00/1000" top={169} />
        <PillStat icon="total" label="Highest" value="0.00/1000" top={216} />
        <div className="absolute left-[12px] top-[271px] flex items-center gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/merit.svg`} alt="" aria-hidden="true" className="h-[14px] w-[16px]" />
          <span className={`font-['Inter',sans-serif] text-[14px] font-semibold ${TXT}`}>Merit Rankings</span>
        </div>
        <span className={`absolute left-[12px] top-[301px] font-['Inter',sans-serif] text-[12px] ${TXT}`}>Central - 49 </span>
        <span className={`absolute right-[12px] top-[301px] font-['Inter',sans-serif] text-[12px] ${TXT}`}>Branch - 15 </span>
        <div className="absolute left-[89px] top-[367px] flex h-[36px] w-[150px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">View Result</span>
        </div>
      </div>

      {/* Total Performance row */}
      <div className="absolute left-[24px] top-[2565px] flex h-[73px] w-[328px] items-center justify-between rounded-[10px] bg-white px-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <span className="flex items-center gap-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/badge.svg`} alt="" aria-hidden="true" className="size-[20px]" />
          <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Total Performance</span>
        </span>
        <span className="flex flex-col items-end">
          <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] ${TXT}`}>0.00/1000</span>
          <span className="font-['Inter',sans-serif] text-[12px] text-[#616161] dark:text-[#e8e8e8]">Total Marks Obtained</span>
        </span>
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
