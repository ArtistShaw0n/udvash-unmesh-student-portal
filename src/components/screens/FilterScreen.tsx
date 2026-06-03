import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Filter (Past Class + Filter button / expandable filter dropdowns).
 *   collapsed 1:30151 (h1099) · expanded 1:30195 (h1265), each light/dark.
 *   "Past Class" title + "Filter" button (#55347b + funnel) + (expanded) 4 filter
 *   dropdowns + 2 Past Class cards (band + title + Online chip + chapter + Date & Time +
 *   Course + Video/Notes) + footer (Home active).
 */
const F = "/components/icons/filter";
const AC = "/components/icons/add-course";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const FILTERS = ["Admission", "All Subject", "All Platform", "All Platform"];

function PastCard({ top }: { top: number }) {
  return (
    <div className="absolute left-[24px] h-[402px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ top }}>
      <div className="absolute inset-x-0 top-0 h-[92px] rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" />
      <p className={`absolute left-[20px] top-[36px] h-[44px] w-[288px] overflow-hidden font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] ${TXT}`}>Engineering Daily MCQ Practice Exam Engineering Daily MCQ Practi...</p>
      <span className="absolute left-[265px] top-[6px] flex h-[20px] items-center rounded-[10px] border border-[#ff0000] px-[10px] font-['Inter',sans-serif] text-[12px] font-medium leading-[12px] text-[#ff0000]">Online</span>
      <p className={`absolute left-[20px] top-[112px] w-[288px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[20px] ${TXT}`}>মৌলের পর্যায়বৃত্ত ধর্ম (পর্যায়বৃত্ত ধর্ম পর্যন্ত) [d-ব্লক মৌল এবং জটিল যৌগের সংকরায়ন]</p>
      <p className={`absolute left-[20px] top-[164px] font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Date &amp; Time</p>
      <p className={`absolute left-[20px] top-[187px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>20 Sep, 2025 07:30 PM to 11:00 PM</p>
      <p className={`absolute left-[20px] top-[216px] font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Course</p>
      <p className={`absolute left-[20px] top-[239px] font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Engineering Full Course 2025 [Online]</p>
      <p className={`absolute left-[20px] top-[262px] font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Engineering Admission Program (Online) 2025</p>
      <div className="absolute left-[calc(50%-75px)] top-[336px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-[#e8e8e8] dark:text-white">Video</span>
      </div>
      <div className="absolute left-[calc(50%+75px)] top-[336px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-[#e8e8e8] dark:text-white">Notes</span>
      </div>
    </div>
  );
}

export function FilterScreen({ expanded }: { expanded?: boolean }) {
  const cardTops = expanded ? [345, 767] : [179, 601];
  return (
    <main className="relative mx-auto w-[376px] bg-white dark:bg-[#111111]" style={{ minHeight: expanded ? 1265 : 1099 }}>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(74.1045deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>Past Class</p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {/* Filter button */}
      <div className="absolute left-[147px] top-[127px] flex h-[32px] w-[83px] items-center justify-center gap-[12px] rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Filter</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${F}/funnel.svg`} alt="" aria-hidden="true" className="h-[16px] w-[21px]" />
      </div>

      {expanded &&
        FILTERS.map((label, i) => (
          <div key={i} className="absolute left-[24px] flex h-[32px] w-[328px] items-center justify-between rounded-[5px] bg-white px-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]" style={{ top: 173 + i * 40 }}>
            <span className={`font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] ${TXT}`}>{label}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${AC}/batch-chevron.svg`} alt="" aria-hidden="true" className="h-[4px] w-[8px] dark:invert" />
          </div>
        ))}

      {cardTops.map((t) => (
        <PastCard key={t} top={t} />
      ))}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
