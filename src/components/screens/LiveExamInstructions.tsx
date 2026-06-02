import Link from "next/link";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Live Exam "instructions / select version" screen.
 *   B (no version chosen, Star buttons disabled): light 1:9077 · dark 1:9105.
 *   C (Bangla version chosen, Star buttons enabled): light 1:9155 · dark 1:9130.
 * Absolute Figma-coord layout (frame 376×1824). White cards over a 40% gradient
 * (light) / #1a1a1a cards with #1c1c1c border + 0 0 20px black (dark).
 *   title y70 · stats card y132 (h108) · instructions card y248 (h1240) holding a
 *   Bangla bullet list (y307) + #cacaca divider (y822) + English bullet list (y868)
 *   · "Select Version" card y1496 (h128) + Bangla/English version buttons (y1555)
 *   · Star MCQ (y1644) + Star Written (y1692). footer y1758.
 * `selected` (C) → Bangla version button filled #3b88f5 (white text, both themes)
 *   and the two Star buttons enabled (#55347b → dark #9061c8).
 */
const BANGLA: string[] = [
  "প্রতিটি MCQ প্রশ্নের জন্য চারটি করে option আছে। সর্বোৎকৃষ্ট উত্তরটি বাছাই করতে হবে সঠিক উত্তরটি সতর্কতার সহিত Select করতে হবে কারণ, সঠিক উত্তর একবার Select করলে আর Deselect করা যাবে না একই প্রশ্নের একাধিক উত্তর গ্রহণযোগ্য হবে না কোনো প্রশ্নের সঠিক উত্তর না থাকলে সবচেয়ে কাছাকাছি উত্তরটি বাছাই করতে হবে।",
  "প্রতিটি MCQ সঠিক উত্তরের জন্য এক (১) নম্বর পাওয়া যাবে।",
  "প্রতিটি MCQ ভুল উত্তরের জন্য ২৫% নম্বর কাটা যাবে।",
  "লিখিত প্রশ্নের উত্তর খাতায় লিখে ছবি তুলে নির্দিষ্ট প্রশ্নের নিচে আপলোড দিতে হবে। লিখিত ১০ মার্কের যদি প্রশ্ন হয় তবে অবশ্যই ১ পেজের মধ্যে লিখতে হবে এবং ৫ মার্কের জন্য অর্ধেক পেজে লেখার চেষ্টা করতে হবে।",
  "একই প্রশ্নের উত্তর যদি একাধিক পৃষ্ঠায় হয় তবে পৃষ্ঠার ছবিগুলো ক্রমানুসারে আপলোড দিতে হবে অথবা আপলোড দেওয়ার পরে পৃষ্ঠার ক্রমগুলো ঠিক করে দিতে হবে।",
  "ছবি তোলার সময় খেয়াল রাখতে হবে ছবিগুলো যেন স্পষ্ট হয়।",
  "অবশ্যই প্রশ্নে উল্লিখিত সময়ের মধ্যে পরীক্ষা সম্পন্ন করে ছবি আপলোড দিতে হবে।",
  "কোনো প্রকার পিডিএফ, স্ক্রিনশট, টাইপ করা উত্তর ইত্যাদি আপলোড দেওয়া যাবে না।",
  "Calculator ব্যবহার করা যাবে না।",
];
const ENGLISH: string[] = [
  "There are four options for each MCQ question. Select the best option. The correct answer must be selected with caution. Because once you select the correct answer, you can't be deselected. Multiple answers to the same question will not be acceptable. If there is no correct answer to a question, the nearest answer should be chosen.।",
  "One (1) mark will be given for each correct answer",
  "25% marks will be deducted for each MCQ wrong answer.",
  "The answers to the question have to be written on paper, and then the images of the answers are to be taken and uploaded under the specified question. If the question is written for 10 marks, it must be written in 1 page and for 5 marks, try to write in half a page.",
  "If the answer to the same question is on multiple pages, the images of the pages must be uploaded serially or the pages’ serials must be fixed after uploading.",
  "While taking images, care should be taken so that the images are clear.",
  "Of course, you must complete the exam and upload the pictures within the time specified in the question.।",
  "PDFs, screenshots, typed answers etc. cannot be uploaded.।",
  "Calculator can’t be used.",
];

const CARD = "rounded-[5px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function Bullets({ items, top }: { items: string[]; top: number }) {
  return (
    <ul className={`absolute left-[20px] w-[336px] list-disc font-['Inter',sans-serif] text-[14px] font-normal leading-[20px] ${TXT}`} style={{ top }}>
      {items.map((t, i) => (
        <li key={i} className="ms-[21px]">{t}</li>
      ))}
    </ul>
  );
}

