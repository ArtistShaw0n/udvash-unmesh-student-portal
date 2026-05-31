import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — auth flow · Congratulations (success). 3 variants:
 *   password 1:13192 (Forgot Password — "Your password is successfully changed." + Login),
 *   reg-number 1:14271 (Forgot Reg Number — "Dear Asif, Your Registration Number is 1819361"
 *     + copy + Login), registered 1:15844 (Registration — "…Successfully Completed." + number
 *     + Add Course). frame 376×812, card 360 @ (8,150), title "Congratulations!".
 */
const A = "/components/icons/auth";

export function AuthCongratsScreen({ variant }: { variant: "password" | "reg-number" | "registered" }) {
  const cardH = variant === "password" ? 247 : variant === "reg-number" ? 260 : 280;
  const btnTop = variant === "password" ? 171 : variant === "reg-number" ? 184 : 204;
  const btnLabel = variant === "registered" ? "Add Course" : "Login";
  const num = (
    <>
      <span className="font-bold text-[16px] text-[#55347b] dark:text-[#9061c8]">1819361</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${A}/copy.svg`} alt="" aria-hidden="true" className="ml-[6px] inline-block size-[14px] align-middle dark:invert" />
    </>
  );

  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]" style={{ height: cardH }}>
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">Congratulations!</p>

        {variant === "password" ? (
          <p className="absolute left-1/2 top-[91px] w-[249px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">Your password is successfully changed.</p>
        ) : (
          <div className="absolute left-1/2 top-[94px] w-[255px] -translate-x-1/2 text-center font-['Inter',sans-serif] text-[14px] leading-[20px] text-[#616161] dark:text-[#e8e8e8]">
            <p>Dear <span className="font-bold">Asif,</span></p>
            {variant === "reg-number" ? (
              <>
                <p className="leading-[10px]">&nbsp;</p>
                <p className="whitespace-nowrap">Your Registration Number is {num}</p>
              </>
            ) : (
              <>
                <p>Your Registration Is Successfully Completed.</p>
                <p className="whitespace-nowrap">Your registration number is {num}</p>
              </>
            )}
          </div>
        )}

        <div className="absolute left-1/2 flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#55347b] px-[30px] py-[8px] dark:bg-[#9061c8]" style={{ top: btnTop }}>
          <span className="font-['Inter',sans-serif] text-[14px] text-white">{btnLabel}</span>
        </div>
      </div>
    </main>
  );
}
