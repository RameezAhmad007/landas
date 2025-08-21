import React from "react";
import Checkbox from "@shared/components/atoms/Checkbox";
import Text from "@shared/components/atoms/Text";

interface CheckboxGroupProps {
  checked: boolean;
  onChange: () => void;
  label: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <div className="flex items-center gap-[8px]">
      <Checkbox checked={checked} onChange={onChange} />
      <Text className="font-normal text-xs xs:font-medium xs:text-[15px] tracking-[-0.02em] text-[#1A1A1A] dark:text-white">
        {label}
      </Text>
    </div>
  );
};

export default CheckboxGroup;