export function LiveExamInstructions({ selected }: { selected?: boolean }) {
  return (
    <main className="relative mx-auto min-h-[1824px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(78.828deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AppHeader />

      <p className="absolute left-1/2 top-[70px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
        Varsity Kha Weekly Live<br />Exam-04
      </p>

      {/* stats card */}
      <div className={`absolute left-1/2 top-[132px] h-[108px] w-[360px] -translate-x-1/2 ${CARD}`} />
      <div className={`absolute left-1/2 top-[144px] flex h-[36px] w-[319px] -translate-x-1/2 items-center justify-center gap-[30px] text-center font-['Inter',sans-serif] ${TXT}`}>
        <div>
          <p className="text-[14px] leading-[18px]">Total Question</p>
          <p className="text-[14px] font-semibold leading-[18px]">MCQ: 100, Written: 10</p>
        </div>
        <div>
          <p className="text-[14px] leading-[18px]">Full Marks</p>
          <p className="text-[14px] font-semibold leading-[18px]">MCQ: 100, Written: 4</p>
        </div>
      </div>
      <div className={`absolute left-1/2 top-[192px] -translate-x-1/2 text-center font-['Inter',sans-serif] ${TXT}`}>
        <p className="text-[14px] leading-[18px]">Duration</p>
        <p className="text-[14px] font-semibold leading-[18px]">MCQ: 40min, Written: 50min</p>
      </div>

      {/* instructions card */}
      <div className={`absolute left-1/2 top-[248px] h-[1240px] w-[360px] -translate-x-1/2 ${CARD}`} />
      <p className={`absolute left-1/2 top-[272px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] ${TXT}`}>Varsity Kha Weekly Live Exam-04</p>
      <Bullets items={BANGLA} top={307} />
      <div className="absolute left-[20px] top-[822px] h-px w-[336px] bg-[#cacaca] dark:bg-[#565656]" />
      <p className={`absolute left-1/2 top-[837px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] ${TXT}`}>Varsity Kha Weekly Live Exam-04</p>
      <Bullets items={ENGLISH} top={868} />

      {/* select version card */}
      <div className={`absolute left-1/2 top-[1496px] h-[128px] w-[360px] -translate-x-1/2 ${CARD}`} />
      <p className={`absolute left-1/2 top-[1516px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] ${TXT}`}>Select Version</p>
      <Link
        href="/live-exam/instructions/bangla"
        className={
          selected
            ? "absolute left-[38px] top-[1555px] flex h-[49px] w-[140px] items-center justify-center rounded-[5px] bg-[#3b88f5] drop-shadow-[0px_0px_2.5px_rgba(59,136,245,0.1)]"
            : "absolute left-[38px] top-[1555px] flex h-[49px] w-[140px] items-center justify-center rounded-[5px] bg-white drop-shadow-[0px_0px_2.5px_rgba(0,0,0,0.1)] dark:bg-[#2c2c2c]"
        }
      >
        <span className={`font-['Inter',sans-serif] text-[14px] font-medium ${selected ? "text-white" : TXT}`}>Bangla Version</span>
      </Link>
      <div className="absolute left-[198px] top-[1555px] flex h-[49px] w-[140px] items-center justify-center rounded-[5px] bg-white drop-shadow-[0px_0px_2.5px_rgba(0,0,0,0.1)] dark:bg-[#2c2c2c]">
        <span className={`font-['Inter',sans-serif] text-[14px] font-medium ${TXT}`}>English Version</span>
      </div>

      {/* star buttons */}
      {selected ? (
        <Link href="/live-exam/quiz" className="absolute left-[8px] top-[1644px] flex h-[36px] w-[360px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Star MCQ Exam</span>
        </Link>
      ) : (
        <div className="absolute left-[8px] top-[1644px] flex h-[36px] w-[360px] items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white dark:text-[#e8e8e8]">Star MCQ Exam</span>
        </div>
      )}
      {selected ? (
        <Link href="/live-exam/quiz" className="absolute left-[8px] top-[1692px] flex h-[36px] w-[360px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Star Written Exam</span>
        </Link>
      ) : (
        <div className="absolute left-[8px] top-[1692px] flex h-[36px] w-[360px] items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
          <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white dark:text-[#e8e8e8]">Star Written Exam</span>
        </div>
      )}

      <div className="absolute bottom-0 left-0">
        <AppFooter />
      </div>
    </main>
  );
}
