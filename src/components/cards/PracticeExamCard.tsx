"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:7599 ("Practic Exam" card)
 * Same shell. Green "Practice" outline chip (#24c182) · red status note
 * (#f95959) · disabled "Take Exam" button (#c6c6c6).
 */

export type PracticeExamCardProps = {
  title: string;
  badge?: string;
  dateTime: string;
  duration: string;
  courseLines?: string[];
  statusNote?: string;
  ctaLabel?: string;
  ctaDisabled?: boolean;
  onCta?: () => void;
  className?: string;
};

export function PracticeExamCard({
  title,
  badge = "Practice",
  dateTime,
  duration,
  courseLines = [],
  statusNote,
  ctaLabel = "Take Exam",
  ctaDisabled = true,
  onCta,
  className,
}: PracticeExamCardProps) {
  return (
    <article
      className={cn(
        "w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="bg-[#e4eaf4] px-[20px] pb-[10px] pt-[12px]">
        <div className="flex items-start justify-between gap-[8px]">
          <p className="font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161]">{title}</p>
          {badge && (
            <span className="inline-flex h-[20px] shrink-0 items-center rounded-[10px] border border-[#24c182] px-[10px] font-['Inter',sans-serif] text-[12px] font-medium text-[#24c182]">
              {badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        <div>
          <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Date &amp; Time</p>
          <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{dateTime}</p>
        </div>
        <div>
          <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Duration</p>
          <p className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{duration}</p>
        </div>
        {courseLines.length > 0 && (
          <div>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Course</p>
            {courseLines.map((line, i) => (
              <p key={i} className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{line}</p>
            ))}
          </div>
        )}
        {statusNote && (
          <p className="mt-[4px] text-center font-['Inter',sans-serif] text-[14px] font-medium text-[#f95959]">
            {statusNote}
          </p>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <button
            type="button"
            onClick={onCta}
            disabled={ctaDisabled}
            className={cn(
              "flex h-[36px] w-[130px] items-center justify-center whitespace-nowrap rounded-[5px] px-[20px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white",
              ctaDisabled ? "bg-[#c6c6c6]" : "bg-[#55347b]",
            )}
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
