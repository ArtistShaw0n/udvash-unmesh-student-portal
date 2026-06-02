import Link from "next/link";
import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — auth flow · sent-OTP (OTP entry). 2 real Figma frames, card 360 @ (8,150):
 *   forgot-password   1:12705 — title "Forgot Password" (1 line). card h372. chip@97, OTP@131, input@156, wait@216, resend@242, Next@296.
 *   forgot-reg-number 1:14110 — title "Forgot Registration / Number" (2 lines) + "It’s Simple & Easy" subtitle. card h434. chip@149, OTP@183, input@208, wait@268, resend@294, Next@358.
 *   chip #faefef 296×24 rounded20 (#f95959 12), OTP field, wait-timer (04:54 bold), Resend OTP (#3b88f5 bold), Next.
 */
type Variant = "forgot-password" | "forgot-reg-number";

const CFG: Record<
  Variant,
  { cardH: number; title: string[]; subtitle: string | null; chip: number; label: number; input: number; wait: number; resend: number; next: number }
> = {
  "forgot-password": { cardH: 372, title: ["Forgot Password"], subtitle: null, chip: 97, label: 131, input: 156, wait: 216, resend: 242, next: 296 },
  "forgot-reg-number": { cardH: 434, title: ["Forgot Registration", "Number"], subtitle: "It’s Simple & Easy", chip: 149, label: 183, input: 208, wait: 268, resend: 294, next: 358 },
};

export function AuthOtpScreen({ variant, nextHref }: { variant: Variant; nextHref: string }) {
  const c = CFG[variant];
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ height: c.cardH }}>
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">
          {c.title.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </p>
        {c.subtitle && (
          <p className="absolute inset-x-0 top-[106px] text-center font-['Inter',sans-serif] text-[14px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">{c.subtitle}</p>
        )}

        <div className="absolute left-1/2 flex h-[24px] w-[296px] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-[20px] bg-[#faefef] px-[20px]" style={{ top: c.chip }}>
          <span className="font-['Inter',sans-serif] text-[12px] leading-[22px] text-[#f95959]">Please type the OTP sent to (88017*****019)</span>
        </div>

        <p className="absolute left-[20px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]" style={{ top: c.label }}>OTP</p>
        <div className="absolute left-[20px] flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]" style={{ top: c.input }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter Your OTP</span>
        </div>

        <p className="absolute inset-x-0 text-center font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#616161] dark:text-[#e8e8e8]" style={{ top: c.wait }}>
          Please wait to get OTP for <span className="font-bold">04:54 minutes</span>
        </p>
        <p className="absolute inset-x-0 text-center font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#616161] dark:text-[#e8e8e8]" style={{ top: c.resend }}>
          Didn&rsquo;t get OTP yet?&nbsp; <span className="font-bold text-[#3b88f5]">Resend OTP</span>
        </p>

        <Link href={nextHref} className="absolute left-1/2 flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] px-[30px] py-[8px] dark:bg-[#2c2c2c]" style={{ top: c.next }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-white">Next</span>
        </Link>
      </div>
    </main>
  );
}
