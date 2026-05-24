import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = { args: { width: 240 } };

export const Variants: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-3">
      <Skeleton variant="circle" width={48} height={48} />
      <Skeleton variant="rect" width={280} height={120} />
      <Skeleton variant="text" lines={3} />
    </div>
  ),
};

export const CardPlaceholder: Story = {
  render: () => (
    <div className="w-[336px] rounded-md border border-line-subtle p-4">
      <div className="mb-3 flex items-center gap-3">
        <Skeleton variant="circle" width={40} height={40} />
        <div className="flex-1">
          <Skeleton width={140} height={12} />
          <Skeleton width={80} height={10} className="mt-1" />
        </div>
      </div>
      <Skeleton variant="rect" height={120} className="mb-3" />
      <Skeleton lines={2} />
    </div>
  ),
};
