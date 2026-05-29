"use client";

import { cardShellClass, CardButton } from "./parts";
import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:7406 ("Program List" card)
 * Same hero-image shell as Performance.
 *   hero:  328×178 image, rounded top corners
 *   title: Inter SemiBold 18px #616161 leading-[22px], centered
 *   cta:   "Add More Course" #55347b w-[150px]
 */

export type ProgramListCardProps = {
  title: string;
  heroSrc?: string;
  ctaLabel?: string;
  onCta?: () => void;
  className?: string;
};

export function ProgramListCard({
  title,
  heroSrc,
  ctaLabel = "Add More Course",
  onCta,
  className,
}: ProgramListCardProps) {
  return (
    <article className={cn(cardShellClass, className)}>
      {heroSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={heroSrc} alt="" className="h-[178px] w-full rounded-tl-[10px] rounded-tr-[10px] object-cover" />
      ) : (
        <div className="h-[178px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4]" />
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
