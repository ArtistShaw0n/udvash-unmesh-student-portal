"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:8406 ("course-&-content")
 * Raw values, no semantic tokens:
 *   row:   bg #ffffff · rounded-[10px] · shadow 0 0 5px rgba(0,0,0,0.1) · ~60px tall
 *   text:  Inter Medium 14px #616161
 *   right: chevron-right #616161
 */

export type CourseContentCardProps = {
  title: string;
  onClick?: () => void;
  className?: string;
};

export function CourseContentCard({ title, onClick, className }: CourseContentCardProps) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "flex h-[60px] w-[336px] items-center justify-between gap-[12px] rounded-[10px] bg-white px-[12px] text-left shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <span className="font-['Inter',sans-serif] text-[14px] font-medium text-[#616161]">{title}</span>
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true" className="shrink-0">
        <path d="M1 1 7 7 1 13" stroke="#616161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Tag>
  );
}
