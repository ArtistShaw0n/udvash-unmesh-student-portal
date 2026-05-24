import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HomeGridCard } from "./HomeGridCard";

const meta: Meta<typeof HomeGridCard> = {
  title: "Cards/HomeGridCard",
  component: HomeGridCard,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof HomeGridCard>;

export const Default: Story = {
  args: { icon: "GraduationCap", title: "Live Class", meta: "1 Live, 2 Upcoming" },
};
export const WithCount: Story = {
  args: { icon: "FileText", title: "Notes", meta: "12 chapters", notification: 3 },
};
export const PulsingDot: Story = {
  args: { icon: "Newspaper", title: "Announcements", notification: true, tone: "warning" },
};
export const Grid: Story = {
  render: () => (
    <div className="grid w-[376px] grid-cols-2 gap-2">
      <HomeGridCard icon="GraduationCap" title="Live Class" meta="1 Live, 2 Upcoming" tone="brand" />
      <HomeGridCard icon="PencilLine" title="Live Exam" meta="3 Upcoming" tone="warning" />
      <HomeGridCard icon="Video" title="Past Class" meta="124 saved" tone="info" />
      <HomeGridCard icon="Newspaper" title="Announcements" notification tone="error" />
    </div>
  ),
};
