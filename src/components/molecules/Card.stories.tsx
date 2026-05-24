import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import { Button } from "../atoms/Button";
import { Tag } from "../atoms/Tag";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      <Card variant="elevated" className="w-44">
        <p className="text-sm font-medium">Elevated</p>
        <p className="text-xs text-muted">Figma default</p>
      </Card>
      <Card variant="outlined" className="w-44">
        <p className="text-sm font-medium">Outlined</p>
        <p className="text-xs text-muted">Bordered</p>
      </Card>
      <Card variant="filled" className="w-44">
        <p className="text-sm font-medium">Filled</p>
        <p className="text-xs text-muted">Subtle bg</p>
      </Card>
    </div>
  ),
};

export const Composed: Story = {
  render: () => (
    <Card className="w-[328px]">
      <CardHeader>
        <p className="text-sm font-semibold">Mock Exam #4 — Physics</p>
        <Tag variant="success">Live</Tag>
      </CardHeader>
      <CardBody>
        <p className="text-xs text-muted">Starts in 12 minutes · 60 min · 50 marks</p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="ghost">Skip</Button>
        <Button size="sm">Join</Button>
      </CardFooter>
    </Card>
  ),
};
