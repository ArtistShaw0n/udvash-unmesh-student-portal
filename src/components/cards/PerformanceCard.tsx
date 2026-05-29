"use client";

import { cardShellClass, CardButton } from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:6586 ("Performance" card)
 * Raw values, no semantic tokens:
 *   shell: w-[328px] bg #ffffff rounded-[10px] shadow 0 0 5px rgba(0,0,0,0.1)
 *   hero:  328×178 image, rounded top corners
 *   title: Inter SemiBold 18px #616161 leading-[22px], centered
 *   cta:   "View Report" #55347b w-[150px]
 */

export type PerformanceCardProps = {
  title: string;
  heroSrc?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

export function PerformanceCard({
  title,
  heroSrc,
  ctaLabel = "View Report",
  onCta,
  className,
}: PerformanceCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      {/* hero image is a Figma asset — skipped in Phase 1 when no src given */}
      {heroSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={heroSrc} alt="" className="h-[178px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover" />
      )}
      <div className="flex flex-col items-center gap-[16px] px-[20px] py-[16px]">
        <p className="text-center font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] text-[#616161]">
          {title}
        </p>
        <CardButton onClick={onCta} className="w-[150px]">{ctaLabel}</CardButton>
      </div>
    </article>
  );
}
