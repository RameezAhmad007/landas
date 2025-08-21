import React from "react";
import classNameMerge from "../../utils/classNameMerge";
import BasicButton from "./buttons/BasicButton";
import Icon from "./Icon";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <BasicButton
      className={classNameMerge(
        "flex items-center justify-center h-5 w-5 rounded-[2px] border border-[#ccc] text-white",
        checked && "bg-amber-400 border-amber-400",
        className
      )}
      onClick={onChange}
    >
      {checked && <Icon type="check" />}
    </BasicButton>
  );
};

export default Checkbox;
