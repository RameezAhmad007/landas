import React from "react";
import classNameMerge from "@shared/utils/classNameMerge";
import Label from "@shared/components/atoms/Label";
import Input from "@shared/components/atoms/inputs/Input";
import Text from "@shared/components/atoms/Text";
import BasicButton from "@shared/components/atoms/buttons/BasicButton";
import Icon from "@shared/components/atoms/Icon";

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  show: boolean;
  onToggleShow: () => void;
  error?: string;
  showMessage?: boolean;
  minLength?: number;
  maxLength?: number;
  className?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  id,
  label,
  value,
  onChange,
  show,
  onToggleShow,
  error,
  showMessage,
  minLength,
  maxLength,
  className,
}) => {
  return (
    <div
      className={classNameMerge(
        "flex flex-col gap-2.5 md:gap-5 md:items-center md:flex-row",
        className
      )}
    >
      <Label htmlFor={id}>{label}</Label>
      <div className="self-stretch grow">
        <div
          className={classNameMerge(
            "flex items-center gap-2 w-full focus-within:outline-2 focus-within:outline-amber-400 px-5 py-[10px] h-[42px] md:h-[56px] bg-[#FAFAFA] dark:bg-gray-800  rounded-[10px]",
            error && "outline-2 outline-red-500 bg-red-100 dark:bg-red-100"
          )}
        >
          <Input
            id={id}
            type={show ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            value={value}
            onChange={onChange}
            minLength={minLength}
            maxLength={maxLength}
            hasError={!!error}
            className="grow outline-none p-0"
          />
          <BasicButton
            className="flex h-8 w-8 items-center justify-center focus:outline-none"
            onClick={onToggleShow}
            title={show ? "Hide password" : "Show password"}
          >
            <Icon
              type={show ? "hide" : "show"}
              className="text-[#999999] dark:text-gray-400"
            />
          </BasicButton>
        </div>

        {(error || showMessage) && (
          <Text
            className={classNameMerge(
              "mt-2 text-[#999999]",
              error && "text-red-500"
            )}
          >
            {error || "8~16자 미만, 대소문자+숫자+특수문자 조합"}
          </Text>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
