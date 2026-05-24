import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AddRollCard } from "./AddRollCard";

const meta: Meta<typeof AddRollCard> = {
  title: "Cards/AddRollCard",
  component: AddRollCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof AddRollCard>;

export const Collapsed: Story = { args: { onSubmit: (v) => alert(`Submitted: ${v}`) } };
export const Expanded: Story = { args: { defaultValue: "1819361", onSubmit: () => {} } };
export const WithError: Story = {
  args: { defaultValue: "0000000", errorMessage: "Registration number not found.", onSubmit: () => {} },
};
