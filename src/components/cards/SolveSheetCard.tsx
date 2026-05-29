"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:7466 ("Solve Sheet" card)
 * Same shell as class cards. Red "Live" outline chip · "View Solve Sheet" w-[150px].
 */

export type SolveSheetCardProps = {
  type?: string;
  title: string;
  badge?: string;
  courseLines?: string[];
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

export function SolveSheetCard({
  type = "Solve Sheet",
  title,
  badge = "Live",
  courseLines = [],
  ctaLabel = "View Solve Sheet",
  onCta,
  className,
}: SolveSheetCardProps) {
  return (
    <article
      className={cn(
        "w-[328px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div className="bg-[#e4eaf4] px-[20px] pb-[10px] pt-[12px]">
        <div className="mb-[8px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#616161]">{type}</span>
          {badge && (
            <span className="inline-flex h-[20px] items-center rounded-[10px] border border-[#ff0000] px-[10px] font-['Inter',sans-serif] text-[12px] font-medium text-[#ff0000]">
              {badge}
            </span>
          )}
        </div>
        <p className="font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161]">{title}</p>
      </div>

      <div className="flex flex-col gap-[8px] px-[20px] py-[12px]">
        {courseLines.length > 0 && (
          <div>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#616161]">Course</p>
            {courseLines.map((line, i) => (
              <p key={i} className="font-['Inter',sans-serif] text-[14px] font-semibold text-[#616161]">{line}</p>
            ))}
          </div>
        )}
        <div className="mt-[8px] flex justify-center pb-[8px]">
          <button
            type="button"
            onClick={onCta}
            className="flex h-[36px] w-[150px] items-center justify-center whitespace-nowrap rounded-[5px] bg-[#55347b] px-[20px] font-['Inter',sans-serif] text-[14px] leading-[12px] text-white"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </article>
  );
}
