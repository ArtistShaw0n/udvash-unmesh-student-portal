import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SolveSheetCard } from "./SolveSheetCard";

const meta: Meta<typeof SolveSheetCard> = {
  title: "Cards/SolveSheetCard",
  component: SolveSheetCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof SolveSheetCard>;

export const Default: Story = {
  args: {
    subject: "Physics",
    title: "HSC Mock Exam #3 — full solve sheet with explanations",
    totalQuestions: 75,
    pages: 24,
    fileSizeKB: 1820,
    uploadedAt: "May 22, 2026",
  },
};
export const Loading: Story = {
  args: { subject: "", title: "", totalQuestions: 0, uploadedAt: "", loading: true },
};
