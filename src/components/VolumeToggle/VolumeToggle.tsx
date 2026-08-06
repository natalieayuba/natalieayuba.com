import { useState } from "react";
import VolumeSvg from "./volume.svg";

export const VolumeToggle = ({ className }: { className?: string }) => {
  const [muted, setMuted] = useState(true);

  return (
    <button
      type="button"
      className={className}
      onClick={() => setMuted(!muted)}
      aria-label="Volume"
      role="switch"
      title={muted ? "Unmute" : "Mute"}
      aria-checked={muted}
    >
      <VolumeSvg />
    </button>
  );
};
