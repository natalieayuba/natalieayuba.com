import { useTheme } from "next-themes";
import LightSwitchSvg from "./light-switch.svg";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const oppositeTheme = theme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(oppositeTheme)}
      aria-label="Theme"
      title={`Switch to ${oppositeTheme} mode`}
      role="switch"
      aria-checked={theme === "dark"}
    >
      <LightSwitchSvg />
    </button>
  );
};
