"use client";

/*
 * Dev screen gallery — a clickable index of every reproduced Figma screen.
 * NOT a Figma artboard; a navigation aid. The theme toggle writes
 * localStorage['udvash-theme'], which the root layout re-applies on every
 * route load, so dark mode persists while you browse.
 */
const GROUPS: { title: string; items: [string, string][] }[] = [
  {
    title: "Auth & Onboarding",
    items: [
      ["/login", "Login"],
      ["/login/password", "Login · Password"],
      ["/login/invalid-registration", "Login · Invalid Reg"],
      ["/login/invalid-password", "Login · Invalid Password"],
      ["/register", "Registration Form"],
      ["/register/set-password", "Register · Set Password"],
      ["/register/done", "Register · Congratulations"],
      ["/forgot-password", "Forgot Password"],
      ["/forgot-password/otp", "Forgot Password · OTP"],
      ["/forgot-password/set-password", "Forgot Password · Set Password"],
      ["/forgot-password/done", "Forgot Password · Done"],
      ["/forgot-registration-number", "Forgot Reg Number"],
      ["/forgot-registration-number/otp", "Forgot Reg Number · OTP"],
      ["/forgot-registration-number/done", "Forgot Reg Number · Done"],
      ["/already-registered", "Already Registered"],
      ["/add-roll-no", "Add Roll No."],
      ["/loading", "Loading"],
    ],
  },
  {
    title: "Home & Profile",
    items: [
      ["/home", "Home"],
      ["/profile", "Profile (popup over Home)"],
      ["/view-profile", "View Profile"],
      ["/logo-beta", "Logo (Beta)"],
      ["/background", "Background"],
    ],
  },
  {
    title: "Class & Exam",
    items: [
      ["/live-class", "Live Class"],
      ["/live-class/empty", "Live Class · Empty"],
      ["/live-exam", "Live Exam"],
      ["/live-exam/instructions", "Live Exam · Instructions"],
      ["/live-exam/instructions/bangla", "Live Exam · Instructions (বাংলা)"],
      ["/live-exam/quiz", "Live Exam · Quiz"],
      ["/live-exam/quiz/confirm", "Live Exam · Quiz Confirm"],
      ["/past-class", "Past Class"],
      ["/past-class/filter-course", "Past Class · Filter Course"],
      ["/past-class/filter-subject", "Past Class · Filter Subject"],
      ["/past-class/filter-platform", "Past Class · Filter Platform"],
      ["/past-exam", "Past Exam"],
      ["/master-class", "Master Class"],
      ["/course-content", "Course & Content"],
      ["/course-content/subjects", "Course · Subjects"],
      ["/course-content/chapters", "Course · Chapters"],
      ["/course-content/lectures", "Course · Lectures"],
      ["/course-content/contents", "Course · Contents"],
      ["/rescan", "Rescan"],
      ["/rescan/running", "Rescan · Running"],
      ["/timestamps", "Timestamps"],
      ["/timestamps/expanded", "Timestamps · Expanded"],
    ],
  },
  {
    title: "Practice & Performance",
    items: [
      ["/practice-exam", "Practice Exam"],
      ["/solve-sheet", "Solve Sheet"],
      ["/solve-sheet/empty", "Solve Sheet · Empty"],
      ["/program-list", "Program List"],
      ["/performance", "Performance Report"],
      ["/performance/report", "Performance · Report"],
      ["/performance/report/filtered", "Performance · Report (filtered)"],
      ["/performance/written", "Performance · Written (Select Version)"],
      ["/performance/written/sets", "Performance · Written (SAQ Sets)"],
      ["/analysis-report", "Analysis Report"],
      ["/analysis-report/published", "Analysis · Published"],
      ["/analysis-report/accuracy", "Analysis · Accuracy"],
      ["/subject-wise-details", "Subject Wise Details"],
      ["/subject-wise-details/expanded", "Subject Wise · Expanded"],
      ["/revision", "Revision"],
      ["/revision/resume", "Revision · Resume"],
      ["/revision/result", "Revision · Result"],
    ],
  },
  {
    title: "Footer Tabs & Community",
    items: [
      ["/downloads", "Downloads"],
      ["/downloads/settings", "Downloads · Settings"],
      ["/downloads/no-internet", "Downloads · No Internet"],
      ["/downloads/video", "Downloads · Video Player"],
      ["/community", "Community"],
      ["/community/chat", "Community · Chat"],
      ["/qa", "Q&A Services"],
      ["/qa/questions", "Q&A · Question Thread"],
      ["/qa/tag", "Course/Subject/Chapter Tag"],
      ["/discussion-group", "Discussion Group"],
    ],
  },
  {
    title: "Forms & Misc",
    items: [
      ["/add-course", "Add Course"],
      ["/add-course/details", "Add Course · Details"],
      ["/add-course/payment", "Add Course · Payment"],
      ["/filter", "Filter (Past Class)"],
      ["/filter/expanded", "Filter · Expanded"],
      ["/service-blocked", "Service Blocked"],
      ["/grand-celebration", "Grand Celebration · Form"],
      ["/grand-celebration/result", "Grand Celebration · Result (QR)"],
      ["/", "Design System (atoms preview)"],
    ],
  },
];

const total = GROUPS.reduce((n, g) => n + g.items.length, 0);

export default function ScreensGalleryPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 text-[#161615] dark:bg-[#111111] dark:text-[#e8e8e8]">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-[22px] font-bold">Udvash–Unmesh · Screens</h1>
          <button
            type="button"
            onClick={() => {
              const el = document.documentElement;
              const toDark = !el.classList.contains("dark");
              el.classList.toggle("dark", toDark);
              el.classList.toggle("light", !toDark);
              try {
                localStorage.setItem("udvash-theme", toDark ? "dark" : "light");
              } catch {}
            }}
            className="rounded-[8px] border border-[#55347b] px-[14px] py-[6px] text-[13px] font-medium text-[#55347b] dark:border-[#9061c8] dark:text-[#9061c8]"
          >
            Toggle Light / Dark
          </button>
        </div>
        <p className="mb-6 text-[13px] text-[#616161] dark:text-[#999999]">
          {total} screens, all Figma-faithful (376px mobile width). Tap a screen, then use the dark toggle — it persists as you browse. Best viewed in a phone or a narrow window.
        </p>

        {GROUPS.map((g) => (
          <section key={g.title} className="mb-7">
            <h2 className="mb-3 text-[15px] font-semibold text-[#55347b] dark:text-[#9061c8]">{g.title}</h2>
            <div className="grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4">
              {g.items.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="flex flex-col rounded-[10px] border border-[#e8e8e8] bg-[#f9f9f9] px-[12px] py-[10px] transition-colors hover:border-[#55347b] dark:border-[#2c2c2c] dark:bg-[#1a1a1a] dark:hover:border-[#9061c8]"
                >
                  <span className="text-[13px] font-medium leading-[18px]">{label}</span>
                  <span className="mt-[2px] truncate text-[11px] text-[#999999]">{href}</span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
