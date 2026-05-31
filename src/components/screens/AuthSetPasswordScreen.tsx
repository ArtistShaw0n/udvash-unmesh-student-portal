import Link from "next/link";
import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — auth flow · Set New Password. Forgot Password 1:12862 / Registration 1:15496
 *   (each light + dark). frame 376×812, card 360×550 @ (8,150). New Password (+ eye-off) +
 *   Confirm New Password (+ eye) + "Ensure your Password…" + 4 strength rules + Next.
 */
const A = "/components/icons/auth";
const RULES: [string, number][] = [
  ["At least 8 characters long", 335],
  ["Must include a letter", 360],
  ["Must include a Number (0-9)", 385],
  ["Must include a special character (@, #, $, %, & etc.)", 410],
];

export function AuthSetPasswordScreen({ nextHref }: { nextHref: string }) {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] h-[550px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Set New Password</p>

        <p className="absolute left-[20px] top-[131px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">New Password</p>
        <div className="absolute left-[20px] top-[156px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter New Password</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${A}/eye-off.svg`} alt="" aria-hidden="true" className="h-[12px] w-[19px] dark:invert" />
        </div>

        <p className="absolute left-[20px] top-[216px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Confirm New Password</p>
        <div className="absolute left-[20px] top-[241px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Confirm New Password</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${A}/eye.svg`} alt="" aria-hidden="true" className="h-[12px] w-[19px] dark:invert" />
        </div>

        <p className="absolute left-[20px] top-[301px] whitespace-nowrap font-['Inter',sans-serif] text-[14px] font-semibold leading-[24px] text-[#616161] dark:text-[#e8e8e8]">Ensure your Password in strong and secure.</p>

        {RULES.map(([t, top]) => (
          <div key={t} className="absolute left-[20px] flex items-center gap-[10px]" style={{ top }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/rule-circle.svg`} alt="" aria-hidden="true" className="size-[14px] dark:invert" />
            <span className="whitespace-nowrap font-['Inter',sans-serif] text-[12px] leading-[24px] text-[#616161] dark:text-[#e8e8e8]">{t}</span>
          </div>
        ))}

        <Link href={nextHref} className="absolute left-1/2 top-[474px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] px-[30px] py-[8px] dark:bg-[#2c2c2c]">
          <span className="font-['Inter',sans-serif] text-[14px] text-white">Next</span>
        </Link>
      </div>
    </main>
  );
}
