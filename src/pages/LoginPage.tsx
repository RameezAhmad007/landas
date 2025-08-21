import React, { useState, useMemo } from "react";
import Text from "@shared/components/atoms/Text";
import LoginCard from "@features/auth/components/organisms/LoginCard";

const user = { id: "1234", password: "Test1234" };
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,16}$/;

const LoginPage: React.FC = () => {
  const [id, setId] = useState({ value: "", showError: "" });
  const [password, setPassword] = useState({
    value: "",
    showError: "",
    showMessage: false,
  });
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const disabled = useMemo(() => {
    return !(
      id.value.trim() &&
      password.value.trim() &&
      isChecked &&
      !password.showMessage
    );
  }, [id, password, isChecked]);

  const loginHandler = () => {
    if (
      id.value.trim() !== user.id ||
      password.value.trim() !== user.password
    ) {
      setPassword((prev) => ({
        ...prev,
        showError: "아이디 또는 비밀번호가 일치하지 않습니다.",
      }));
      return alert(
        "로그인 실패" + ` 아이디: ${user.id} and 비밀번호: ${user.password}`
      );
    }
    if (!disabled) {
      setId({ value: "", showError: "" });
      setPassword({ value: "", showError: "", showMessage: false });
      setShow(false);
      setIsChecked(false);
      return alert("로그인 성공");
    }
  };

  const joinMemberHandler = () => {
    if (!id.value.trim()) {
      return setId((prev) => ({
        ...prev,
        showError: "아이디를 입력하지 않았습니다.",
      }));
    }
    if (!password.value.trim()) {
      return setPassword((prev) => ({
        ...prev,
        showError: "비밀번호를 입력하지 않았습니다.",
      }));
    }
    if (!PASSWORD_REGEX.test(password.value)) {
      return setPassword((prev) => ({
        ...prev,
        showError: "8~16자 미만, 대소문자+숫자+특수문자 조합",
      }));
    }
    if (
      id.value.trim() !== user.id ||
      password.value.trim() !== user.password
    ) {
      setPassword((prev) => ({
        ...prev,
        showError: "아이디 또는 비밀번호가 일치하지 않습니다.",
      }));
      return alert(
        "가입 실패" + ` 아이디: ${user.id} and 비밀번호: ${user.password}`
      );
    }
    setId({ value: "", showError: "" });
    setPassword({ value: "", showError: "", showMessage: false });
    setShow(false);
    setIsChecked(false);
    return alert("가입 성공");
  };

  return (
    <div className="min-h-screen w-full md:flex md:flex-col md:items-center md:justify-center gap-[30px] px-5 py-14 bg-[#F8F6EE] dark:bg-gray-900 darl:md-bg-none md:bg-[radial-gradient(22.27%_29.38%_at_31.69%_30.98%,rgba(255,196,11,0.1)_0%,rgba(255,196,11,0)_100%),radial-gradient(30.89%_38.32%_at_65.1%_72.41%,rgba(255,196,11,0.05)_0%,rgba(255,196,11,0)_100%),linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)] bg-[radial-gradient(39.18%_19.06%_at_28.53%_20.39%,rgba(255,196,11,0.1)_0%,rgba(255,196,11,0)_100%),radial-gradient(51.67%_28.68%_at_54.5%_52.27%,rgba(255,196,11,0.05)_0%,rgba(255,196,11,0)_100%),linear-gradient(180deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]">
      <LoginCard
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        show={show}
        setShow={setShow}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        passwordRegex={PASSWORD_REGEX}
        user={user}
        onLogin={loginHandler}
        onJoin={joinMemberHandler}
      />

      <Text className="font-normal text-[14px] text-[#808080] text-center mt-[30px] md:mt-0">
        Copyright © WWW.ldsb2bmall.com All right reserved
      </Text>
    </div>
  );
};

export default LoginPage;
