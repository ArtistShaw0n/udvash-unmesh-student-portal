import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FilterPanel } from "./FilterPanel";

const meta: Meta<typeof FilterPanel> = {
  title: "Molecules/FilterPanel",
  component: FilterPanel,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof FilterPanel>;

const groups = [
  {
    id: "subject",
    label: "Subject",
    options: [
      { value: "physics", label: "Physics" },
      { value: "chemistry", label: "Chemistry" },
      { value: "math", label: "Math" },
      { value: "biology", label: "Biology" },
    ],
  },
  {
    id: "type",
    label: "Type",
    options: [
      { value: "live", label: "Live class" },
      { value: "past", label: "Past class" },
      { value: "exam", label: "Exam" },
    ],
  },
];

export const Default: Story = { args: { groups } };

export const WithPreselected: Story = {
  args: {
    groups,
    defaultValue: { subject: ["physics", "math"], type: ["live"] },
  },
};
