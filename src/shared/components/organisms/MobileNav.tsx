import React from "react";
import Logo from "../atoms/Logo";
import NavLink from "../molecules/NavLink";
import IconButton from "../molecules/IconButton";
import LinkText from "../atoms/LinkText";
import classNameMerge from "@shared/utils/classNameMerge";

interface MobileNavProps {
  navItems: string[];
  open: boolean;
  onClose: () => void;
  className?: string
}

const MobileNav: React.FC<MobileNavProps> = ({ navItems, open, onClose, className }) => {
  return (
    <aside
      className={classNameMerge(
        "lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85%] h-screen bg-black border-l border-white/10 p-6 transition text-white translate-x-full invisible",
        open && "translate-x-0 visible", className
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <Logo className="w-[108px] h-[20px]" />
        <IconButton
          iconType="close"
          className="p-2 hover:bg-white/10 rounded"
          onClick={onClose}
          ariaLabel="Close menu"
          iconClassName="w-6 h-6"
        />
      </div>
      <nav className="space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item}
            to="/"
            label={item}
            className="block text-base font-semibold tracking-wide"
          />
        ))}
      </nav>
      <div className="mt-8 border-t border-white/10 pt-5 space-y-3">
        <IconButton iconType="user" className="flex items-center w-full">
          <span>Account</span>
        </IconButton>
        <LinkText to="/logout" className="block pt-2 text-sm opacity-90">
          로그아웃
        </LinkText>
      </div>
    </aside>
  );
};

export default MobileNav;
