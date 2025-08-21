import React from "react";
import classNameMerge from "../../utils/classNameMerge";

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <p
      className={classNameMerge(
        "font-normal text-[14px] text-[#999999]",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
