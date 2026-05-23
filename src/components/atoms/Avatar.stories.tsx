import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: { name: "Shawon Ahmed" } };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="SA" size="xs" />
      <Avatar name="SA" size="sm" />
      <Avatar name="SA" size="md" />
      <Avatar name="SA" size="lg" />
      <Avatar name="SA" size="xl" />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="Shawon Ahmed" shape="circle" />
      <Avatar name="Shawon Ahmed" shape="rounded" />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/100",
    alt: "Avatar",
    size: "lg",
  },
};
