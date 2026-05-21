"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useDarkMode } from "@/components/Header";

export default function LoginPage() {
  const { isDark, toggle } = useDarkMode();
  const [regNumber, setRegNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col">
      <header className="flex items-center justify-between px-4 md:px-6 lg:px-12 py-4 border-b border-line-subtle">
        <Link href="/" className="text-sm text-link hover:underline">← Back to DS</Link>
        <button type="button" onClick={toggle} className="text-sm text-link">{isDark ? "☀️" : "🌙"}</button>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm md:max-w-md flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <FlameLogo />
            <span
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "var(--color-brand-logo-red)", fontFamily: "var(--font-bangla)" }}
            >
              উদ্ভাস-উন্মেষ
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-ink">Student Login</h1>
          <p className="text-md text-muted text-center -mt-3">Enter your registration number to continue</p>

          <div className="w-full space-y-3">
            <Input
              placeholder="Enter Your Registration Number"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              className="w-full"
            />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              iconRight={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="hover:text-ink transition-colors"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              }
            />
          </div>

          <Button size="md" className="w-full max-w-[200px]">Login</Button>

          <Link href="#" className="text-sm text-link font-medium hover:underline">
            Forgot password?
          </Link>
        </div>
      </main>
    </div>
  );
}

function FlameLogo() {
  return (
    <div className="flex gap-1">
      {[
        { color: "var(--color-brand-logo-red-dark)", letter: "U" },
        { color: "var(--color-brand-logo-yellow)", letter: "" },
      ].map((f, i) => (
        <span
          key={i}
          className="relative inline-block w-10 h-12 border-2 rounded-sm bg-surface"
          style={{ borderColor: "var(--color-brand-logo-black)" }}
        >
          <svg viewBox="0 0 24 28" className="absolute inset-1 size-[calc(100%-8px)]" aria-hidden>
            <path
              d="M12 2 C 14 8, 8 10, 12 16 C 16 12, 18 18, 14 24 C 10 22, 6 18, 12 2 Z"
              fill={f.color}
            />
          </svg>
          {f.letter && (
            <span
              className="absolute inset-0 flex items-center justify-center text-md font-bold"
              style={{ color: "var(--color-brand-logo-black)" }}
            >
              {f.letter}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
      <path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M9.9 4.2A11 11 0 0 1 22 12a11 11 0 0 1-3.1 4.1M6.4 6.4A11 11 0 0 0 2 12s3.5 7 10 7a11 11 0 0 0 4-.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
