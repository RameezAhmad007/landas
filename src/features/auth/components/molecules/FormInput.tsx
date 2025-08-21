import React from "react";
import Label from "@shared/components/atoms/Label";
import Input from "@shared/components/atoms/inputs/Input";
import Text from "@shared/components/atoms/Text";

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2.5 md:gap-5 md:items-center md:flex-row">
      <Label htmlFor={id}>{label}</Label>
      <div className="self-stretch grow">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          hasError={!!error}
        />
        {error && <Text className="mt-2 text-red-500">{error}</Text>}
      </div>
    </div>
  );
};

export default FormInput;
