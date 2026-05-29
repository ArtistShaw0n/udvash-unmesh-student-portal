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
        "flex h-[60px] w-[336px] items-center rounded-[10px] bg-white px-[12px] text-left shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      {/* chevron glyph is a Figma SVG asset — skipped in Phase 1 */}
      <span className="font-['Inter',sans-serif] text-[14px] font-medium text-[#616161]">{title}</span>
    </Tag>
  );
}
