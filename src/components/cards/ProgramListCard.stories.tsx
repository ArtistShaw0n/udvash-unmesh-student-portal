import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProgramListCard } from "./ProgramListCard";

const meta: Meta<typeof ProgramListCard> = {
  title: "Cards/ProgramListCard",
  component: ProgramListCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof ProgramListCard>;

const base = {
  programName: "HSC 2026 Final Preparation",
  level: "HSC 2026",
  branch: "Udvash",
  durationMonths: 6,
  subjects: ["Physics", "Chemistry", "Math", "Biology", "Bangla", "English"],
  priceTaka: 14500,
  startsAt: "Jun 1",
};

export const Available: Story = { args: { ...base, onDetails: () => {} } };
export const Enrolled: Story = { args: { ...base, enrolled: true } };
export const Loading: Story = { args: { ...base, loading: true } };
