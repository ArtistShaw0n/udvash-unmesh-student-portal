import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Performance Report · Templated Written Question Check.
 *   version: 1:31190 (Select Version) · saq: 1:31139 (SAQ Master Set). frame 376×729.
 *   header + "Employee Training Program 2021" + 2 subtitles + (version → Bangla/English
 *   Version cards | saq → SAQ Master Set 1/2 each with Only Question / Question & Solution
 *   rows) + "Back to Past Exams" button + footer Home-active.
 *   Dark: cards #1a1a1a; text #616161→#e8e8e8; button #c6c6c6→#2c2c2c.
 */
const I = "/components/icons/report";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function SaqRow({ top, label }: { top: number; label: string }) {
  return (
    <div className="absolute left-[20px] flex h-[60px] w-[336px] items-center justify-between rounded-[10px] bg-white px-[12px] shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ top }}>
      <span className="flex items-center gap-[8px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${I}/check-badge.svg`} alt="" aria-hidden="true" className="size-[20px] dark:invert" />
        <span className={`font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>{label}</span>
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/chevron-right.svg`} alt="" aria-hidden="true" className="h-[20px] w-[9px] dark:invert" />
    </div>
  );
}

export function PerformanceWrittenScreen({ step }: { step: "version" | "saq" }) {
  return (
    <main className="relative mx-auto h-[729px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[18px] font-semibold leading-[normal] ${TXT}`}>Employee Training Program 2021</p>
      <p className={`absolute left-1/2 top-[111px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>Employee Training Course</p>
      <p className={`absolute left-1/2 top-[132px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>Templated Written Question Check-02</p>

      {step === "version" ? (
        <>
          <p className={`absolute left-1/2 top-[177px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] ${TXT}`}>Select Version</p>
          <div className="absolute left-[38px] top-[216px] flex h-[49px] w-[140px] items-center justify-center rounded-[5px] bg-white shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
            <span className={`font-['Inter',sans-serif] text-[14px] font-medium leading-[normal] ${TXT}`}>Bangla Version</span>
          </div>
          <div className="absolute left-[198px] top-[216px] flex h-[49px] w-[140px] items-center justify-center rounded-[5px] bg-white shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
            <span className={`font-['Inter',sans-serif] text-[14px] font-medium leading-[normal] ${TXT}`}>English Version</span>
          </div>
          <div className="absolute left-[80px] top-[295px] flex h-[36px] w-[216px] items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
            <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Back to Past Exams</span>
          </div>
        </>
      ) : (
        <>
          <p className={`absolute left-1/2 top-[177px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>SAQ Master Set: 1</p>
          <SaqRow top={207} label="Only Question" />
          <SaqRow top={279} label="Question & Solution" />
          <p className={`absolute left-1/2 top-[359px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[20px] ${TXT}`}>SAQ Master Set: 2</p>
          <SaqRow top={389} label="Only Question" />
          <SaqRow top={461} label="Question & Solution" />
          <div className="absolute left-[80px] top-[551px] flex h-[36px] w-[216px] items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
            <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Back to Past Exams</span>
          </div>
        </>
      )}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
