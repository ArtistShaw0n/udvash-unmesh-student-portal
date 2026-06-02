import Link from "next/link";
import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — auth flow · Set Password (two real Figma variants).
 *   forgot   "Set New Password"  — Forgot Password 1:12862 · card 360×550 @ y150.
 *   register "Set Your Password" — Registration  1:15496 · card 360×620 @ y100;
 *     adds greeting "Dear Asif, / Your registration number is 1819361" (#55347b 16
 *     bold) + copy icon, labels Enter/Confirm Password, Submit button.
 *   Both: 2 password inputs (eye-off 19×16 / eye 19×12) + "Ensure…" + 4 rules + button.
 *   NOTE: register dark frame not yet located — dark uses verified design-system values;
 *   greeting number kept #55347b (light-verified) pending dark-frame check.
 */
const A = "/components/icons/auth";
const RULES = [
  "At least 8 characters long",
  "Must include a letter",
  "Must include a Number (0-9)",
  "Must include a special character (@, #, $, %, & etc.)",
];

type Variant = "register" | "forgot";

const CFG: Record<
  Variant,
  {
    cardMt: number;
    cardH: number;
    title: string;
    greeting: boolean;
    label1: string;
    ph1: string;
    l1: number;
    i1: number;
    label2: string;
    ph2: string;
    l2: number;
    i2: number;
    ensure: number;
    rules: number[];
    btn: string;
    btnTop: number;
  }
> = {
  register: {
    cardMt: 50,
    cardH: 620,
    title: "Set Your Password",
    greeting: true,
    label1: "Enter Password",
    ph1: "Enter Password",
    l1: 201,
    i1: 226,
    label2: "Confirm Password",
    ph2: "Confirm Password",
    l2: 286,
    i2: 311,
    ensure: 371,
    rules: [405, 430, 455, 480],
    btn: "Submit",
    btnTop: 544,
  },
  forgot: {
    cardMt: 100,
    cardH: 550,
    title: "Set New Password",
    greeting: false,
    label1: "New Password",
    ph1: "Enter New Password",
    l1: 131,
    i1: 156,
    label2: "Confirm New Password",
    ph2: "Confirm New Password",
    l2: 216,
    i2: 241,
    ensure: 301,
    rules: [335, 360, 385, 410],
    btn: "Next",
    btnTop: 474,
  },
};

export function AuthSetPasswordScreen({ nextHref, variant = "forgot" }: { nextHref: string; variant?: Variant }) {
  const c = CFG[variant];
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ marginTop: c.cardMt, height: c.cardH }}>
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">{c.title}</p>

        {c.greeting && (
          <>
            <div className="absolute left-1/2 top-[111px] w-[249px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">
              <p className="leading-[20px]">
                Dear <span className="font-bold">Asif,</span>
              </p>
              <p className="leading-[10px]">&nbsp;</p>
              <p className="leading-[20px]">
                Your registration number is <span className="text-[16px] font-bold text-[#55347b] dark:text-[#9061c8]">1819361</span>
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/copy.svg`} alt="" aria-hidden="true" className="absolute left-[310px] top-[143px] size-[14px] dark:invert" />
          </>
        )}

        <p className="absolute left-[20px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]" style={{ top: c.l1 }}>{c.label1}</p>
        <div className="absolute left-[20px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]" style={{ top: c.i1 }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">{c.ph1}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${A}/eye-off.svg`} alt="" aria-hidden="true" className="h-[16px] w-[19px] dark:invert" />
        </div>

        <p className="absolute left-[20px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]" style={{ top: c.l2 }}>{c.label2}</p>
        <div className="absolute left-[20px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]" style={{ top: c.i2 }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">{c.ph2}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${A}/eye.svg`} alt="" aria-hidden="true" className="h-[12px] w-[19px] dark:invert" />
        </div>

        <p className="absolute left-[20px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[24px] text-[#616161] dark:text-[#e8e8e8]" style={{ top: c.ensure }}>Ensure your Password in strong and secure.</p>

        {RULES.map((t, i) => (
          <div key={t} className="absolute left-[20px] flex items-center gap-[10px]" style={{ top: c.rules[i] }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/rule-circle.svg`} alt="" aria-hidden="true" className="size-[14px] dark:invert" />
            <span className="whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[24px] text-[#616161] dark:text-[#e8e8e8]">{t}</span>
          </div>
        ))}

        <Link href={nextHref} className="absolute left-1/2 flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] px-[30px] py-[8px] dark:bg-[#2c2c2c]" style={{ top: c.btnTop }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-white">{c.btn}</span>
        </Link>
      </div>
    </main>
  );
}
