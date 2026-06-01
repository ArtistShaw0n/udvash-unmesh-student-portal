import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Downloads list (main footer-tab view). light 1:20525 · dark 1:22463. frame 376×1194.
 *   header + title/search bar + video player (controls) + Your Downloads + Videos/Notes
 *   toggle + 6 downloaded-video rows (thumbnail/title/chapter/date/quality/3-dot) +
 *   green "Back Online" bar + footer (Home active).
 */
const I = "/components/icons/downloads";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

const ROWS = [
  { top: 386, n: "10", chapter: "অধ্যায়-০৫: আলো ও অপটিক্স (১ম পত্র) অধ্যায়-১০: বৈদ্যুতিক ক্ষেত্র (১ম পত্র) অধ্যায়-১১: চৌম্বক ক্ষেত্র", date: "22 Mar, 2022", quality: "1080p (1GB)" },
  { top: 501, n: "11", chapter: "অধ্যায়-০৬: বৈদ্যুতিক বর্তনী (১ম পত্র) অধ্যায়-১২: তাপ ও শক্তি (১ম পত্র) অধ্যায়-১৩: কণার গতি", date: "29 Mar, 2022", quality: "480p (600MB)" },
  { top: 616, n: "12", chapter: "অধ্যায়-০৭: আধুনিক পদার্থবিজ্ঞান (১ম পত্র) অধ্যায়-১৪: পরমাণু ও নিউক্লিয়ার (১ম পত্র) অধ্যায়-১৫: কোয়ান্টাম থিওরি", date: "05 Apr, 2022", quality: "1080p (1.2GB)" },
  { top: 731, n: "13", chapter: "অধ্যায়-০৮: তরল পদার্থের গতি (২য় পত্র) অধ্যায়-১৬: তাপ এবং কাজ (২য় পত্র) অধ্যায়-১৭: আলোর তরঙ্গ", date: "12 Apr, 2022", quality: "720p (950MB)" },
  { top: 846, n: "14", chapter: "অধ্যায়-০৯: পদার্থের মৌলিক নীতি (২য় পত্র) অধ্যায়-১৮: যান্ত্রিক শক্তি (২য় পত্র) অধ্যায়-১৯: চৌম্বকীয় শক্তি", date: "19 Apr, 2022", quality: "1080p (1.3GB)" },
  { top: 961, n: "09", chapter: "অধ্যায়-০৪: তাপবিদ্যা (১ম পত্র) অধ্যায়-০৮: তরল পদার্থ (১ম পত্র) অধ্যায়-০৯: গ্যাস", date: "15 Mar, 2022", quality: "720p (800MB)" },
];

