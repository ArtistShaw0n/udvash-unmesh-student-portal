import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PracticeExamCard } from "./PracticeExamCard";

const meta: Meta<typeof PracticeExamCard> = {
  title: "Cards/PracticeExamCard",
  component: PracticeExamCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PracticeExamCard>;

const base = {
  subject: "Biology",
  title: "Practice MCQ — Cell Division",
  totalQuestions: 40,
  durationMin: 30,
  passingMarks: 25,
};

export const Fresh: Story = { args: { ...base } };
export const InProgress: Story = {
  args: { ...base, attemptedQuestions: 15 },
};
export const Completed: Story = {
  args: { ...base, attempts: 2, bestScore: 32, onReview: () => {} },
};
export const Loading: Story = { args: { ...base, loading: true } };
