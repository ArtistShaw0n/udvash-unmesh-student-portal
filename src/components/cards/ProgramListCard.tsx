import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Program List card (light node 1:7406 · dark 1:7444). light + dark.
 *   hero banner image (328×178, rounded top) + centred 18px semibold title (2-line) +
 *   one button (w150, #55347b → dark #9061c8). fixed card height 348.
 */
export type ProgramListCardProps = {
  title: string;
  heroSrc: string;
  ctaLabel: string;
  className?: string;
};

export function ProgramListCard({ title, heroSrc, ctaLabel, className }: ProgramListCardProps) {
  return (
    <div
      className={cn(
        "relative h-[348px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={heroSrc} alt="" className="absolute left-0 top-0 h-[178px] w-[328px] rounded-tl-[10px] rounded-tr-[10px] object-cover" />
      <p className="absolute left-[20px] top-[198px] w-[288px] text-center font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">{title}</p>
      <div className="absolute left-1/2 top-[282px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">{ctaLabel}</span>
      </div>
    </div>
  );
}
