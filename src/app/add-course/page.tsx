import Link from "next/link";
import { cn } from "@/lib/cn";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Add Course & Enrolment § Admission Form — Select Course(s). light 1:16803 · dark 1:17087.
 *   frame 376×1133. header + "Admission Form" + underline + "Medical Admission Program 2025" +
 *   "Select Your Course(s)" + 10 course checkbox cards (name + optional price #f95959) +
 *   red Total Amount bar (strikethrough old price) + Next + footer (Home active).
 */
const A = "/components/icons/analysis";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

type Course = { top: number; h: number; name: string; price?: string; checked?: boolean };
const COURSES: Course[] = [
  { top: 195, h: 54, name: "Medical & Dental Full Course 2025 [Offline]" },
  { top: 259, h: 76, name: "Medical & Dental Full Course 2025 [Online]", price: "Free", checked: true },
  { top: 345, h: 54, name: "Medical & Dental Full Course 2025 [Combo]" },
  { top: 409, h: 76, name: "Medical & Dental Full Course 2025 [Lite Combo]", price: "13,000 BDT", checked: true },
  { top: 495, h: 72, name: "UDVASH Varsity Math Course 2025 [Offline] UDVASH Varsity Math UDVASH Varsity Math..." },
  { top: 577, h: 54, name: "UDVASH Varsity Math Course 2025 [Combo]" },
  { top: 641, h: 54, name: "Varsity 'KHA' Special Course 2025 [Combo]" },
  { top: 705, h: 54, name: "Medical Exam Batch + All Materials 2025" },
  { top: 769, h: 54, name: "Medical Exam Batch 2025" },
  { top: 833, h: 54, name: "Medical Exam Batch 2025", price: "Free", checked: true },
];

function CourseCheck({ top, h, name, price, checked }: Course) {
  return (
    <div className="absolute left-[8px] flex w-[360px] items-center gap-[8px] rounded-[5px] bg-white pl-[17px] pr-[12px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ top, height: h }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${A}/checkbox-${checked ? "checked" : "unchecked"}.svg`} alt="" aria-hidden="true" className={cn("size-[18px] shrink-0", !checked && "dark:invert")} />
      <p className={`flex-1 font-['Inter',sans-serif] text-[14px] leading-[22px] ${TXT}`}>{name}</p>
      {price && <p className="shrink-0 whitespace-nowrap text-right font-['Inter',sans-serif] text-[14px] font-semibold leading-[22px] text-[#f95959]">{price}</p>}
    </div>
  );
}

export default function AddCoursePage() {
  return (
    <main className="relative mx-auto h-[1133px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(72.362deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Admission Form</p>
      <div className="absolute left-1/2 top-[93px] h-px w-[149px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className={`absolute left-1/2 top-[104px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] ${TXT}`}>Medical Admission Program 2025</p>
      <p className={`absolute left-1/2 top-[156px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[16px] font-semibold leading-[normal] ${TXT}`}>Select Your Course(s)</p>

      {COURSES.map((c) => (
        <CourseCheck key={c.top} {...c} />
      ))}

      <div className="absolute left-[8px] top-[917px] flex h-[54px] w-[360px] items-center justify-center rounded-[5px] bg-[#f95959] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
        <p className="whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-bold leading-[22px] text-white">
          Total Amount : <span className="line-through">13,000 BDT</span> 12,000 BDT
        </p>
      </div>

      <Link href="/add-course/details" className="absolute left-1/2 top-[1001px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-white">Next</span>
      </Link>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
