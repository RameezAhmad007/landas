import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className="shrink-0 select-none outline-none">
      <img
        src="assets/icons/logo.svg"
        alt="LANDAS Logo"
        className={className || "w-[108px] h-[20px] md:w-[130px] md:h-[24px]"}
      />
    </Link>
  );
};

export default Logo;
