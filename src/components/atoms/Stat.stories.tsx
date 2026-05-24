import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Stat } from "./Stat";

const meta: Meta<typeof Stat> = {
  title: "Atoms/Stat",
  component: Stat,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: { label: "Marks obtained", value: "85/100" },
};

export const Tones: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <Stat label="Attempts" value={12} tone="neutral" />
      <Stat label="Correct" value={9} tone="success" />
      <Stat label="Wrong" value={3} tone="error" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Stat icon="Clock" label="Duration" value="45 min" tone="brand" />
      <Stat icon="Trophy" label="Rank" value="#12" tone="warning" hint="of 240 students" />
      {/* Trophy + Clock confirmed via lucide-react v1.16 icons map */}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      <Stat label="Score" value="85" size="sm" />
      <Stat label="Score" value="85" size="md" />
      <Stat label="Score" value="85" size="lg" />
    </div>
  ),
};
