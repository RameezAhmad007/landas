import React from "react";
import classNameMerge from "../../utils/classNameMerge";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNameMerge(
        "w-[120px] font-[Pretendard] text-[16px] tracking-[-0.02em] text-[#282828] dark:text-gray-200",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
