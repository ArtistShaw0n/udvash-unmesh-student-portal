import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { FooterMenu, type FooterTab } from "./FooterMenu";

const meta: Meta<typeof FooterMenu> = {
  title: "Organisms/FooterMenu",
  component: FooterMenu,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof FooterMenu>;

const tabs: FooterTab[] = [
  { id: "home", label: "Home", icon: "House" },
  { id: "downloads", label: "Downloads", icon: "Download" },
  { id: "qa", label: "Q&A", icon: "MessageCircleQuestionMark" },
  { id: "community", label: "Community", icon: "Users" },
];

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [active, setActive] = useState("home");
      return (
        <div className="bg-canvas p-4">
          <FooterMenu tabs={tabs} activeId={active} onChange={setActive} />
        </div>
      );
    };
    return <Demo />;
  },
};
