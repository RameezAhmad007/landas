import React, { useMemo } from "react";
import BasicButton from "@shared/components/atoms/buttons/BasicButton";
import FormInput from "../molecules/FormInput";
import PasswordInput from "../molecules/PasswordInput";
import CheckboxGroup from "../molecules/CheckboxGroup";
import LinkGroup from "../molecules/LinkGroup";
import { type LoginFormProps } from "@features/auth/types/types";

const LoginForm: React.FC<LoginFormProps> = ({
  id,
  setId,
  password,
  setPassword,
  show,
  setShow,
  isChecked,
  setIsChecked,
  passwordRegex,
  onLogin,
  onJoin,
}) => {
  const disabled = useMemo(() => {
    return !(id.value.trim() && password.value.trim() && !password.showMessage);
  }, [id, password]);

  return (
    <form className="mt-[60px] sm:mt-[120px] w-full ">
      <FormInput
        id="id"
        label="아이디"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={id.value}
        onChange={(e) =>
          setId((prev) => ({ ...prev, showError: "", value: e.target.value }))
        }
        error={id.showError}
      />
      <PasswordInput
        id="password"
        label="비밀번호"
        value={password.value}
        onChange={(e) => {
          const value = e.target.value;
          setPassword((prev) => ({
            ...prev,
            value,
            showError: "",
            showMessage: !passwordRegex.test(value),
          }));
        }}
        show={show}
        onToggleShow={() => setShow((prev) => !prev)}
        error={password.showError}
        showMessage={password.showMessage}
        minLength={8}
        maxLength={16}
        className="mt-7 sm:mt-5 mb-12 sm:mb-[30px]"
      />
      <div className="flex items-center justify-between">
        <CheckboxGroup
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          label="아이디 저장"
        />
        <LinkGroup links={["아이디찾기", "비밀번호 찾기"]} />
      </div>
      <BasicButton
        isDisabled={disabled}
        className="w-full flex items-center justify-center p-5 h-[52px] sm:h-[72px] bg-amber-400 disabled:bg-[#E5E5E5] rounded-[10px] font-normal text-base  md:font-medium md:text-xl disabled:text-[#B2B2B2] text-black mt-[60px] mb-2.5 sm:mb-5"
        onClick={onLogin}
      >
        로그인
      </BasicButton>
      <BasicButton
        className="w-full flex items-center justify-center p-5 h-[52px] sm:h-[72px] bg-white rounded-[10px] font-normal text-base md:font-medium md:text-xl text-[#666666] border border-[#D9D9D9]"
        onClick={onJoin}
      >
        회원가입
      </BasicButton>
    </form>
  );
};

export default LoginForm;
