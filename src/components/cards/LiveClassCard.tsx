import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — Live Class card (light node 1:9602 · dark 1:9638). light + dark.
 *   header band (#e4eaf4 / #2c2c2c) holds subject + status + title;
 *   body holds Date & Time, syllabus, Course (2 lines) + Join button.
 *   band 70 (1-line title) / 92 (2-line); card height = band + 270 (card-relative px).
 *   Join: enabled #55347b→#9061c8 · disabled #c6c6c6→#2c2c2c. "Live Now" stays red.
 *   Figma shows two instances: Live (chip + enabled Join) and Upcoming (countdown +
 *   disabled Join) — reproduced via `status` and `joinEnabled`.
 */
export type LiveClassCardProps = {
  subject: string;
  title: string;
  title2Lines?: boolean;
  status: { kind: "live" } | { kind: "countdown"; text: string };
  dateTimeValue: string;
  syllabus: string;
  courseLines: [string, string];
  joinEnabled?: boolean;
  className?: string;
};

export function LiveClassCard({
  subject,
  title,
  title2Lines,
  status,
  dateTimeValue,
  syllabus,
  courseLines,
  joinEnabled,
  className,
}: LiveClassCardProps) {
  const band = title2Lines ? 92 : 70;
  const txt = "font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]";
  return (
    <div
      className={cn(
        "relative w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]",
        className,
      )}
      style={{ height: band + 270 }}
    >
      <div className="absolute inset-x-0 top-0 rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" style={{ height: band }} />

      <span className={cn("absolute left-[20px] top-[7px]", txt)}>{subject}</span>
      {status.kind === "live" ? (
        <div className="absolute right-[6px] top-[6px] flex items-center gap-[4px] rounded-[10px] px-[10px] py-[4px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/live-now-dot.svg" alt="" aria-hidden="true" className="size-[12px]" />
          <span className="font-['Inter',sans-serif] text-[12px] font-medium leading-[12px] text-[red]">Live Now</span>
        </div>
      ) : (
        <span className={cn("absolute right-[10px] top-[7px]", txt)}>{status.text}</span>
      )}
      <p className="absolute left-[20px] top-[36px] w-[288px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[22px] text-[#616161] dark:text-[#e8e8e8]">{title}</p>

      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 20 }}>Date &amp; Time</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 43 }}>{dateTimeValue}</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 72 }}>{syllabus}</p>
      <p className={cn("absolute left-[20px]", txt)} style={{ top: band + 101 }}>Course</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 124 }}>{courseLines[0]}</p>
      <p className={cn("absolute left-[20px] font-semibold", txt)} style={{ top: band + 147 }}>{courseLines[1]}</p>

      <div
        className={cn(
          "absolute left-1/2 flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px]",
          joinEnabled ? "bg-[#55347b] dark:bg-[#9061c8]" : "bg-[#c6c6c6] dark:bg-[#2c2c2c]",
        )}
        style={{ top: band + 204 }}
      >
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Join Now</span>
      </div>
    </div>
  );
}
