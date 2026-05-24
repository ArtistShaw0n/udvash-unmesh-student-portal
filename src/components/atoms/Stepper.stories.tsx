import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Atoms/Stepper",
  component: Stepper,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = { args: { defaultValue: 1 } };

export const Controlled: Story = {
  render: () => {
    const Demo = () => {
      const [n, setN] = useState(2);
      return (
        <div className="flex items-center gap-4">
          <Stepper value={n} onChange={setN} min={0} max={10} />
          <span className="text-sm text-muted">Current: {n}</span>
        </div>
      );
    };
    return <Demo />;
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Stepper defaultValue={1} size="sm" />
      <Stepper defaultValue={1} size="md" />
      <Stepper defaultValue={1} size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { defaultValue: 3, disabled: true },
};
