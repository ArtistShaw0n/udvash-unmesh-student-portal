import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { label: "Dark mode" } };

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium (default)" defaultChecked />
      <Switch size="lg" label="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Switch label="Off" />
      <Switch label="On" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};
