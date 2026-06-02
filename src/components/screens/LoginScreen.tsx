import Link from "next/link";
import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — Student Login, 4 states.
 *   enter 1:11886 · invalid-reg 1:11992 · password 1:12104 · invalid-password 1:12051
 *   (each light + dark). frame 376×812, card 360 @ (8,150); card-rel tops = Figma y − 150.
 *   reg states: full card h507 (+ Register Now / Visit / Teacher Login footer);
 *   password states: short card h333 (Welcome + Password + Login). Invalid → pink error
 *   chip + red-border filled input with ✕. Valid password button #55347b, else grey #c6c6c6.
 */
export type LoginState = "enter" | "invalid-reg" | "password" | "invalid-password";

export function LoginScreen({ state }: { state: LoginState }) {
  const isPw = state === "password" || state === "invalid-password";
  const isInvalid = state === "invalid-reg" || state === "invalid-password";
  const cardH = isPw ? 333 : 507;
  const value = state === "enter" ? null : isPw ? (state === "invalid-password" ? "1An#/d2@" : "1An#/d2@45d") : "1234567";
  const purpleBtn = state === "password";
  const primaryHref = isPw ? "/home" : "/login/password";
  const forgotHref = isPw ? "/forgot-password" : "/forgot-registration-number";

  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:border dark:border-[#1c1c1c] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ height: cardH }}>
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">{isPw ? "Welcome Asif!" : "Student Login"}</p>

        {isInvalid && (
          <div className="absolute left-1/2 top-[97px] flex h-[24px] -translate-x-1/2 items-center whitespace-nowrap rounded-[12px] bg-[#faefef] px-[20px]">
            <span className="font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#f95959]">{isPw ? "Invalid Password" : "Invalid Registration Number"}</span>
          </div>
        )}

        <p className="absolute left-[20px] top-[131px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">{isPw ? "Password" : "Registration Number"}</p>
        <div className={`absolute left-[20px] top-[156px] flex h-[40px] w-[320px] items-center justify-between rounded-[5px] border bg-white px-[10px] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] ${state === "password" ? "shadow-[0px_0px_4px_0px_rgba(109,109,109,0.25)] " : ""}${isInvalid ? "border-[#f95959]" : "border-[#b9b9b9] dark:border-[#444444]"}`}>
          <span className={`font-['Inter',sans-serif] text-[14px] ${value ? "text-[#616161] dark:text-[#e8e8e8]" : "text-[#dcdcdc]"}`}>{value ?? "Enter Your Registration Number"}</span>
          {isInvalid && <span className="font-['Inter',sans-serif] text-[16px] leading-none text-[#f95959]">✕</span>}
        </div>
        <Link href={forgotHref} className="absolute left-[20px] top-[202px] font-['Inter',sans-serif] text-[12px] leading-[normal] text-[#f95959]">{isPw ? "Forgot Password?" : "Forgot Registration Number?"}</Link>

        <Link href={primaryHref} className={`absolute left-1/2 top-[257px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] px-[30px] py-[8px] ${purpleBtn ? "bg-[#55347b] dark:bg-[#9061c8]" : "bg-[#c6c6c6] dark:bg-[#2c2c2c]"}`}>
          <span className="font-['Inter',sans-serif] text-[14px] text-white">{isPw ? "Login" : "Next"}</span>
        </Link>

        {!isPw && (
          <>
            <div className="absolute inset-x-0 top-[333px] text-center leading-[24px]">
              <p className="font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">Don&apos;t have a Registration Number?</p>
              <Link href="/register" className="block font-['Inter',sans-serif] text-[14px] font-bold text-[#3b88f5]">Register Now</Link>
            </div>
            <p className="absolute inset-x-0 top-[401px] text-center font-['Inter',sans-serif] leading-[normal]">
              <span className="text-[14px] text-[#616161] dark:text-[#e8e8e8]">Visit:&nbsp;&nbsp;</span>
              <span className="text-[14px] text-[#ed1c24] dark:text-[#e8e8e8]">Udvash</span>
              <span className="text-[18px] text-[#616161] dark:text-[#e8e8e8]">&nbsp;&nbsp;I&nbsp;&nbsp;</span>
              <span className="text-[14px] text-[#7c2427] dark:text-[#e8e8e8]">Unmesh</span>
            </p>
            <p className="absolute inset-x-0 top-[443px] text-center font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#3b88f5]">Teacher Login</p>
          </>
        )}
      </div>
    </main>
  );
}
