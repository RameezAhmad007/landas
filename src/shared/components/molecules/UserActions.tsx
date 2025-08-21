import React from "react";
import IconButton from "./IconButton";
import LinkText from "../atoms/LinkText";
import classNameMerge from "@shared/utils/classNameMerge";

interface UserActionsProps {
  className?: string;
}

const UserActions: React.FC<UserActionsProps> = ({ className }) => {
  return (
    <div
      className={classNameMerge(
        "flex items-center gap-5 w-[196px] shrink-0 text-white",
        className
      )}
    >
      <IconButton iconType="cart" />
      <IconButton iconType="user" />
      <IconButton iconType="search" />
      <LinkText to="/logout" className="text-sm">
        로그아웃
      </LinkText>
    </div>
  );
};

export default UserActions;
