"use client";

import { cn } from "@/lib/cn";

/*
 * 1:1 from Figma V2 — node 1:17305 (Video/Download header) + screenshot
 * Raw values, no semantic tokens:
 *   band:  bg #e4eaf4 · rounded-tl-[10px] rounded-tr-[10px]
 *   toggle: #b7bfcd pill · active segment #4fa621 · text white 14px · rounded-[17px] (node 1:34035)
 *   title: Inter SemiBold 16px #616161
 *   meta:  Inter Regular 12px #999999
 */

export type DownloadItemCardProps = {
  title: string;
  dateTime: string;
  languages?: [string, string];
  activeLanguage?: 0 | 1;
  onLanguageChange?: (index: 0 | 1) => void;
  className?: string;
};

export function DownloadItemCard({
  title,
  dateTime,
  languages = ["বাংলা", "English"],
  activeLanguage = 0,
  onLanguageChange,
  className,
}: DownloadItemCardProps) {
  return (
    <div
      className={cn(
        "w-[328px] rounded-tl-[10px] rounded-tr-[10px] bg-[#e4eaf4] p-[16px]",
        className,
      )}
    >
      <div className="mb-[12px] flex justify-end">
        <div className="inline-flex h-[26px] items-center rounded-[17px] bg-[#b7bfcd]">
          {languages.map((lang, i) => (
            <button
              key={lang}
              type="button"
              aria-pressed={i === activeLanguage}
              onClick={() => onLanguageChange?.(i as 0 | 1)}
              className={cn(
                "flex h-[26px] items-center rounded-[17px] px-[12px] font-['Inter',sans-serif] text-[14px] text-white",
                i === activeLanguage && "bg-[#4fa621]",
              )}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
      <p className="font-['Inter',sans-serif] text-[16px] font-semibold text-[#616161]">{title}</p>
      <p className="mt-[4px] font-['Inter',sans-serif] text-[12px] text-[#999999]">{dateTime}</p>
    </div>
  );
}
