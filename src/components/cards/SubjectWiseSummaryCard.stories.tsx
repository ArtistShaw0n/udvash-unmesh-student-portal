import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SubjectWiseSummaryCard } from "./SubjectWiseSummaryCard";

const meta: Meta<typeof SubjectWiseSummaryCard> = {
  title: "Cards/SubjectWiseSummaryCard",
  component: SubjectWiseSummaryCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof SubjectWiseSummaryCard>;

export const Default: Story = {
  args: {
    subjects: [
      { subject: "Physics", attempted: 50, total: 50, correct: 44 },
      { subject: "Chemistry", attempted: 50, total: 50, correct: 33 },
      { subject: "Math", attempted: 50, total: 50, correct: 27 },
      { subject: "Biology", attempted: 50, total: 50, correct: 18 },
    ],
  },
};
export const Loading: Story = { args: { subjects: [], loading: true } };
