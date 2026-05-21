import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { StarRating } from "@/components/StarRating";
import { MeritRankings } from "@/components/MeritRankings";
import { AnalysisBlock } from "@/components/AnalysisBlock";
import { ServiceBlockedCard } from "@/components/ServiceBlockedCard";
import { PasswordInput } from "@/components/PasswordInput";
import { HomeGridCard } from "@/components/HomeGridCard";
import { AddCourseCard } from "@/components/AddCourseCard";
import { QnACard } from "@/components/QnACard";
import { MCQRow } from "@/components/MCQRow";
import { PastClassCard } from "@/components/PastClassCard";
import { CommunityRow } from "@/components/CommunityRow";
import { PracticeExamCard } from "@/components/PracticeExamCard";
import { Icon } from "@/components/Icon";

const meta: Meta = {
  title: "Domain/Batch 2",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const StarRatingDemo: Story = {
  render: () => {
    const [val, setVal] = useState(3);
    return (
      <div className="space-y-4">
        <StarRating value={5} />
        <StarRating value={3} />
        <StarRating value={0} />
        <div>
          <p className="text-sm text-muted mb-1">Interactive ({val}/5)</p>
          <StarRating value={val} onChange={setVal} />
        </div>
      </div>
    );
  },
};

export const MeritRankingsDemo: Story = {
  render: () => (
    <MeritRankings
      ranks={[
        { label: "Class", value: 5 },
        { label: "Branch", value: 2 },
        { label: "Overall", value: 12 },
      ]}
    />
  ),
};

export const AnalysisBlockDemo: Story = {
  render: () => (
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
      explanation="Water is composed of two hydrogen atoms and one oxygen atom. The selected option (O2) is the chemical symbol for oxygen gas."
    />
  ),
};

export const ServiceBlocked: Story = {
  render: () => (
    <ServiceBlockedCard
      title="Service Blocked"
      description="Your account has been temporarily restricted. Contact your branch coordinator."
    />
  ),
};

export const PasswordDemo: Story = {
  render: () => (
    <div className="space-y-3 max-w-md">
      <PasswordInput placeholder="Password" />
      <PasswordInput placeholder="Confirm password" />
      <PasswordInput placeholder="Invalid example" invalid defaultValue="weak" />
    </div>
  ),
};

export const HomeGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-2 max-w-md">
      <HomeGridCard icon={<Icon name="home" size={32} />} label="Home" />
      <HomeGridCard icon={<Icon name="user" size={32} />} label="Profile" hasNotification />
      <HomeGridCard icon={<Icon name="download" size={32} />} label="Downloads" />
      <HomeGridCard icon={<Icon name="calendar" size={32} />} label="Schedule" />
    </div>
  ),
};

export const AddCourse: Story = {
  render: () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({
      physics: true,
      chemistry: false,
      bio: false,
    });
    return (
      <div className="space-y-2">
        <AddCourseCard
          label="Physics — HSC 2026"
          description="Full chapter coverage"
          price="৳ 2,500"
          checked={selected.physics}
          onChange={(c) => setSelected({ ...selected, physics: c })}
        />
        <AddCourseCard
          label="Chemistry — HSC 2026"
          description="Live + recorded"
          price="৳ 2,500"
          checked={selected.chemistry}
          onChange={(c) => setSelected({ ...selected, chemistry: c })}
        />
        <AddCourseCard
          label="Biology — HSC 2026"
          checked={selected.bio}
          onChange={(c) => setSelected({ ...selected, bio: c })}
        />
      </div>
    );
  },
};

export const QnA: Story = {
  render: () => (
    <QnACard
      name="তানজিন রহমান"
      bangla
      date="12 May 2026"
      questionText="ক্যালকুলাসের চেইন রুল ব্যবহার করে কীভাবে কম্পোজিট ফাংশনের ডেরিভেটিভ বের করা যায়?"
      rating={4}
    />
  ),
};

export const MCQList: Story = {
  render: () => (
    <div className="w-[280px] bg-surface p-3 rounded-md border border-line-subtle">
      <MCQRow letter="A" letterVariant="success" label="MCQ" score="10/15" />
      <MCQRow letter="B" letterVariant="info" label="Short Answer" score="8/10" />
      <MCQRow letter="C" letterVariant="warning" label="Long Answer" score="5/10" />
      <MCQRow letter="N" letterVariant="error" label="Total" score="23/35" />
    </div>
  ),
};

export const PastClass: Story = {
  render: () => (
    <PastClassCard
      title="অধ্যায়-১ পদার্থ"
      chapter="Physics · Chapter 1"
      bangla
      videoContent={<p>Watch the recorded video.</p>}
      notesContent={<p>Download the chapter notes PDF.</p>}
      quizContent={<p>15 questions · 20 min · Attempts: 0</p>}
      completed
    />
  ),
};

export const Community: Story = {
  render: () => (
    <div className="bg-surface rounded-md border border-line">
      <CommunityRow name="Hasan Ahmed" preview="When is the next live class?" date="2m" />
      <CommunityRow name="তানজিন রহমান" preview="ক্যালকুলাস নিয়ে প্রশ্ন আছে" date="5m" unread bangla />
      <CommunityRow name="Sara K." preview="Thanks for the explanation!" date="1h" onMenu={() => {}} />
    </div>
  ),
};

export const PracticeExam: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <PracticeExamCard
        title="Math Practice Test 5"
        score="45/50"
        questionCount={50}
        date="10 May 2026"
        duration="45 min"
        attempts={2}
        status="highest"
      />
      <PracticeExamCard
        title="Physics Quiz 3"
        score="32/50"
        questionCount={50}
        date="8 May 2026"
        duration="40 min"
        attempts={1}
        status="lowest"
      />
    </div>
  ),
};
