import React from "react";
import classNameMerge from "@shared/utils/classNameMerge";

interface InputProps {
  id: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  minLength?: number;
  maxLength?: number;
  hasError?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  value,
  onChange,
  className,
  minLength,
  maxLength,
  hasError,
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      minLength={minLength}
      maxLength={maxLength}
      className={classNameMerge(
        "focus:ring-0 focus:ring-offset-0 border border-transparent focus:border-transparent dark:focus:border-transparent",
        "w-full focus:outline-2 focus:outline-amber-400 dark:focus:outline-amber-400 caret-amber-400 px-5 py-[10px] h-[42px] md:h-[56px] bg-[#FAFAFA] dark:bg-gray-800 rounded-[10px] font-normal text-base xs:text-lg text-[#282828] dark:text-gray-200 placeholder:text-[#999999] dark:placeholder:text-gray-400",
        hasError &&
          "text-red-500 dark:text-red-500 outline-2 outline-red-500 bg-red-100 dark:bg-red-100",
        className
      )}
    />
  );
};

export default React.memo(Input);
