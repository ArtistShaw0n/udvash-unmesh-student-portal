import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";
import { QuizBody } from "@/components/screens/LiveExamQuizBody";

/*
 * Figma V2 — Live Exam quiz / exam-taking screen. light 1:8657 · dark 1:9183.
 * header + quiz body (chapter title, info card, timer, 5 question cards, Submit) +
 * footer. frame 376×2051. (Submit-confirm modal is the sibling /quiz/confirm route.)
 */
export default function LiveExamQuizPage() {
  return (
    <main className="relative mx-auto min-h-[2051px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(80.0382deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />
      <AppHeader />
      <QuizBody />
      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
