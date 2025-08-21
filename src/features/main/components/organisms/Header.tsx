import React, { useState } from "react";
import Logo from "@shared/components/atoms/Logo";
import DesktopNav from "@shared/components/organisms/DesktopNav";
import MobileNav from "@shared/components/organisms/MobileNav";
import UserActions from "@shared/components/molecules/UserActions";
import IconButton from "@shared/components/molecules/IconButton";

const navItems = [
  "SS",
  "FW",
  "PANTS",
  "T-Shirt",
  "SALE",
  "COLLECTION",
  "COMMUNITY",
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 bg-black dark:bg-gray-900">
      <div className="w-full px-6 py-6 h-[72px] xl:px-[137px] md:px-14 md:py-[30px] md:h-[84px]">
        <div className="relative h-full flex items-center justify-center md:justify-between gap-[60px]">
          <Logo />
          <DesktopNav
            navItems={navItems}
            className="text-white dark:text-gray-200"
          />
          <UserActions className="hidden lg:flex" />
          <div className="xs:absolute xs:right-0 flex lg:hidden items-center gap-[11px] w-[88px] shrink-0 self-end z-10">
            <IconButton iconType="cart" ariaLabel="Cart" />
            <IconButton iconType="search" ariaLabel="Search" />
            <IconButton
              iconType="menu"
              onClick={() => setOpen(true)}
              ariaLabel="Open menu"
            />
          </div>
        </div>
      </div>
      <MobileNav
        navItems={navItems}
        open={open}
        onClose={() => setOpen(false)}
        className="dark:bg-gray-900  dark:text-gray-200"
      />
    </header>
  );
};

export default Header;
