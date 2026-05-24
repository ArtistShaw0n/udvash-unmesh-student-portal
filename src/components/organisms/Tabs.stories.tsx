import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Organisms/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

const items = [
  { id: "live", label: "Live" },
  { id: "past", label: "Past" },
  { id: "upcoming", label: "Upcoming" },
];

export const Underline: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("live");
      return (
        <div className="w-80">
          <Tabs items={items} activeId={v} onChange={setV} variant="underline" />
        </div>
      );
    };
    return <Demo />;
  },
};

export const Pill: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("past");
      return <Tabs items={items} activeId={v} onChange={setV} variant="pill" />;
    };
    return <Demo />;
  },
};
