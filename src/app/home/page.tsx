"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";
import { Avatar } from "@/components/Avatar";
import { ScoreLetter } from "@/components/ScoreLetter";
import { ProgressBar } from "@/components/ProgressBar";
import { FooterMenu, type FooterTab } from "@/components/FooterMenu";

export default function HomeSample() {
  const [tab, setTab] = useState<FooterTab>("home");

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col">
      <Header title="উদ্ভাস-উন্মেষ" notificationCount={3} />

      <main className="flex-1 px-4 md:px-6 lg:px-12 py-6 pb-32 max-w-[1200px] w-full mx-auto space-y-6">
        <Link href="/" className="text-sm text-link hover:underline">← Back to DS</Link>

        {/* Welcome */}
        <div className="flex items-center gap-3">
          <Avatar size="md" initials="AM" />
          <div>
            <p className="text-md font-semibold text-ink">Welcome, Asif Mahmood</p>
            <p className="text-sm text-muted">Reg. No. 1819361</p>
          </div>
        </div>

        {/* Tiles grid */}
        <section>
          <h2 className="text-md font-semibold text-ink mb-3">Quick access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Tile label="Live Class" badge="Live" />
            <Tile label="Master Class" />
            <Tile label="Past Exam" />
            <Tile label="Solve Sheet" />
            <Tile label="Performance" />
            <Tile label="Downloads" />
          </div>
        </section>

        {/* Course progress */}
        <section className="bg-surface-subtle rounded-md p-4 space-y-3">
          <h2 className="text-md font-semibold text-ink">Current Course</h2>
          <p className="text-sm text-muted">Physics — পদার্থবিজ্ঞান</p>
          <ProgressBar value={4} max={26} label="Chapters completed" />
        </section>

        {/* Recent reports */}
        <section>
          <h2 className="text-md font-semibold text-ink mb-3">Recent reports</h2>
          <div className="space-y-3">
            <ReportRow grade="A" subject="Physics MCQ" score="48/50" status="Live" statusVariant="info" />
            <ReportRow grade="B" subject="Chemistry Written" score="35/50" status="Branch" statusVariant="warning" />
            <ReportRow grade="C" subject="Math Practice" score="22/40" status="Lowest" statusVariant="error" />
            <ReportRow grade="A" subject="Biology MCQ" score="49/50" status="Highest" statusVariant="success" />
          </div>
        </section>

        {/* Course list */}
        <section>
          <h2 className="text-md font-semibold text-ink mb-3">Chapters</h2>
          <div className="space-y-3">
            <Card title="অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ" bangla trailing={<ChevronRight />} />
            <Card title="অধ্যায়-২ : ভেক্টর" bangla trailing={<ChevronRight />} />
            <Card title="অধ্যায়-৩ : গতিবিদ্যা" bangla trailing={<ChevronRight />} />
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 inset-x-0 max-w-[1200px] mx-auto">
        <FooterMenu active={tab} onTabChange={setTab} />
      </div>
    </div>
  );
}

function Tile({ label, badge }: { label: string; badge?: string }) {
  return (
    <button
      type="button"
      className="relative flex items-center gap-2 p-3 rounded-md border border-line-subtle bg-surface hover:bg-brand-subtle transition-colors text-left"
    >
      <span className="inline-flex size-9 items-center justify-center rounded-sm bg-error-subtle text-error">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="10 9 15 12 10 15" fill="currentColor" />
        </svg>
      </span>
      <span className="text-md text-ink truncate">{label}</span>
      {badge && (
        <span className="absolute top-1.5 right-1.5">
          <Badge variant="info">{badge}</Badge>
        </span>
      )}
    </button>
  );
}

function ReportRow({ grade, subject, score, status, statusVariant }: {
  grade: string;
  subject: string;
  score: string;
  status: string;
  statusVariant: "info" | "success" | "warning" | "error";
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md border border-line-subtle bg-surface">
      <ScoreLetter letter={grade} variant={statusVariant} />
      <div className="flex-1 min-w-0">
        <div className="text-md font-medium text-ink truncate">{subject}</div>
        <div className="text-sm text-muted">{score}</div>
      </div>
      <Badge variant={statusVariant}>{status}</Badge>
    </div>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
      <polyline points="9 18 15 12 9 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
