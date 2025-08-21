import React from "react";
import { Link } from "react-router-dom";
import classNameMerge from "@shared/utils/classNameMerge";

interface LinkTextProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const LinkText: React.FC<LinkTextProps> = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={classNameMerge(
        "text-white hover:opacity-80 transition-opacity",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default LinkText;
