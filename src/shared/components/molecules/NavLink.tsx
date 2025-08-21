import React from 'react';
import LinkText from '../atoms/LinkText';

interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, className }) => {
  return (
    <LinkText
      to={to}
      className={className || 'xl:text-lg xl:font-bold md:text-sm md:font-medium text-center shrink-0'}
    >
      {label}
    </LinkText>
  );
};

export default NavLink;