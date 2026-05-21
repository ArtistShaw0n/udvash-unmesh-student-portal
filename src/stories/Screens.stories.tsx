import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import {
  Header, FooterMenu, Container, Stack, Grid, Icon,
  Avatar, Badge, Button, Card, BackLink,
  HomeGridCard, LiveClassCard, MasterClassCard,
  CourseContentCard, ProfileCard, AddCourseCard,
  AnalysisBlock, AnalysisSolutionCard,
  SubjectWiseSummary, PositionLabel, MeritRankings,
  ScoreGauge, MCQRow, TotalRow, ProgressBar,
  SegmentedControl, FilterChip, StarRating,
  Input, PasswordInput,
} from "@/components";

const meta: Meta = {
  title: "Screens/End-to-end",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const HomeDashboard: Story = {
  render: () => (
    <Screen>
      <Header title="উদ্ভাস-উন্মেষ" notificationCount={3} />
      <Container size="xl" className="py-6 space-y-6 pb-32">
        <Stack direction="row" align="center" gap={3}>
          <Avatar size="md" initials="AM" />
          <div>
            <p className="text-md font-semibold text-ink">Welcome, Asif Mahmood</p>
            <p className="text-sm text-muted">Reg. No. 1819361</p>
          </div>
        </Stack>
        <Section title="Quick access">
          <Grid cols={2} mdCols={4} gap={3}>
            <HomeGridCard icon={<Icon name="play" size={28} />} label="Live Class" hasNotification />
            <HomeGridCard icon={<Icon name="star" size={28} />} label="Master Class" />
            <HomeGridCard icon={<Icon name="calendar" size={28} />} label="Past Exam" />
            <HomeGridCard icon={<Icon name="download" size={28} />} label="Downloads" />
          </Grid>
        </Section>
        <Section title="Today's class">
          <LiveClassCard title="অধ্যায়-১ পদার্থ" subject="Physics" instructor="ড. আব্দুর রহমান" schedule="Today · 7:00 PM" isLive bangla />
        </Section>
      </Container>
      <FooterMenuFixed />
    </Screen>
  ),
};

export const PerformanceReport: Story = {
  render: () => (
    <Screen>
      <Header title="Performance Report" />
      <Container size="xl" className="py-6 space-y-6">
        <BackLink href="#" label="Back to Reports" />

        <Section title="This Week's Mock Test">
          <SubjectWiseSummary
            subject="Physics"
            score="42"
            outOf="50"
            position={5}
            breakdown={[
              { label: "MCQ", value: 18, total: 20 },
              { label: "Short", value: 14, total: 20 },
              { label: "Numerical", value: 10, total: 10 },
            ]}
          />
        </Section>

        <Section title="Rankings">
          <MeritRankings ranks={[
            { label: "Class", value: 3 },
            { label: "Branch", value: 1 },
            { label: "Overall", value: 8 },
          ]} />
        </Section>

        <Section title="Section breakdown">
          <div className="w-[280px] bg-surface rounded-md border border-line p-3">
            <MCQRow letter="A" letterVariant="success" label="MCQ" score="18/20" />
            <MCQRow letter="B" letterVariant="info" label="Short Answer" score="14/20" />
            <MCQRow letter="C" letterVariant="warning" label="Numerical" score="10/10" />
            <TotalRow total="42/50" />
          </div>
        </Section>

        <Section title="Progress this week">
          <ProgressBar value={5} max={7} label="5/7 days active" />
        </Section>
      </Container>
    </Screen>
  ),
};

export const AnalysisReview: Story = {
  render: () => (
    <Screen>
      <Header title="Analysis Report" />
      <Container size="md" className="py-6 space-y-4">
        <BackLink href="#" label="Back to Exam" />
        <Stack direction="row" gap={3} align="center">
          <ScoreGauge score="42" outOf="50" />
          <PositionLabel position={5} />
          <Badge variant="success">Highest in branch</Badge>
        </Stack>
        <AnalysisBlock
          questionText="What is the chemical symbol for water?"
          options={[
            { id: "a", label: "H2O" },
            { id: "b", label: "O2" },
            { id: "c", label: "CO2" },
            { id: "d", label: "NaCl" },
          ]}
          correctId="a"
          selectedId="b"
        />
        <AnalysisSolutionCard solutionText="Water is composed of two hydrogen atoms and one oxygen atom. The selected option (O2) is the chemical symbol for oxygen gas, not water." />

        <AnalysisBlock
          questionText="Which planet is closest to the Sun?"
          options={[
            { id: "a", label: "Venus" },
            { id: "b", label: "Mercury" },
            { id: "c", label: "Earth" },
            { id: "d", label: "Mars" },
          ]}
          correctId="b"
          selectedId="b"
        />
        <AnalysisSolutionCard solutionText="Mercury is the innermost planet, orbiting closest to the Sun." />
      </Container>
    </Screen>
  ),
};

export const EnrollmentFlow: Story = {
  render: () => {
    const [course, setCourse] = useState({ physics: true, chem: false, bio: false, math: false });
    const total = Object.entries(course).filter(([, v]) => v).length * 2500;
    return (
      <Screen>
        <Header title="Enrollment" />
        <Container size="md" className="py-6 space-y-4">
          <BackLink href="#" label="Back to Programs" />
          <h2 className="text-lg font-semibold text-ink">Pick your subjects</h2>
          <p className="text-md text-muted">HSC 2026 · choose any combination</p>
          <Stack gap={2}>
            <AddCourseCard label="Physics" description="Full chapter coverage" price="৳ 2,500"
              checked={course.physics} onChange={(c) => setCourse({ ...course, physics: c })} />
            <AddCourseCard label="Chemistry" description="Live + recorded" price="৳ 2,500"
              checked={course.chem} onChange={(c) => setCourse({ ...course, chem: c })} />
            <AddCourseCard label="Biology" description="Including practical sessions" price="৳ 2,500"
              checked={course.bio} onChange={(c) => setCourse({ ...course, bio: c })} />
            <AddCourseCard label="Mathematics" description="Calculus + Algebra" price="৳ 2,500"
              checked={course.math} onChange={(c) => setCourse({ ...course, math: c })} />
          </Stack>
          <div className="border-t border-line-subtle pt-4 flex items-center justify-between">
            <span className="text-md font-semibold text-ink">Total</span>
            <span className="text-xl font-bold text-brand">৳ {total.toLocaleString()}</span>
          </div>
          <Button variant="primary" size="lg" className="w-full" disabled={total === 0}>
            Continue to payment
          </Button>
        </Container>
      </Screen>
    );
  },
};

export const LoginFlow: Story = {
  render: () => (
    <Screen>
      <Container size="md" className="py-12 max-w-md mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-ink mb-2">Sign in</h1>
          <p className="text-md text-muted">Welcome back to Udvash-Unmesh</p>
        </div>
        <Stack gap={3}>
          <Input placeholder="Registration Number" />
          <PasswordInput placeholder="Password" />
          <Button variant="primary" size="lg" className="w-full">Sign in</Button>
        </Stack>
        <div className="text-center">
          <a href="#" className="text-sm text-link">Forgot your password?</a>
        </div>
      </Container>
    </Screen>
  ),
};

export const QuickActions: Story = {
  render: () => {
    const [filter, setFilter] = useState<string | null>(null);
    const [seg, setSeg] = useState("live");
    const [rating, setRating] = useState(4);
    return (
      <Screen>
        <Header title="Browse" />
        <Container size="xl" className="py-6 space-y-4">
          <Stack direction="row" gap={2} wrap>
            {["Subject", "Date", "Difficulty"].map((label) => (
              <FilterChip key={label} label={label}
                selected={filter === label}
                onClick={() => setFilter(filter === label ? null : label)} />
            ))}
          </Stack>
          <SegmentedControl size="sm" value={seg} onChange={setSeg} segments={[
            { value: "live", label: "Live" },
            { value: "past", label: "Past" },
            { value: "upcoming", label: "Upcoming" },
          ]} />
          <Section title="Featured masters">
            <Grid cols={1} mdCols={3} gap={4}>
              <MasterClassCard title="Periodic Table Recap" date="10 May" duration="2h" />
              <MasterClassCard title="Linear Algebra Bootcamp" date="11 May" duration="3h" />
              <MasterClassCard title="Bonding Mechanics" date="12 May" duration="2h" />
            </Grid>
          </Section>
          <Section title="Rate this session">
            <StarRating value={rating} onChange={setRating} />
          </Section>
        </Container>
      </Screen>
    );
  },
};

export const ProfileScreen: Story = {
  render: () => (
    <Screen>
      <Header title="Profile" />
      <Container size="md" className="py-6 max-w-md mx-auto space-y-4">
        <ProfileCard
          name="তানজিন রহমান"
          avatarInitials="তা"
          bangla
          rows={[
            { label: "Roll", value: "1234567", icon: <Icon name="user" size={14} /> },
            { label: "Branch", value: "Dhanmondi", icon: <Icon name="map-marker" size={14} /> },
            { label: "Course", value: "HSC 2026" },
            { label: "Joined", value: "Jan 2025", icon: <Icon name="calendar" size={14} /> },
          ]}
          footer={<Button size="sm" variant="ghost" className="w-full">Edit Profile</Button>}
        />
        <Stack gap={2}>
          <Card title="Settings" trailing={<Icon name="chevron-right" size={16} />} />
          <Card title="Notifications" trailing={<Icon name="chevron-right" size={16} />} />
          <Card title="Help & Support" trailing={<Icon name="chevron-right" size={16} />} />
          <Card title="Logout" trailing={<Icon name="chevron-right" size={16} />} />
        </Stack>
      </Container>
    </Screen>
  ),
};

/* helpers */
function Screen({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-surface text-ink">{children}</div>;
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-md font-semibold text-ink mb-3">{title}</h2>
      {children}
    </section>
  );
}
function FooterMenuFixed() {
  const [t, setT] = useState<"home" | "downloads" | "qa" | "community">("home");
  return (
    <div className="fixed bottom-0 inset-x-0 max-w-[1200px] mx-auto">
      <FooterMenu active={t} onTabChange={setT} />
    </div>
  );
}
