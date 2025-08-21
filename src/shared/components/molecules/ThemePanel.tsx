import React from "react";
import ThemeButton from "./ThemeButton";
import useThemeStore from "../../stores/useThemeStore";
import BasicButton from "../atoms/buttons/BasicButton";

interface ThemePanelProps {
  onClose: () => void;
}

const ThemePanel: React.FC<ThemePanelProps> = ({ onClose }) => {
  const { mode, resolved, setMode } = useThemeStore();

  return (
    <div className="p-3">
      <div className="px-2 py-2">
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
          Appearance
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
          Choose Light, Dark, or follow System ({resolved})
        </p>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2 px-2 pb-2">
        <ThemeButton
          iconType="sun"
          label="Light"
          active={mode === "light"}
          onClick={() => setMode("light")}
        />
        <ThemeButton
          iconType="moon"
          label="Dark"
          active={mode === "dark"}
          onClick={() => setMode("dark")}
        />
        <ThemeButton
          iconType="laptop"
          label="System"
          active={mode === "system"}
          onClick={() => setMode("system")}
        />
      </div>
      <div className="mt-1 flex items-center justify-between px-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Current: {mode === "system" ? `System → ${resolved}` : mode}
        </span>
        <BasicButton
          onClick={onClose}
          className="text-xs px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Close
        </BasicButton>
      </div>
    </div>
  );
};

export default ThemePanel;
