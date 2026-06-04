import Link from "next/link";
import { cn } from "@/lib/cn";
import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Add Course § Admission details form. light 1:16870 · dark 1:17023. frame 376×1104.
 *   header + "ADMISSION FORM" + "Medical Admission Program 2025" + white form card: Institute
 *   input + Version/Branch dropdowns + MBBS/BDS Status checkboxes + "Select Your Batch(s)"
 *   (course card + 3 batch pill-dropdowns) + red Total bar + Back/Next + footer.
 */
const A = "/components/icons/analysis";
const I = "/components/icons/add-course";
const RV = "/components/icons/revision";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

function Field({ top, label }: { top: number; label: string }) {
  return <p className={`absolute left-[28px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`} style={{ top }}>{label}</p>;
}
function Dropdown({ top, value, blue, chevron }: { top: number; value: string; blue?: boolean; chevron?: boolean }) {
  return (
    <div className="absolute left-[28px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_2.5px_0px_rgba(0,0,0,0.1)]" style={{ top }}>
      <span className={cn("font-['Inter',sans-serif] text-[14px] leading-[normal]", blue ? "text-[#1976d2]" : TXT)}>{value}</span>
      {chevron && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${RV}/dropdown-chevron.svg`} alt="" aria-hidden="true" className="h-[6px] w-[12px] rotate-180 dark:invert" />
      )}
    </div>
  );
}
function CheckRow({ left, top, checked, label }: { left: number; top: number; checked?: boolean; label: string }) {
  return (
    <div className="absolute flex items-center gap-[12px] pl-[12px]" style={{ left, top }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${A}/checkbox-${checked ? "checked" : "unchecked"}.svg`} alt="" aria-hidden="true" className={cn("size-[18px]", !checked && "dark:invert")} />
      <span className={`whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[30px] ${TXT}`}>{label}</span>
    </div>
  );
}
function BatchPill({ top, label }: { top: number; label: string }) {
  return (
    <div className="absolute left-[28px] flex h-[32px] w-[320px] items-center justify-between rounded-[99px] bg-white px-[14px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#444444] dark:bg-[#1a1a1a]" style={{ top }}>
      <span className={`font-['Inter',sans-serif] text-[14px] leading-[20px] tracking-[0.1px] ${TXT}`}>{label}</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${I}/batch-chevron.svg`} alt="" aria-hidden="true" className="h-[4px] w-[8px] dark:invert" />
    </div>
  );
}

export default function AddCourseDetailsPage() {
  return (
    <main className="relative mx-auto h-[1104px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(71.9284deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />
      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>ADMISSION FORM</p>
      <div className="absolute left-1/2 top-[93px] h-px w-[149px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className={`absolute left-1/2 top-[104px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] ${TXT}`}>Medical Admission Program 2025</p>

      {/* form card */}
      <div className="absolute left-1/2 top-[146px] h-[862px] w-[360px] -translate-x-1/2 rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" />

      <Field top={176} label="Present/Last Educational Institute" />
      <Dropdown top={201} value="Institute Name/EIIN" blue />
      <Field top={261} label="Version of Study" />
      <Dropdown top={286} value="Select Version of Study" chevron />
      <Field top={346} label="Branch " />
      <Dropdown top={371} value="Select Branch" chevron />

      <Field top={431} label="MBBS/DBS Status" />
      <CheckRow left={28} top={461} checked label="First Timer" />
      <CheckRow left={153} top={461} label="Second Timer " />
      <CheckRow left={28} top={494} label="MBBS/BDS Enrolled" />

      <Field top={539} label="Select Your Batch(s)" />

      {/* course card */}
      <div className="absolute left-[16px] top-[564px] flex h-[76px] w-[344px] items-center gap-[10px] rounded-[5px] bg-white pl-[12px] pr-[12px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#2c2c2c]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${A}/checkbox-checked.svg`} alt="" aria-hidden="true" className="size-[18px] shrink-0" />
        <p className={`flex-1 font-['Inter',sans-serif] text-[14px] leading-[22px] ${TXT}`}>Medical &amp; Dental Full Course 2025 [Lite Combo]</p>
        <p className="shrink-0 whitespace-nowrap text-right font-['Inter',sans-serif] text-[14px] font-semibold leading-[22px] text-[#f95959]">13,000 BDT</p>
      </div>

      <BatchPill top={670} label="Select Batch Type" />
      <BatchPill top={718} label="Select Batch Time" />
      <BatchPill top={766} label="Select Batch Name" />

      {/* Total bar */}
      <div className="absolute left-[16px] top-[858px] flex h-[54px] w-[344px] items-center justify-center rounded-[5px] bg-[#f95959] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
        <p className="whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-bold leading-[22px] text-white">
          Total Amount : <span className="line-through">13,000 BDT</span> 12,000 BDT
        </p>
      </div>

      <Link href="/add-course" className="absolute left-[calc(50%-75px)] top-[942px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Back</span>
      </Link>
      <Link href="/add-course/payment" className="absolute left-[calc(50%+75px)] top-[942px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Next</span>
      </Link>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
