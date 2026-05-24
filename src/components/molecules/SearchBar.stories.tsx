import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <SearchBar placeholder="Search subjects" />
    </div>
  ),
};

export const Clearable: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState("Physics");
      return (
        <div className="w-80">
          <SearchBar
            value={v}
            onChange={(e) => setV(e.target.value)}
            onClear={() => setV("")}
          />
        </div>
      );
    };
    return <Demo />;
  },
};
