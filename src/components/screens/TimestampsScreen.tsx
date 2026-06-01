import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Timestamps · Video/Download player. light 1:34286 (collapsed h1007) / 1:33977
 *   (expanded h1202) · dark 1:34444 / 1:34134. Same as /downloads/video + a Timestamps
 *   accordion (00:40 … 03:00:20) above the lecture card; expanded shows all 6 rows.
 *   footer Home-active. Dark: card #1a1a1a; text #616161→#e8e8e8; timestamp blue #3b88f5 kept.
 */
const I = "/components/icons/downloads";
const C = "/components/icons/celebration";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

const TIMESTAMPS: [string, string][] = [
  ["00:40", "Introduction to the Course & Learning Objectives"],
  ["01:00", "What is Electromagnetism? Overview and History"],
  ["01:30", "Electric Charges and Fields Explained"],
  ["02:00", "Prototyping and Wireframing Techniques"],
  ["02:30", "Designing for Accessibility and Inclusivity"],
  ["03:00:20", "Color Theory and Its Application"],
];

function Tab({ left, width, label, active, rl, rr, top }: { left: string; width: number; label: string; active?: boolean; rl?: boolean; rr?: boolean; top: number }) {
  return (
    <div
      className={`absolute flex h-[29px] -translate-x-1/2 items-center justify-center border ${active ? "border-[#55347b] bg-[#55347b] dark:border-[#9061c8] dark:bg-[#9061c8]" : "border-[#55347b] bg-white dark:border-[#9061c8] dark:bg-[#1a1a1a]"} ${rl ? "rounded-l-[5px]" : ""} ${rr ? "rounded-r-[5px]" : ""}`}
      style={{ left, width, top }}
    >
      <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${active ? "text-white" : "text-[#616161] dark:text-[#9061c8]"}`}>{label}</span>
    </div>
  );
}

function ActionBtn({ left, top, color, icon, label }: { left: number; top: number; color: string; icon: string; label: string }) {
  return (
    <div className="absolute h-[34px] w-[118px] rounded-[5px] border" style={{ left, top, borderColor: color }}>
      <div className="absolute left-[4px] top-[4px] size-[26px] rounded-[5px] opacity-10" style={{ backgroundColor: color }} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/${icon}.svg`} alt="" aria-hidden="true" className="absolute left-[9px] top-[9px] size-[16px]" />
      <span className={`absolute left-[36px] top-[8px] font-['Inter',sans-serif] text-[13px] font-medium leading-[normal] ${TXT}`}>{label}</span>
    </div>
  );
}

