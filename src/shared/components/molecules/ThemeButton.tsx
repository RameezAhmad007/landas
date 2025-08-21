import React from "react";
import Icon from "../atoms/Icon";
import classNameMerge from "../../utils/classNameMerge";

interface ThemeButtonProps {
  iconType: "sun" | "moon" | "laptop";
  label: string;
  active: boolean;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  iconType,
  label,
  active,
  onClick,
}) => {
  const itemClasses = classNameMerge(
    "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition",
    active
      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700/60",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900/20 dark:focus-visible:ring-white/20"
  );

  return (
    <button className={itemClasses} onClick={onClick}>
      <Icon type={iconType} />
      <span>{label}</span>
    </button>
  );
};

export default ThemeButton;
