"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Header, Avatar, ProgressBar, FooterMenu, Card, Badge, Icon,
  HomeGridCard, LiveClassCard, MasterClassCard, MeritRankings, PositionLabel,
  ScoreGauge, MCQRow, TotalRow, Container, Stack, Grid, BackLink,
  CourseContentCard, SegmentedControl,
} from "@/components";
import type { FooterTab } from "@/components/FooterMenu";

export default function HomeSample() {
  const [tab, setTab] = useState<FooterTab>("home");
  const [seg, setSeg] = useState("live");

  return (
    <div className="min-h-screen bg-surface text-ink flex flex-col">
      <Header title="উদ্ভাস-উন্মেষ" notificationCount={3} />

      <main className="flex-1 pb-32">
        <Container size="xl" className="py-6 space-y-6">
          <BackLink href="/" label="Back to DS" />

          {/* Welcome */}
          <Stack direction="row" align="center" gap={3}>
            <Avatar size="md" initials="AM" />
            <div>
              <p className="text-md font-semibold text-ink">Welcome, Asif Mahmood</p>
              <p className="text-sm text-muted">Reg. No. 1819361</p>
            </div>
          </Stack>

          {/* Quick tiles */}
          <section>
            <h2 className="text-md font-semibold text-ink mb-3">Quick access</h2>
            <Grid cols={2} mdCols={3} lgCols={4} gap={3}>
              <HomeGridCard icon={<Icon name="play" size={28} />} label="Live Class" hasNotification />
              <HomeGridCard icon={<Icon name="star" size={28} />} label="Master Class" />
              <HomeGridCard icon={<Icon name="calendar" size={28} />} label="Past Exam" />
              <HomeGridCard icon={<Icon name="check" size={28} />} label="Solve Sheet" />
              <HomeGridCard icon={<Icon name="thumb-up" size={28} />} label="Performance" />
              <HomeGridCard icon={<Icon name="download" size={28} />} label="Downloads" />
              <HomeGridCard icon={<Icon name="speech-bubble" size={28} />} label="Community" hasNotification />
              <HomeGridCard icon={<Icon name="user" size={28} />} label="Profile" />
            </Grid>
          </section>

          {/* Course progress */}
          <section className="bg-surface-subtle rounded-md p-4 space-y-3">
            <div className="flex items-baseline justify-between">
              <h2 className="text-md font-semibold text-ink">Current Course</h2>
              <PositionLabel position={5} />
            </div>
            <p className="text-sm text-muted">Physics — পদার্থবিজ্ঞান</p>
            <ProgressBar value={4} max={26} label="Chapters completed" />
          </section>

          {/* Performance summary */}
          <section>
            <h2 className="text-md font-semibold text-ink mb-3">This week</h2>
            <Stack direction="row" gap={4} align="start" wrap>
              <div className="w-[328px] bg-surface rounded-md border border-line p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold text-ink">Mock Test 5</h3>
                  <ScoreGauge score="42" outOf="50" />
                </div>
                <MeritRankings ranks={[
                  { label: "Class", value: 3 },
                  { label: "Branch", value: 1 },
                  { label: "Overall", value: 8 },
                ]} />
              </div>
              <div className="w-[280px] bg-surface rounded-md border border-line p-3">
                <MCQRow letter="A" letterVariant="success" label="MCQ" score="10/15" />
                <MCQRow letter="B" letterVariant="info" label="Short Answer" score="8/10" />
                <MCQRow letter="C" letterVariant="warning" label="Numerical" score="5/10" />
                <TotalRow total="23/35" />
              </div>
            </Stack>
          </section>

          {/* Live segment */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-md font-semibold text-ink">Classes</h2>
              <SegmentedControl size="sm" value={seg} onChange={setSeg} segments={[
                { value: "live", label: "Live" },
                { value: "past", label: "Past" },
                { value: "upcoming", label: "Upcoming" },
              ]} />
            </div>
            <Grid cols={1} mdCols={2} lgCols={3} gap={4}>
              <LiveClassCard title="অধ্যায়-১ পদার্থ" subject="Physics" instructor="ড. আব্দুর রহমান" schedule="Today · 7:00 PM" isLive bangla />
              <MasterClassCard title="Periodic Table Masterclass" date="10 May" duration="2h" />
              <LiveClassCard title="Calculus Basics" subject="Math" instructor="Mr. Hasan" schedule="Tomorrow · 5:00 PM" />
            </Grid>
          </section>

          {/* Chapters */}
          <section>
            <h2 className="text-md font-semibold text-ink mb-3">Chapters</h2>
            <Stack gap={2}>
              <CourseContentCard title="অধ্যায়-১ : ভৌতজগৎ ও পরিমাপ" index="01" bangla expanded />
              <CourseContentCard title="অধ্যায়-২ : ভেক্টর" index="02" bangla />
              <CourseContentCard title="অধ্যায়-৩ : গতিবিদ্যা" index="03" bangla />
              <CourseContentCard title="অধ্যায়-৪ : নিউটনের সূত্র" index="04" bangla disabled />
            </Stack>
          </section>

          {/* Recent reports */}
          <section>
            <h2 className="text-md font-semibold text-ink mb-3">Recent reports</h2>
            <Stack gap={3}>
              <Card title="Physics MCQ — 48/50" trailing={<Badge variant="success">Highest</Badge>} />
              <Card title="Chemistry Written — 35/50" trailing={<Badge variant="warning">Branch</Badge>} />
              <Card title="Math Practice — 22/40" trailing={<Badge variant="error">Lowest</Badge>} />
            </Stack>
          </section>
        </Container>
      </main>

      <div className="fixed bottom-0 inset-x-0 max-w-[1200px] mx-auto">
        <FooterMenu active={tab} onTabChange={setTab} />
      </div>
    </div>
  );
}