function LectureCard({ base }: { base: number }) {
  return (
    <>
      <div className="absolute left-[24px] h-[344px] w-[328px] rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ top: base }} />
      <div className="absolute left-[24px] h-[102px] w-[328px] rounded-t-[10px] bg-[#e4eaf4] dark:bg-[#2c2c2c]" style={{ top: base }} />
      <p className={`absolute left-[36px] whitespace-nowrap font-['Inter',sans-serif] text-[16px] font-bold leading-[20px] ${TXT}`} style={{ top: base + 46 }}>HSC Final Revision Class Biology-08</p>
      <p className={`absolute left-[36px] whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[20px] ${TXT}`} style={{ top: base + 72 }}>Jan 17, 2025, 2:30 PM to 5:00 PM</p>
      <p className={`absolute left-[36px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-bold leading-[20px] ${TXT}`} style={{ top: base + 122 }}>অধ্যায়-০২ : কোষ বিভাজন (১ম পত্র) </p>
      <div className="absolute left-[219px] flex h-[26px] w-[121px] overflow-hidden rounded-[17px] bg-[#b7bfcd] dark:bg-[#2c2c2c]" style={{ top: base + 10 }}>
        <div className="flex h-full w-[53px] items-center justify-center rounded-[17px] bg-[#4fa621]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] text-white">বাংলা</span>
        </div>
        <div className="flex h-full flex-1 items-center justify-center">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[20px] text-white">English</span>
        </div>
      </div>
      <div className="absolute left-1/2 h-px w-[304px] -translate-x-1/2 bg-[#cacaca]" style={{ top: base + 156 }} />
      <ActionBtn left={60} top={base + 170} color="#2496c1" icon="vp-video" label="Video" />
      <ActionBtn left={198} top={base + 170} color="#fc5a5a" icon="vp-doubt" label="Doubt" />
      <ActionBtn left={60} top={base + 214} color="#ff9900" icon="vp-notes" label="Notes" />
      <ActionBtn left={198} top={base + 214} color="#289b91" icon="vp-quiz" label="Quiz" />
      <div className="absolute left-1/2 h-px w-[304px] -translate-x-1/2 bg-[#cacaca]" style={{ top: base + 262 }} />
      <div className="absolute left-[calc(50%-77px)] flex h-[36px] w-[134px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]" style={{ top: base + 288 }}>
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Previous Lecture</span>
      </div>
      <div className="absolute left-[calc(50%+77px)] flex h-[36px] w-[134px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]" style={{ top: base + 288 }}>
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Next Lecture</span>
      </div>
      <div className="absolute left-[224px] flex h-[25px] w-[144px] items-center justify-center gap-[6px] rounded-[12.5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]" style={{ top: base + 364 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/vp-return.svg`} alt="" aria-hidden="true" className="h-[11px] w-[13px]" />
        <span className="font-['Inter',sans-serif] text-[12px] leading-[normal] text-white">Return to Chapter</span>
      </div>
    </>
  );
}

export function TimestampsScreen({ expanded }: { expanded?: boolean }) {
  const base = expanded ? 717 : 522;
  return (
    <main className="relative mx-auto w-[376px] overflow-hidden bg-white dark:bg-[#111111]" style={{ height: expanded ? 1202 : 1007 }}>
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(68.4247deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* Video player */}
      <div className="absolute left-1/2 top-[70px] h-[202px] w-[360px] -translate-x-1/2 bg-[#6e6e6e]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/dl-play.svg`} alt="" aria-hidden="true" className="absolute left-1/2 top-[137px] size-[68px] -translate-x-1/2" />

      {/* controls */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/controls-bar.png`} alt="" aria-hidden="true" className="absolute left-1/2 top-[242px] h-[30px] w-[360px] -translate-x-1/2 object-cover" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-play.svg`} alt="" aria-hidden="true" className="absolute left-[25px] top-[250px] size-[14px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-seek.svg`} alt="" aria-hidden="true" className="absolute left-[79px] top-[250px] size-[14px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-seek.svg`} alt="" aria-hidden="true" className="absolute left-[106px] top-[250px] size-[14px] -scale-x-100" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/vp-ctrl-vol.svg`} alt="" aria-hidden="true" className="absolute left-[132px] top-[250px] size-[14px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-g2.svg`} alt="" aria-hidden="true" className="absolute left-[160px] top-[251px] h-[12px] w-[40px]" />
      <p className="absolute left-[245px] top-[251px] whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[normal] text-white">-2:52:48</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-settings.svg`} alt="" aria-hidden="true" className="absolute left-[309px] top-[250px] size-[14px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-fullscreen.svg`} alt="" aria-hidden="true" className="absolute left-[335px] top-[250px] size-[14px]" />

      {/* Download pill */}
      <div className="absolute left-[241px] top-[280px] flex h-[30px] w-[117px] items-center justify-center gap-[6px] rounded-[15px] border border-[#999999] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border-[#444444] dark:bg-[#1a1a1a]">
        <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Download</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/vp-download.svg`} alt="" aria-hidden="true" className="size-[16px] dark:invert" />
      </div>

      <div className="absolute left-1/2 top-[318px] h-px w-[360px] -translate-x-1/2 bg-[#cacaca]" />

      {/* Video / Source tabs */}
      <Tab top={332} left="calc(50% - 135px)" width={90} label="Video-1" active rl />
      <Tab top={332} left="calc(50% - 45px)" width={90} label="Video-2" />
      <Tab top={332} left="calc(50% + 44.5px)" width={91} label="Video-3" />
      <Tab top={332} left="calc(50% + 134.5px)" width={91} label="Video-4" rr />
      <Tab top={371} left="calc(50% - 135px)" width={90} label="Source -1" active rl />
      <Tab top={371} left="calc(50% - 45px)" width={90} label="Source-2" rr />

      {/* Timestamps accordion */}
      <div className="absolute left-[8px] top-[420px] w-[360px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ height: expanded ? 277 : 82 }}>
        <Link href={expanded ? "/timestamps" : "/timestamps/expanded"} className="absolute left-[20px] top-[20px] flex w-[319px] items-center justify-between">
          <span className={`font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Timestamps</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${C}/chevron.svg`} alt="" aria-hidden="true" className={`h-[7px] w-[14px] dark:invert ${expanded ? "" : "rotate-180"}`} />
        </Link>
        <div className="absolute left-[20px] top-[47px] flex w-[320px] flex-col gap-[6px]">
          {TIMESTAMPS.map(([t, txt]) => (
            <div key={t} className="flex items-start gap-[10px]">
              <span className="whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#3b88f5]">{t}</span>
              <span className={`w-[270px] font-['Inter',sans-serif] text-[14px] leading-[20px] ${TXT}`}>{txt}</span>
            </div>
          ))}
        </div>
        {!expanded && <div className="absolute inset-x-0 bottom-0 h-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,0),#ffffff)] dark:bg-[linear-gradient(180deg,rgba(26,26,26,0),#1a1a1a)]" />}
      </div>

      <LectureCard base={base} />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
