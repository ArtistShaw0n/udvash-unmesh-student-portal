import { AppHeader } from "@/components/screens/AppHeader";
import { AppFooter } from "@/components/screens/AppFooter";

/*
 * Figma V2 — Add Course § Payment Form. light 1:16935 · dark 1:17087-pair. frame 376×812.
 *   header + "PAYMENT FORM" + "Medical Admission Program 2025" + white card: Total Amount
 *   input (#f5f5f5, blue value) + Payment Amount input + "Choose Payment Method" + 5 radio
 *   rows + terms checkbox + Back / Proceed to Pay + footer (Home active).
 */
const A = "/components/icons/analysis";
const I = "/components/icons/add-course";
const TXT = "text-[#616161] dark:text-[#e8e8e8]";

const METHODS = [
  { top: 383, label: "bKash Transaction Id" },
  { top: 413, label: "bKash Web Payment" },
  { top: 443, label: "Nagad Web Payment" },
  { top: 473, label: "Rocket Web Payment" },
  { top: 503, label: "Cards/Mobile Banking/Net Banking" },
];

export default function AddCoursePaymentPage() {
  return (
    <main className="relative mx-auto h-[812px] w-[376px] overflow-hidden bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(66.076deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />
      <AppHeader />

      <p className={`absolute left-1/2 top-[74px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>PAYMENT FORM</p>
      <div className="absolute left-1/2 top-[93px] h-px w-[149px] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#000000,transparent)] opacity-[0.32] dark:bg-[linear-gradient(90deg,transparent,#ffffff,transparent)]" />
      <p className={`absolute left-1/2 top-[104px] -translate-x-1/2 whitespace-nowrap font-['Inter',sans-serif] text-[18px] font-semibold leading-[22px] ${TXT}`}>Medical Admission Program 2025</p>

      {/* form card */}
      <div className="absolute left-1/2 top-[146px] h-[557px] w-[360px] -translate-x-1/2 rounded-[10px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" />

      <p className={`absolute left-[28px] top-[176px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Total Amount</p>
      <div className="absolute left-[28px] top-[201px] flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-[#f5f5f5] px-[10px] dark:border-[#444444] dark:bg-[#2c2c2c]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#1976d2]">13000.00</span>
      </div>

      <p className={`absolute left-[28px] top-[261px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>Payment Amount</p>
      <div className="absolute left-[28px] top-[286px] flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#1a1a1a]">
        <span className={`font-['Inter',sans-serif] text-[14px] leading-[normal] ${TXT}`}>13000.00</span>
      </div>

      <p className={`absolute left-[28px] top-[356px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[normal] ${TXT}`}>Choose Payment Method</p>

      {METHODS.map((m) => (
        <div key={m.top} className="absolute left-[28px] flex h-[30px] items-center gap-[10px]" style={{ top: m.top }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${I}/radio-off.svg`} alt="" aria-hidden="true" className="size-[18px]" />
          <span className={`whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-[30px] ${TXT}`}>{m.label}</span>
        </div>
      ))}

      {/* terms checkbox */}
      <div className="absolute left-[16px] top-[553px] flex w-[332px] items-start gap-[8px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${A}/checkbox-unchecked.svg`} alt="" aria-hidden="true" className="mt-[2px] size-[18px] shrink-0 dark:invert" />
        <p className={`font-['Inter',sans-serif] text-[14px] leading-[22px] ${TXT}`}>
          I agree to the <span className="underline">terms &amp; conditions</span> and <span className="underline">privacy policy</span>.
        </p>
      </div>

      <div className="absolute left-[calc(50%-75px)] top-[637px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] dark:bg-[#2c2c2c]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Back</span>
      </div>
      <div className="absolute left-[calc(50%+75px)] top-[637px] flex h-[36px] w-[130px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] dark:bg-[#9061c8]">
        <span className="font-['Inter',sans-serif] text-[14px] leading-[12px] text-white">Proceed to Pay</span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <AppFooter />
      </div>
    </main>
  );
}
