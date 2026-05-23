import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: "Accept terms" } };

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Checkbox size="sm" label="Small" />
      <Checkbox size="md" label="Medium (default)" />
      <Checkbox size="lg" label="Large" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};
