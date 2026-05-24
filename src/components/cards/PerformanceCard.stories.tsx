import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PerformanceCard } from "./PerformanceCard";

const meta: Meta<typeof PerformanceCard> = {
  title: "Cards/PerformanceCard",
  component: PerformanceCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof PerformanceCard>;

const stats = [
  { label: "Correct", value: 38, tone: "success" as const },
  { label: "Wrong", value: 7, tone: "error" as const },
  { label: "Skipped", value: 5, tone: "neutral" as const },
];

export const High: Story = {
  args: { title: "Mock Test #4 — Physics", score: 85, maxScore: 100, rank: { value: 12, total: 240 }, stats, trend: "up" },
};
export const Mid: Story = {
  args: { title: "Mock Test #3 — Chemistry", score: 62, maxScore: 100, stats, trend: "flat" },
};
export const Low: Story = {
  args: { title: "Mock Test #2 — Math", score: 31, maxScore: 100, stats, trend: "down" },
};
export const Loading: Story = { args: { loading: true, title: "", score: 0 } };
