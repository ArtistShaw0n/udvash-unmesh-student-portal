import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { QuestionCard, QUESTIONS } from "@/components/screens/AnalysisReport";

/*
 * Figma V2 — Revision result screen (Analysis Report variant). light 1:33500 · dark 1:33739.
 *   header + title block ("Employee Training Course" / "Revision" / "Subject: Chemistry |
 *   Exam: 1 of 2") + exam-info card ([122] Weekly Exam-07 + date + Incorrect/Skipped) + 3
 *   question cards (reused) + Previous/Next pagination + footer. frame 376×1838.
 */
const I = "/components/icons/revision";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

export default function RevisionResultPage() {
  return (
    <main className="relative mx-auto min-h-[1838px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(78.9109deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className={`absolute left-1/2 top-[70px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>Employee Training Course</p>
      <p className={`absolute left-1/2 top-[104px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Revision</p>
      <p className={`absolute left-1/2 top-[127px] -translate-x-1/2 whitespace-pre font-['Inter',sans-serif] text-[12px] font-normal leading-[normal] ${TXT}`}>
        Subject: <span className="font-semibold">Chemistry </span>| <span className="font-semibold"> </span>Exam:<span className="font-semibold"> 1 </span>of<span className="font-semibold"> 2</span>
      </p>

      <div className="absolute left-1/2 top-[162px] flex w-[360px] -translate-x-1/2 flex-col items-center">
        {/* Exam-info card */}
        <div className="relative h-[102px] w-[360px] rounded-[5px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
          <p className={`absolute left-1/2 top-[12px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>[122] Weekly Exam-07</p>
          <p className={`absolute left-1/2 top-[35px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>09 May, 2022</p>
          <div className="absolute left-[66px] top-[66px] flex items-center gap-[5px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${I}/exam-incorrect.svg`} alt="" aria-hidden="true" className="size-[24px]" />
            <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Incorrect:</span>
            <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>0</span>
          </div>
          <div className="absolute left-[193px] top-[66px] flex items-center gap-[5px]">
            <span className="relative size-[24px] shrink-0 rounded-[3px] bg-[#25b7d3]/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${I}/exam-skipped.svg`} alt="" aria-hidden="true" className="absolute left-[4px] top-[4px] size-[16px]" />
            </span>
            <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Skipped:</span>
            <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>5</span>
          </div>
        </div>

        {QUESTIONS.map((q) => (
          <QuestionCard key={q.n} {...q} className="mt-[8px]" />
        ))}

        {/* Pagination */}
        <div className="mt-[40px] flex items-center gap-[44px]">
          <div className="flex h-[36px] w-[124px] items-center justify-center gap-[10px] rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${I}/arrow-next.svg`} alt="" aria-hidden="true" className="size-[16px] rotate-180" />
            <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Previous</span>
          </div>
          <p className="whitespace-pre font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
            <span className="font-semibold">1 </span>/<span className="font-semibold"> 2</span>
          </p>
          <div className="flex h-[36px] w-[124px] items-center justify-center gap-[10px] rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
            <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Next</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${I}/arrow-next.svg`} alt="" aria-hidden="true" className="size-[16px]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
