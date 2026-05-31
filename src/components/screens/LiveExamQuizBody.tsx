import Link from "next/link";

/*
 * Figma V2 — Live Exam quiz body (shared by the quiz screen 1:8657 and the
 * submit-confirm screen 1:8859, where it sits dimmed behind the modal).
 * Absolute Figma-coord content (no <main>/header/footer): chapter title (y70),
 * quiz subtitle (y128), info card (y157), "Remaining" timer (y229), 5 question
 * cards, Submit (y1919). Rendered inside a relative parent (the page <main>).
 */
const TXT = "text-[#616161] dark:text-[#e8e8e8]";
const CARD =
  "rounded-[5px] bg-white shadow-[0px_0px_4px_0px_rgba(255,255,255,0.25)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]";

type Q = {
  top: number;
  height: number;
  num: number;
  stem: string;
  subPoints?: string[];
  options: [string, string][];
  optionsTop: number;
};

const SUB = ["(i) কি.গ্রা., মিটার ও সেকেন্ড", "(ii) সেকেন্ড ও ভোল্ট", "(iii) কেলভিন, ক্যান্ডেলা ও নিউটন"];
const Q14_OPT: [string, string][] = [["A", "i, iii"], ["B", "ii"], ["C", "i, ii, iii"], ["D", "i"]];
const Q25_OPT: [string, string][] = [["A", "24%"], ["B", "0.08%"], ["C", "0.24%"], ["D", "8%"]];
const Q14_STEM = "মৌলিক একক হলো- [RU’18-19]";
const Q25_STEM = "একটি গোলকের পরিমাপ্য ব্যাসার্ধ (2.5 0.2) cm হলে এর আয়তন পরিমাপের শতকরা ত্রুটি কত? [JU’19-20, KU’19-20, RU’17-18]";

const QUESTIONS: Q[] = [
  { top: 276, height: 341, num: 1, stem: Q14_STEM, subPoints: SUB, options: Q14_OPT, optionsTop: 161 },
  { top: 625, height: 303, num: 2, stem: Q25_STEM, options: Q25_OPT, optionsTop: 123 },
  {
    top: 936,
    height: 283,
    num: 3,
    stem: "নিচের কোনটি ক্ষমতার মাত্রা? [JU'09-10, DU’09-10, CU’13-14, 05-06, 09-10]",
    options: [["A", "[M{L}^{-2}{T}^{-3}]"], ["B", "[M{L}^{2}{T}^{-3}]"], ["C", "[M{L}^{-2}{T}^{-2}]"], ["D", "[M{L}^{2}{T}^{2}]"]],
    optionsTop: 103,
  },
  { top: 1227, height: 341, num: 4, stem: Q14_STEM, subPoints: SUB, options: Q14_OPT, optionsTop: 161 },
  { top: 1576, height: 303, num: 5, stem: Q25_STEM, options: Q25_OPT, optionsTop: 123 },
];

function OptionRow({ letter, text }: { letter: string; text: string }) {
  return (
    <div className="flex h-[30px] items-center gap-[8px] border-t border-[#cacaca] dark:border-[#333333]">
      <span className={`flex size-[20px] shrink-0 items-center justify-center rounded-full border border-[#616161] font-['Inter',sans-serif] text-[14px] dark:border-[#e8e8e8] ${TXT}`}>{letter}</span>
      <span className={`font-['Inter',sans-serif] text-[14px] ${TXT}`}>{text}</span>
    </div>
  );
}

function QuestionCard({ q }: { q: Q }) {
  return (
    <div className={`absolute left-[8px] w-[360px] ${CARD}`} style={{ top: q.top, height: q.height }}>
      <span className="absolute left-[14px] top-[14px] flex h-[19px] items-center rounded-[5px] bg-[#f6f6f6] px-[6px] dark:bg-[#2c2c2c]">
        <span className={`font-['Inter',sans-serif] text-[12px] ${TXT}`}>Question {q.num}</span>
      </span>

      <div className="absolute left-[20px] top-[43px] w-[320px]">
        {q.subPoints ? (
          <>
            <p className={`absolute left-0 top-0 font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>{q.stem}</p>
            {q.subPoints.map((s, i) => (
              <p key={i} className={`absolute left-0 font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`} style={{ top: 27 * (i + 1) }}>{s}</p>
            ))}
          </>
        ) : (
          <p className={`font-['Inter',sans-serif] text-[14px] leading-[20px] ${TXT}`}>{q.stem}</p>
        )}
      </div>

      <div className="absolute left-[20px] w-[320px]" style={{ top: q.optionsTop }}>
        <div className="flex flex-col gap-[10px]">
          {q.options.map(([l, t]) => (
            <OptionRow key={l} letter={l} text={t} />
          ))}
        </div>
        <div className="mt-[10px] border-t border-[#cacaca] dark:border-[#333333]" />
      </div>
    </div>
  );
}

export function QuizBody() {
  return (
    <>
      <p className={`absolute left-1/2 top-[70px] w-[336px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[20px] font-semibold leading-[normal] ${TXT}`}>
        অধ্যায়-১০: আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব
      </p>
      <p className={`absolute left-1/2 top-[128px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>
        কুইজ : লেকচার - ১.১
      </p>

      <div className={`absolute left-[8px] top-[157px] h-[64px] w-[360px] ${CARD}`} />
      <p className={`absolute left-1/2 top-[167px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>
        Question : 15 | Marks : 15 | Duration : 10 min
      </p>
      <p className={`absolute left-1/2 top-[192px] -translate-x-1/2 whitespace-nowrap text-center font-['Inter',sans-serif] text-[12px] leading-[normal] ${TXT}`}>
        Version : বাংলা | <span className="text-[#f95959]">(-) Marks : 25%</span>
      </p>

      <div className="absolute left-[8px] top-[229px] flex h-[39px] w-[360px] items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] text-white">Remaining: 09:10</span>
      </div>

      {QUESTIONS.map((q) => (
        <QuestionCard key={q.num} q={q} />
      ))}

      <Link href="/live-exam/quiz/confirm" className="absolute left-1/2 top-[1919px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Submit</span>
      </Link>
    </>
  );
}
