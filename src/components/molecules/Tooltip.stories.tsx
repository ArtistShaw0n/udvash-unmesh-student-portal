import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../atoms/Button";

const meta: Meta<typeof Tooltip> = {
  title: "Molecules/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Save your answer" placement="top">
      <Button size="sm">Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-12 p-12">
      {(["top", "bottom", "left", "right"] as const).map((p) => (
        <Tooltip key={p} content={`Tooltip on ${p}`} placement={p}>
          <Button size="sm" variant="secondary">{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
