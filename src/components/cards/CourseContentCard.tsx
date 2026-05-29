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
        "flex h-[60px] w-[336px] items-center justify-between rounded-[10px] bg-white px-[12px] text-left shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <span className="font-['Inter',sans-serif] text-[14px] font-medium text-[#616161]">{title}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/components/icons/course-chevron.svg" alt="" aria-hidden="true" className="ml-[8px] h-[14px] w-[7px] shrink-0" />
    </Tag>
  );
}
