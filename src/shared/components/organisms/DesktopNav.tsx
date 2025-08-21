import React from "react";
import NavLink from "../molecules/NavLink";
import classNameMerge from "@shared/utils/classNameMerge";

interface DesktopNavProps {
  navItems: string[];
  className?: string;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ navItems, className }) => {
  return (
    <nav
      className={classNameMerge(
        "hidden lg:flex items-center justify-around grow xl:gap-8 lg:gap-2.5",
        className
      )}
    >
      {navItems.map((item) => (
        <NavLink key={item} to="/" label={item} />
      ))}
    </nav>
  );
};

export default DesktopNav;
