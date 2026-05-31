import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { LiveExamCard } from "@/components/cards/LiveExamCard";

/*
 * Figma V2 — Live Exam screen, LIST state. light node 1:8570 · dark 1:8614.
 *   header (50) + "Live Exam" title (y74) + fading tab underline (y100) +
 *   2 exam cards (y121, flex-col gap-20) + footer (Home active). frame 376×1115.
 *   Card 1: Live Now + enabled Take Exam. Card 2: countdown + disabled Take Exam.
 *   (Instructions / quiz / submit-modal states are separate routes.)
 */
const DATETIME = "20 Sep, 2025 11:00 PM to 21 Sep, 2025 11:00 PM";
const DURATION = "1h 45 min";
const COURSE: [string, string] = ["Varsity 'KA' Online Exam Service", "Varsity 'KA' Admission Program 2025"];

export default function LiveExamPage() {
  return (
    <main className="relative mx-auto min-h-[1115px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(72.0953deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[74px] -translate-x-1/2 font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Live Exam
      </p>
      <div className="absolute left-1/2 top-[100px] h-px w-[180px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />

      <div className="absolute left-[24px] top-[121px] flex flex-col gap-[20px]">
        <LiveExamCard
          subject="Live Exam"
          title="Varsity KA Weekly MCQ and Written Live Exam W-02"
          title2Lines
          status={{ kind: "live" }}
          dateTimeValue={DATETIME}
          duration={DURATION}
          courseLines={COURSE}
          statusMessage="You haven't taken the exam yet"
          takeEnabled
          takeHref="/live-exam/instructions"
        />
        <LiveExamCard
          subject="Live Exam"
          title="Varsity KA Weekly MCQ and Written"
          status={{ kind: "countdown", text: "5h 14m" }}
          dateTimeValue={DATETIME}
          duration={DURATION}
          courseLines={COURSE}
          statusMessage="Exam not started yet"
        />
      </div>

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
