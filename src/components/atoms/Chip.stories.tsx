import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { children: "Physics" } };

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip variant="filter">Filter</Chip>
      <Chip variant="tab">Tab</Chip>
      <Chip variant="language">EN</Chip>
    </div>
  ),
};

export const Selectable: Story = {
  render: () => {
    const Demo = () => {
      const [active, setActive] = useState("physics");
      const subjects = ["Math", "Physics", "Chemistry", "Biology"];
      return (
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <Chip
              key={s}
              variant="filter"
              selected={active === s.toLowerCase()}
              onClick={() => setActive(s.toLowerCase())}
            >
              {s}
            </Chip>
          ))}
        </div>
      );
    };
    return <Demo />;
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip iconLeft="Funnel">Filters</Chip>
      <Chip iconRight="ChevronDown" variant="language">
        Bangla
      </Chip>
    </div>
  ),
};
