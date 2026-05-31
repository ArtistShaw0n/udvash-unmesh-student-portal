import { cn } from "@/lib/cn";

/*
 * Figma V2 — "Revision Settings" modal (Figma 1:32427). 2 states × light/dark:
 *   default (Start From Beginning) 1:32658/1:32883 · resume (Resume From Previous
 *   + Progress) 1:32428/1:33188. Shown over a dimmed Performance Report (dim scrim
 *   #191C1D@60% + 4px blur — backdrop not legible, so not reproduced).
 * Raw Figma values; radio/checkbox selected = blue #2585FD glyphs.
 */
const I = "/components/icons/revision";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function Radio({ selected, label }: { selected: boolean; label: string }) {
  return (
    <div className="flex items-center gap-[6px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/radio-${selected ? "on" : "off"}.svg`} alt="" aria-hidden="true" className="size-[16px]" />
      <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>{label}</span>
    </div>
  );
}

function StatusCheck({ checked, label, left }: { checked?: boolean; label: string; left: number }) {
  return (
    <div className="absolute top-0 flex items-center gap-[8px]" style={{ left }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/checkbox-${checked ? "checked" : "unchecked"}.svg`} alt="" aria-hidden="true" className={cn("size-[18px]", !checked && "dark:invert")} />
      <span className="font-['Inter',sans-serif] text-[14px] leading-[30px] text-[#70757a] dark:text-[#e8e8e8]">{label}</span>
    </div>
  );
}

export function RevisionSettingsModal({ progress }: { progress?: boolean }) {
  return (
    <div className="w-[328px] rounded-[20px] bg-white pb-[20px] pl-[16px] pr-[10px] pt-[10px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a]">
      <div className="flex w-[302px] flex-col gap-[20px]">
        {/* Header */}
        <div>
          <div className="relative flex h-[40px] items-center justify-center border-b border-[#cacaca]">
            <span className={`font-['Inter',sans-serif] text-[20px] font-semibold ${TXT}`}>Revision Settings</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${I}/close.svg`} alt="" aria-hidden="true" className="absolute right-0 top-1/2 size-[24px] -translate-y-1/2 dark:invert" />
          </div>
          <p className={`mt-[12px] font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>Employee Training Course</p>
        </div>

        {/* Settings */}
        <div className="flex flex-col gap-[16px]">
          {/* Start Mode */}
          <div>
            <p className={`font-['Inter',sans-serif] text-[16px] font-semibold ${TXT}`}>Start Mode</p>
            <div className="ml-[8px] mt-[7px] flex flex-col gap-[10px]">
              <Radio selected={!progress} label="Start From Beginning" />
              <Radio selected={!!progress} label="Resume From Previous" />
            </div>
            <p className="mt-[12px] font-['Inter',sans-serif] text-[11px] text-[#999999]">আগের session এর Subject ও Status auto-set করা হয়েছে</p>
          </div>

          {/* Branch */}
          <div>
            <p className={`font-['Inter',sans-serif] text-[14px] font-bold ${TXT}`}>Branch </p>
            <div className="mt-[6px] flex h-[40px] w-[296px] items-center justify-between rounded-[5px] border border-[#b9b9b9] px-[10px] dark:border-[#444444]">
              <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>All Subject</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${I}/dropdown-chevron.svg`} alt="" aria-hidden="true" className="h-[6px] w-[12px] rotate-180" />
            </div>
          </div>

          {/* Question Status */}
          <div>
            <p className={`font-['Inter',sans-serif] text-[14px] font-bold ${TXT}`}>Question Status</p>
            <div className="relative mt-[12px] h-[20px]">
              <StatusCheck checked label="Correct" left={0} />
              <StatusCheck label="Incorrect" left={95} />
              <StatusCheck label="Skipped" left={200} />
            </div>
            <p className="mt-[16px] font-['Inter',sans-serif] text-[11px] text-[#999999]">কমপক্ষে একটি status অবশ্যই নির্বাচন করতে হবে</p>
          </div>
        </div>

        {/* Progress (resume state only) */}
        {progress && (
          <div className="relative h-[131px] w-[296px] rounded-[10px] bg-[#f3f4f5] dark:bg-[#2c2c2c]">
            <p className={`absolute left-1/2 top-[15px] -translate-x-1/2 font-['Inter',sans-serif] text-[16px] font-semibold ${TXT}`}>Progress</p>
            <p className={`absolute left-[16px] top-[40px] w-[264px] text-center font-['Inter',sans-serif] text-[12px] ${TXT}`}>মোট 3 টি Exam এর মধ্যে 0 টি Exam এর Revision complete হয়েছে</p>
            <div className="absolute left-[16px] top-[86px] h-[8px] w-[264px] overflow-hidden rounded-full bg-[#e1e3e4] dark:bg-[#3a3a3a]">
              <div className="h-full rounded-full bg-[#55347b] dark:bg-[#9061c8]" style={{ width: "5.3%" }} />
            </div>
            <p className={`absolute left-[24px] top-[100px] w-[249px] text-center font-['Inter',sans-serif] text-[12px] ${TXT}`}>4/26 Questions Completed</p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col items-center gap-[14px]">
          <div className="flex h-[36px] w-[296px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
            <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Start Revision</span>
          </div>
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-[#70757a] dark:text-[#e8e8e8]">Cancel</span>
        </div>
      </div>
    </div>
  );
}
