import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { QuizBody } from "@/components/screens/LiveExamQuizBody";

/*
 * Figma V2 — Live Exam submit-confirmation modal over the quiz. light 1:8859 · dark 1:9382.
 *   The quiz body sits under a black-80% scrim (covers header + footer too); a centred
 *   white modal (y318, 336×177, rounded-10) holds a close X (top-right), the message
 *   "The exam can be given only once. Are you sure you want to submit?" and two buttons:
 *   Submit (#55347b → dark #9061c8) and No (#f95959). frame 376×812 (quiz clipped, footer y746).
 */
export default function LiveExamSubmitConfirmPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(80.0382deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />
      <AppHeader />
      <QuizBody />
      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>

      {/* scrim — black 80% over the whole quiz, including header + footer */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.8)]" />

      {/* confirmation modal */}
      <div className="absolute left-1/2 top-[318px] h-[177px] w-[336px] -translate-x-1/2 rounded-[10px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <Link href="/live-exam/quiz" className="absolute right-[7px] top-[7px] block size-[24px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/components/icons/quiz-modal-close.svg" alt="" aria-hidden="true" className="block size-full" />
        </Link>
        <p className="absolute left-[20px] top-[37px] w-[296px] font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
          The exam can be given only once. Are you sure you want to submit?
        </p>
        <Link href="/home" className="absolute left-[58px] top-[121px] flex h-[36px] w-[100px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Submit</span>
        </Link>
        <Link href="/live-exam/quiz" className="absolute left-[178px] top-[121px] flex h-[36px] w-[100px] items-center justify-center rounded-[5px] bg-[#f95959]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">No</span>
        </Link>
      </div>
    </main>
  );
}
