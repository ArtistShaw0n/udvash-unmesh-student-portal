import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CourseContentCard } from "./CourseContentCard";

const meta: Meta<typeof CourseContentCard> = {
  title: "Cards/CourseContentCard",
  component: CourseContentCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof CourseContentCard>;

export const Available: Story = {
  args: { index: 1, title: "Motion in one dimension", meta: "12 lessons · 4h 20m" },
};
export const InProgress: Story = {
  args: { index: 2, title: "Vectors and scalars", meta: "8 lessons", status: "in-progress", progress: 45 },
};
export const Completed: Story = {
  args: { index: 3, title: "Newton's first law", meta: "6 lessons", status: "completed" },
};
export const Locked: Story = {
  args: { index: 4, title: "Work, energy & power", meta: "Unlock after Chapter 3", status: "locked" },
};
export const Loading: Story = { args: { loading: true, title: "" } };

export const List: Story = {
  render: () => (
    <div className="flex w-[336px] flex-col gap-2">
      <CourseContentCard index={1} title="Motion in one dimension" meta="12 lessons" status="completed" />
      <CourseContentCard index={2} title="Vectors and scalars" meta="8 lessons · 45% complete" status="in-progress" progress={45} />
      <CourseContentCard index={3} title="Newton's first law" meta="6 lessons" status="available" />
      <CourseContentCard index={4} title="Work, energy & power" meta="Locked — finish Ch. 3" status="locked" />
    </div>
  ),
};
