import React from "react";
import LoginForm from "./LoginForm";
import { type LoginFormProps } from "@features/auth/types/types";
import Logo from "@shared/components/atoms/Logo";

const LoginCard: React.FC<LoginFormProps> = (props) => {
  return (
    <div className="md:min-h-[calc(100%-172px)] w-full pt-[120px] md:pt-[60px] pb-[20px] px-5 xl:w-[900px] md:py-[100px] md:px-[150px] bg-white dark:bg-gray-900 rounded-[20px]">
      <div className="flex flex-col items-center pb-[60px] md:pb-6">
        <Logo className="w-[140px] h-[26px] md:w-[180px] md:h-[33px]" />
        <LoginForm {...props} />
      </div>
    </div>
  );
};

export default LoginCard;
