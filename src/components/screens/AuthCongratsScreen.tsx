import Link from "next/link";
import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — auth flow · Congratulations (success). 3 variants, card 360 @ (8,150):
 *   password   1:13192 — "Your password is successfully changed." + Login.  card h247, btn@171, text w249.
 *   reg-number 1:14271 — "Dear Asif, / Your Registration Number is 1819361" + copy + Login. h260, btn@184, w255, copy@(313,126).
 *   registered 1:15844 — "Dear Asif, / …Successfully Completed. / …number 1819361" + copy + Add Course. h300, btn@224, w249, copy@(310,165).
 *   greeting top-94 (blank line after "Dear Asif,"), number #55347b 16 bold, copy icon absolute 14×14.
 *   ⚠ DEFERRED: reg-number + registered title = Lato Medium 28 (password = Inter Medium 26). Lato Medium(500)
 *     is not available via next/font/google, so the title is kept Inter 26 pending a font-infra pass.
 *   ⚠ congrats dark frames not located — number dark #9061c8 / copy dark:invert unverified.
 */
const A = "/components/icons/auth";

type Variant = "password" | "reg-number" | "registered";

export function AuthCongratsScreen({ variant }: { variant: Variant }) {
  const cardH = variant === "password" ? 247 : variant === "reg-number" ? 260 : 300;
  const btnTop = variant === "password" ? 171 : variant === "reg-number" ? 184 : 224;
  const greetW = variant === "reg-number" ? 255 : 249;
  const btnLabel = variant === "registered" ? "Add Course" : "Login";
  const btnHref = variant === "registered" ? "/add-course" : "/login";
  const copyPos = variant === "reg-number" ? { left: 313, top: 126 } : { left: 310, top: 165 };
  const num = <span className="font-bold text-[16px] text-[#55347b] dark:text-[#9061c8]">1819361</span>;

  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ height: cardH }}>
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Congratulations!</p>

        {variant === "password" ? (
          <p className="absolute left-1/2 top-[91px] w-[249px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">Your password is successfully changed.</p>
        ) : (
          <>
            <div className="absolute left-1/2 top-[94px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]" style={{ width: greetW }}>
              <p>
                Dear <span className="font-bold">Asif,</span>
              </p>
              <p className="leading-[10px]">&nbsp;</p>
              {variant === "reg-number" ? (
                <p className="whitespace-nowrap">Your Registration Number is {num}</p>
              ) : (
                <>
                  <p>Your Registration Is Successfully Completed.</p>
                  <p className="whitespace-nowrap">Your registration number is {num}</p>
                </>
              )}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/copy.svg`} alt="" aria-hidden="true" className="absolute size-[14px] dark:invert" style={{ left: copyPos.left, top: copyPos.top }} />
          </>
        )}

        <Link href={btnHref} className="absolute left-1/2 flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] px-[30px] py-[8px] dark:bg-[#9061c8]" style={{ top: btnTop }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-white">{btnLabel}</span>
        </Link>
      </div>
    </main>
  );
}
