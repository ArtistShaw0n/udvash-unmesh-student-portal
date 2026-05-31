import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — auth flow · sent-OTP (OTP entry). Forgot Password 1:12705 / Forgot
 *   Registration Number 1:14110 (each light + dark). frame 376×812, card 360×372 @ (8,150).
 *   title + pink OTP-sent chip + OTP field + wait-timer + Resend OTP + Next.
 */
export function AuthOtpScreen({ title }: { title: string }) {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden" style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }} />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] h-[372px] w-[360px] rounded-[20px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className="absolute inset-x-0 top-[40px] text-center font-['Inter',sans-serif] text-[26px] font-medium leading-[normal] text-[#616161] dark:text-[#e8e8e8]">{title}</p>

        <div className="absolute left-1/2 top-[97px] flex h-[24px] w-[296px] -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-[20px] bg-[#faefef] px-[20px]">
          <span className="font-['Inter',sans-serif] text-[12px] leading-[22px] text-[#f95959]">Please type the OTP sent to (88017*****019)</span>
        </div>

        <p className="absolute left-[20px] top-[131px] font-['Inter',sans-serif] text-[14px] leading-[normal] text-[#616161] dark:text-[#e8e8e8]">OTP</p>
        <div className="absolute left-[20px] top-[156px] flex h-[40px] w-[320px] items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter Your OTP</span>
        </div>

        <p className="absolute inset-x-0 top-[216px] text-center font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#616161] dark:text-[#e8e8e8]">
          Please wait to get OTP for <span className="font-bold">04:54 minutes</span>
        </p>
        <p className="absolute inset-x-0 top-[242px] text-center font-['Inter',sans-serif] text-[14px] leading-[24px] text-[#616161] dark:text-[#e8e8e8]">
          Didn&rsquo;t get OTP yet?&nbsp; <span className="font-bold text-[#3b88f5]">Resend OTP</span>
        </p>

        <div className="absolute left-1/2 top-[296px] flex h-[36px] w-[150px] -translate-x-1/2 items-center justify-center rounded-[5px] bg-[#c6c6c6] px-[30px] py-[8px] dark:bg-[#2c2c2c]">
          <span className="font-['Inter',sans-serif] text-[14px] text-white">Next</span>
        </div>
      </div>
    </main>
  );
}
