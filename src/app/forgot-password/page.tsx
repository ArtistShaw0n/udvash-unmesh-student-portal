import { AuthHeader } from "@/components/screens/AuthHeader";

/*
 * Figma V2 — Forgot Password (primary state).
 *   light node 1:12547 · dark pair (exact raw values, light + dark via .dark)
 *   frame 376×812 · card 360 rounded-[20px] (y150–547) · header 50
 *   OTP / sent / congratulations state-frames deferred to a later state-pass.
 */
export default function ForgotPasswordPage() {
  return (
    <main className="relative mx-auto min-h-[812px] w-[376px] bg-white dark:bg-[#111111]">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[50px] opacity-40 dark:hidden"
        style={{ backgroundImage: "linear-gradient(64.6975deg, #e2eefd 13.822%, #e6f3f1 52.905%, #e9dfee 93.259%)" }}
      />

      <AuthHeader />

      <div className="relative mx-auto mt-[100px] w-[360px] rounded-[20px] bg-white px-[20px] pb-[40px] pt-[40px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)] dark:bg-[#1a1a1a] dark:shadow-[0px_0px_20px_0px_#000000]">
        <p className="text-center font-['Inter',sans-serif] text-[26px] font-medium text-[#616161] dark:text-[#e8e8e8]">
          Forgot Password
        </p>

        <p className="mt-[60px] font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">Registration Number</p>
        <div className="mt-[8px] flex h-[40px] w-full items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter Your Registration Number</span>
        </div>

        <p className="mt-[20px] font-['Inter',sans-serif] text-[14px] text-[#616161] dark:text-[#e8e8e8]">Mobile Number</p>
        <div className="mt-[8px] flex h-[40px] w-full items-center rounded-[5px] border border-[#b9b9b9] bg-white px-[10px] dark:border-[#444444] dark:bg-[#111111] dark:shadow-[0px_0px_5px_0px_rgba(0,0,0,0.1)]">
          <span className="font-['Inter',sans-serif] text-[14px] text-[#dcdcdc]">Enter Your Mobile Number</span>
        </div>

        <div className="mt-[40px] flex justify-center">
          <div className="flex h-[36px] w-[150px] items-center justify-center rounded-[5px] bg-[#c6c6c6] px-[30px] py-[8px] dark:bg-[#2c2c2c]">
            <span className="font-['Inter',sans-serif] text-[14px] text-white">Next</span>
          </div>
        </div>
      </div>
    </main>
  );
}