function DownloadRow({ top, n, chapter, date, quality }: { top: number; n: string; chapter: string; date: string; quality: string }) {
  return (
    <>
      <p className={`absolute left-[12px] right-[79px] truncate font-['Inter',sans-serif] text-[12px] font-medium leading-[normal] ${TXT}`} style={{ top }}>{`Regular Offline Class Physics-${n} Regular Offline...`}</p>
      <p className={`absolute right-[12px] whitespace-nowrap text-right font-['Inter',sans-serif] text-[8px] leading-[normal] ${TXT}`} style={{ top: top + 2 }}>{date}</p>
      <div className="absolute left-[12px] h-[56px] w-[90px] overflow-hidden rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]" style={{ top: top + 27 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/cover.png`} alt="" aria-hidden="true" className="size-full object-cover" />
      </div>
      <p className={`absolute left-[12px] w-[90px] text-center font-['Inter',sans-serif] text-[10px] leading-[normal] ${TXT}`} style={{ top: top + 87 }}>{quality}</p>
      <p className={`absolute left-[116px] right-[12px] font-['Inter',sans-serif] text-[12px] leading-[16px] ${TXT}`} style={{ top: top + 27 }}>{chapter}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/menu.svg`} alt="" aria-hidden="true" className="absolute right-[12px] h-[16px] w-[4px] dark:invert" style={{ top: top + 70 }} />
      <div className="absolute left-1/2 h-px w-[352px] -translate-x-1/2 bg-[#cacaca]" style={{ top: top + 107 }} />
      <Link href="/downloads/video" aria-label="Open video" className="absolute left-0 w-full" style={{ top, height: 107 }} />
    </>
  );
}

export default function DownloadsPage() {
  return (
    <main className="relative mx-auto h-[1194px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(73.2111deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* Title / search bar */}
      <div className="absolute left-1/2 top-[60px] h-[42px] w-[368px] -translate-x-1/2 rounded-[5px] bg-[rgba(85,52,123,0.1)] dark:bg-[#2c2c2c]" />
      <p className={`absolute left-[12px] top-[71px] font-['Inter',sans-serif] text-[16px] font-bold leading-[normal] ${TXT}`}>Downloads</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/search.svg`} alt="" aria-hidden="true" className="absolute left-[324px] top-[73px] size-[15px] dark:invert" />
      <Link href="/downloads/settings" className="absolute left-[347px] top-[73px] block size-[16px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/gear.svg`} alt="" aria-hidden="true" className="size-full dark:invert" />
      </Link>

      {/* Video player */}
      <div className="absolute left-1/2 top-[122px] h-[202px] w-[360px] -translate-x-1/2 bg-[#b5b5b5]" />
      <Link href="/downloads/video" className="absolute left-1/2 top-[203px] block size-[40px] -translate-x-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/dl-play.svg`} alt="" aria-hidden="true" className="size-full" />
      </Link>
      {/* controls bar */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/controls-bar.png`} alt="" aria-hidden="true" className="absolute left-1/2 top-[294px] h-[30px] w-[360px] -translate-x-1/2 object-cover" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-play.svg`} alt="" aria-hidden="true" className="absolute left-[18px] top-[302px] h-[14px] w-[12px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-seek.svg`} alt="" aria-hidden="true" className="absolute left-[74px] top-[302px] h-[14px] w-[16px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-seek.svg`} alt="" aria-hidden="true" className="absolute left-[118px] top-[302px] h-[14px] w-[16px] -scale-x-100" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-g1.svg`} alt="" aria-hidden="true" className="absolute left-[130px] top-[301px] h-[16px] w-[17px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-g2.svg`} alt="" aria-hidden="true" className="absolute left-[159px] top-[305px] h-[8px] w-[77px]" />
      <p className="absolute left-[248px] top-[302px] whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[normal] text-white">-2:52:48</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-settings.svg`} alt="" aria-hidden="true" className="absolute left-[314px] top-[301px] size-[16px]" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/ctrl-fullscreen.svg`} alt="" aria-hidden="true" className="absolute left-[342px] top-[301px] size-[16px]" />

      {/* Your Downloads + toggle */}
      <div className="absolute left-1/2 top-[376px] h-px w-[352px] -translate-x-1/2 bg-[#cacaca]" />
      <p className={`absolute left-[12px] top-[346px] font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>Your Downloads</p>
      <div className="absolute left-[calc(50%+36px)] top-[340px] flex h-[26px] w-[70px] items-center justify-center rounded-l-[5px] border border-[#55347b] bg-[#55347b] dark:border-[#9061c8] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[12px] text-white">Videos</span>
      </div>
      <div className="absolute left-[calc(50%+106px)] top-[340px] flex h-[26px] w-[70px] items-center justify-center rounded-r-[5px] border border-[#55347b] bg-white dark:border-[#9061c8] dark:bg-[#1a1a1a]">
        <span className="font-['Inter',sans-serif] text-[12px] text-[#55347b] dark:text-[#9061c8]">Notes</span>
      </div>

      {ROWS.map((r) => (
        <DownloadRow key={r.n} {...r} />
      ))}

      {/* Back Online bar */}
      <div className="absolute left-0 top-[1098px] flex h-[30px] w-[376px] items-center justify-center bg-[#4fa621]">
        <span className="font-['Inter',sans-serif] text-[12px] text-white">Back Online</span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
