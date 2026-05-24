import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { SegmentedControl } from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl> = {
  title: "Organisms/SegmentedControl",
  component: SegmentedControl,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("live");
      return (
        <SegmentedControl
          options={[
            { value: "live", label: "Live" },
            { value: "past", label: "Past" },
            { value: "upcoming", label: "Upcoming" },
          ]}
          value={v}
          onChange={setV}
        />
      );
    };
    return <Demo />;
  },
};

export const FullWidth: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("a");
      return (
        <div className="w-80">
          <SegmentedControl
            fullWidth
            options={[
              { value: "a", label: "All" },
              { value: "b", label: "Mine" },
              { value: "c", label: "Saved" },
            ]}
            value={v}
            onChange={setV}
          />
        </div>
      );
    };
    return <Demo />;
  },
};
