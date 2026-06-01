import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Rescan · Course & Content card. light 1:28872 / 1:28923 · dark 1:28890 / 1:28907.
 *   frame 376×812. Single centered card (w352 h401, top-100).
 *   default: exam info (title + Date&Time / Duration / Course rows) + Start / Rescan buttons.
 *   running: "…Running" title + Exam Start Time + Remaining Time + countdown 08:12:44
 *            (Poppins 40px #4d4c59) + Hours/Minutes/Seconds + View Question / Scan OMR.
 *   Dark: card #1a1a1a + shadow; text #616161→#e8e8e8; buttons stay #55347b; underline white.
 */
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function Underline({ top }: { top: number }) {
  return <div className="absolute left-1/2 h-px w-[171px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" style={{ top }} />;
}

function Btn({ label, side, href }: { label: string; side: "l" | "r"; href?: string }) {
  const cls = `absolute top-[435px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] ${side === "l" ? "left-[calc(50%-75px)]" : "left-[calc(50%+75px)]"}`;
  const inner = <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-[#e8e8e8]">{label}</span>;
  return href ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

function Row({ top, bold, children }: { top: number; bold?: boolean; children: React.ReactNode }) {
  return (
    <p className={`absolute left-1/2 w-[288px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] leading-[normal] ${bold ? "font-semibold" : "font-normal"} ${TXT}`} style={{ top }}>
      {children}
    </p>
  );
}

export function RescanScreen({ running }: { running?: boolean }) {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      {/* card */}
      <div className="absolute left-1/2 top-[100px] h-[401px] w-[352px] -translate-x-1/2 rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" />

      {running ? (
        <>
          <div className={`absolute left-1/2 top-[130px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] whitespace-nowrap ${TXT}`}>
            <p>Biology weekly MCQ Exam M-01</p>
            <p>Running</p>
          </div>
          <Underline top={180} />
          <Row top={200} bold>Exam Start Time : 12:30 PM</Row>
          <Row top={267} bold>Remaining Time</Row>
          <p className="absolute left-1/2 top-[285px] h-[44px] w-[197px] -translate-x-1/2 text-center font-['Poppins',sans-serif] text-[40px] leading-[normal] text-[#4d4c59] dark:text-[#e8e8e8]">08 : 12 : 44</p>
          <p className={`absolute left-[calc(50%-72.5px)] top-[335px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Hours</p>
          <p className={`absolute left-[calc(50%+0.5px)] top-[335px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Minutes</p>
          <p className={`absolute left-[calc(50%+74px)] top-[335px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Seconds</p>
          <Btn label="View Question" side="l" />
          <Btn label="Scan OMR" side="r" />
        </>
      ) : (
        <>
          <p className={`absolute left-1/2 top-[130px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] ${TXT}`}>Biology weekly MCQ Exam M-01</p>
          <Underline top={158} />
          <Row top={191}>Date &amp; Time</Row>
          <Row top={214} bold>20 Sep, 2025 07:30 PM to 11:00 PM</Row>
          <Row top={243}>Duration</Row>
          <Row top={266} bold>2h 30m</Row>
          <Row top={295}>Course</Row>
          <Row top={318} bold>Engineering Full Course 2025 [Online]</Row>
          <Row top={341}>Engineering Admission Program (Online) 2025</Row>
          <Btn label="Start" side="l" href="/rescan/running" />
          <Btn label="Rescan" side="r" />
        </>
      )}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
