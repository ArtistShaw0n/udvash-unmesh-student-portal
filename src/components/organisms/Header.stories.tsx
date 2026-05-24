import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";
import { Avatar } from "../atoms/Avatar";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => (
    <div className="bg-canvas p-4">
      <Header
        logo={<span className="text-base font-semibold">উদ্ভাস–উন্মেষ</span>}
        actions={[{ icon: "Bell", label: "Notifications", badge: 3 }]}
        avatar={<Avatar name="Asif Mahmood" size="sm" />}
      />
    </div>
  ),
};
