import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { VideoControls } from "./VideoControls";

const meta: Meta<typeof VideoControls> = {
  title: "Molecules/VideoControls",
  component: VideoControls,
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof VideoControls>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [playing, setPlaying] = useState(false);
      const [time, setTime] = useState(38 * 60 + 12);
      const vol = 0.7;
      const [muted, setMuted] = useState(false);
      const [rate, setRate] = useState(1);
      const [full, setFull] = useState(false);
      return (
        <div className="rounded-md bg-gray-900 p-3">
          <VideoControls
            playing={playing}
            currentTime={time}
            duration={4680}
            volume={vol}
            muted={muted}
            playbackRate={rate}
            fullscreen={full}
            onPlayPause={() => setPlaying((p) => !p)}
            onSeek={setTime}
            onToggleMute={() => setMuted((m) => !m)}
            onPlaybackRateChange={setRate}
            onToggleFullscreen={() => setFull((f) => !f)}
          />
        </div>
      );
    };
    return <Demo />;
  },
};
