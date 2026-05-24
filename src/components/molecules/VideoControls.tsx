"use client";

import { useState } from "react";
import { Icon } from "../atoms/Icon";
import { Slider } from "../atoms/Slider";
import { cn } from "@/lib/cn";

export type VideoControlsProps = {
  /** Whether the video is currently playing. */
  playing?: boolean;
  /** Current playback time in seconds. */
  currentTime?: number;
  /** Total duration in seconds. */
  duration: number;
  /** Volume 0..1. */
  volume?: number;
  /** Whether the video is muted. */
  muted?: boolean;
  /** Whether the player is fullscreen. */
  fullscreen?: boolean;
  /** Optional playback rate (0.5x – 2x). */
  playbackRate?: number;
  /** Whether the controls are disabled (eg, video not loaded). */
  disabled?: boolean;
  onPlayPause?: () => void;
  onSeek?: (seconds: number) => void;
  onToggleMute?: () => void;
  onToggleFullscreen?: () => void;
  onPlaybackRateChange?: (rate: number) => void;
  className?: string;
};

const RATES = [0.5, 0.75, 1, 1.25, 1.5, 2];

/**
 * VideoControls — Figma Video/Controls (336×30) + tabs. Custom video
 * player chrome: play/pause + seek bar + time + volume + speed +
 * fullscreen. Wire the callbacks to your <video> ref in the parent.
 */
export function VideoControls({
  playing = false,
  currentTime = 0,
  duration,
  volume = 1,
  muted = false,
  fullscreen = false,
  playbackRate = 1,
  disabled = false,
  onPlayPause,
  onSeek,
  onToggleMute,
  onToggleFullscreen,
  onPlaybackRateChange,
  className,
}: VideoControlsProps) {
  const [showRateMenu, setShowRateMenu] = useState(false);

  return (
    <div
      className={cn(
        "flex w-full max-w-[336px] items-center gap-2 rounded-md bg-gray-900/80 px-3 py-2 text-white",
        disabled && "opacity-60",
        className,
      )}
    >
      {/* Play / Pause */}
      <button
        type="button"
        onClick={onPlayPause}
        disabled={disabled}
        aria-label={playing ? "Pause" : "Play"}
        className="shrink-0 rounded-full p-1 transition-colors hover:bg-white/10 disabled:cursor-not-allowed"
      >
        <Icon name={playing ? "Pause" : "Play"} size="sm" />
      </button>

      {/* Time + Seek */}
      <span className="shrink-0 text-xs tabular-nums">{formatTime(currentTime)}</span>
      <div className="flex-1">
        <Slider
          min={0}
          max={duration}
          value={Math.min(currentTime, duration)}
          step={1}
          disabled={disabled}
          onChange={(v) => onSeek?.(v)}
        />
      </div>
      <span className="shrink-0 text-xs tabular-nums">{formatTime(duration)}</span>

      {/* Volume */}
      <button
        type="button"
        onClick={onToggleMute}
        disabled={disabled}
        aria-label={muted || volume === 0 ? "Unmute" : "Mute"}
        className="shrink-0 rounded-full p-1 transition-colors hover:bg-white/10 disabled:cursor-not-allowed"
      >
        <Icon name={muted || volume === 0 ? "VolumeX" : volume < 0.5 ? "Volume1" : "Volume2"} size="sm" />
      </button>

      {/* Speed */}
      {onPlaybackRateChange && (
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowRateMenu((s) => !s)}
            disabled={disabled}
            aria-label="Playback speed"
            className="shrink-0 rounded-sm px-1.5 py-0.5 text-xs font-semibold tabular-nums transition-colors hover:bg-white/10 disabled:cursor-not-allowed"
          >
            {playbackRate}x
          </button>
          {showRateMenu && (
            <div className="absolute bottom-full right-0 mb-1 flex flex-col rounded-sm bg-gray-900 p-1 shadow-md">
              {RATES.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => {
                    onPlaybackRateChange(r);
                    setShowRateMenu(false);
                  }}
                  className={cn(
                    "rounded-xs px-2 py-1 text-left text-xs tabular-nums transition-colors hover:bg-white/10",
                    r === playbackRate && "font-semibold text-brand-accent",
                  )}
                >
                  {r}x
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Fullscreen */}
      {onToggleFullscreen && (
        <button
          type="button"
          onClick={onToggleFullscreen}
          disabled={disabled}
          aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
          className="shrink-0 rounded-full p-1 transition-colors hover:bg-white/10 disabled:cursor-not-allowed"
        >
          <Icon name={fullscreen ? "Minimize2" : "Maximize2"} size="sm" />
        </button>
      )}
    </div>
  );
}

function formatTime(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
