import React from "react";
import BasicButton from "../atoms/buttons/BasicButton";
import Icon from "../atoms/Icon";
import classNameMerge from "@shared/utils/classNameMerge";
import type { IconButtonProps } from "@shared/types/types";

const IconButton: React.FC<IconButtonProps> = ({
  iconType,
  onClick,
  className,
  iconClassName,
  ariaLabel,
  children,
}) => {
  return (
    <BasicButton
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      childenClassName={children ? "flex items-center gap-3" : undefined}
    >
      <Icon
        type={iconType}
        className={classNameMerge("text-white dark:text-gray-200'", iconClassName || "w-5 h-5")}
      />
      {children}
    </BasicButton>
  );
};

export default IconButton;
