import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: "New", variant: "brand" } };

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="error">3</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
    </div>
  ),
};

export const Dot: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge dot variant="error" />
      <Badge dot variant="success" />
      <Badge dot variant="warning" />
      <Badge dot variant="brand" size="lg" />
    </div>
  ),
};
