import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { label: "Option A", name: "demo", value: "a" } };

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Radio name="size" value="sm" size="sm" label="Small" />
      <Radio name="size" value="md" size="md" label="Medium (default)" defaultChecked />
      <Radio name="size" value="lg" size="lg" label="Large" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-2 text-sm font-medium">Choose a subject</legend>
      <Radio name="subject" value="math" label="Mathematics" defaultChecked />
      <Radio name="subject" value="physics" label="Physics" />
      <Radio name="subject" value="chemistry" label="Chemistry" />
      <Radio name="subject" value="biology" label="Biology" disabled />
    </fieldset>
  ),
};
