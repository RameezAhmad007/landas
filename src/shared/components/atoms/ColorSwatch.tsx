import React from "react";
import classNameMerge from "@shared/utils/classNameMerge";

interface ColorSwatchProps {
  color: string;
  className?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, className }) => {
  return (
    <div
      className={classNameMerge(
        "size-2.5 md:size-5 rounded-full",
        color,
        className
      )}
    />
  );
};

export default ColorSwatch;
