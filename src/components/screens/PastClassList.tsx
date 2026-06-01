import Link from "next/link";
import { cn } from "@/lib/cn";
import { PastClassCard } from "@/components/cards/PastClassCard";

/*
 * Figma V2 — Past Class list content (shared by the plain list 1:7816 and the three
 * filter-dropdown-open states 1:7870 / 1:7938 / 1:8016, where a dropdown overlays it).
 * Absolute Figma-coord content (no <main>/header/footer): "Past Class" title (y74),
 * fading underline (y100), 3 filter pills (y141), 2 past-class cards (y203).
 */
const CHAPTER = "মৌলের পর্যায়বৃত্ত ধর্ম (পর্যায়বৃত্ত ধর্ম পর্যন্ত) [d-ব্লক মৌল এবং জটিল যৌগের সংকরায়ন]";
const COURSE: [string, string] = ["Engineering Full Course 2025 [Online]", "Engineering Admission Program (Online) 2025"];
const DATETIME = "20 Sep, 2025 07:30 PM to 11:00 PM";
const TITLE = "Engineering Daily MCQ Practice Exam Engineering Daily MCQ Practi...";

export const PAST_CLASS_FILTERS: { label: string; left: number; href: string }[] = [
  { label: "All Course", left: 24, href: "/past-class/filter-course" },
  { label: "All Subject", left: 136.5, href: "/past-class/filter-subject" },
  { label: "All Platform", left: 249, href: "/past-class/filter-platform" },
];

export function PastClassFilterPill({ label, left, href }: { label: string; left: number; href?: string }) {
  const cls = "absolute top-[141px] flex h-[32px] w-[103px] items-center justify-center gap-[8px] rounded-[99px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]";
  const inner = (
    <>
      <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] text-[#616161] dark:text-[#e8e8e8]">{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/filter-chevron.svg" alt="" aria-hidden="true" className="h-[4px] w-[8px]" />
    </>
  );
  return href ? (
    <Link href={href} className={cls} style={{ left }}>{inner}</Link>
  ) : (
    <div className={cls} style={{ left }}>{inner}</div>
  );
}

export function PastClassList() {
  return (
    <>
      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Past Class
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      {PAST_CLASS_FILTERS.map((f) => (
        <PastClassFilterPill key={f.label} label={f.label} left={f.left} href={f.href} />
      ))}

      <div className="absolute left-[24px] top-[203px] flex flex-col gap-[20px]">
        <PastClassCard title={TITLE} title2Lines status="Online" chapter={CHAPTER} dateTimeValue={DATETIME} courseLines={COURSE} buttons={["Video", "Notes"]} />
        <PastClassCard title={TITLE} title2Lines status="Online" chapter={CHAPTER} dateTimeValue={DATETIME} courseLines={COURSE} buttons={["Video", "Notes"]} />
      </div>
    </>
  );
}

/*
 * Filter-dropdown-open overlay (Past Class states 1:7870 / 1:7938 / 1:8016).
 * A white panel (notch pointing up to the active pill) below the pills, holding the
 * filter's option rows + #ededed dividers; one row highlighted (bg-black/5). Overlays
 * the list. Placeholder option text reproduced 1:1 from Figma.
 */
export function PastClassFilterDropdown({
  notchLeft,
  options,
  highlightedIndex,
}: {
  notchLeft: number;
  options: string[];
  highlightedIndex: number;
}) {
  return (
    <>
      <div className="absolute z-0 size-[14px] rotate-45 bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a]" style={{ left: notchLeft - 7, top: 171 }} />
      <div className="absolute left-[24px] top-[177px] w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        {options.map((opt, i) => (
          <div
            key={i}
            className={cn(
              "flex min-h-[38px] items-center px-[20px] py-[9px] font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] text-[#616161] dark:text-[#e8e8e8]",
              i < options.length - 1 && "border-b border-[#ededed] dark:border-[#2c2c2c]",
              i === highlightedIndex && "bg-black/[0.05] dark:bg-white/[0.05]",
            )}
          >
            {opt}
          </div>
        ))}
      </div>
    </>
  );
}
