export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface NavLinkProps {
  to: string;
  label: string;
  className?: string;
}

export interface IconButtonProps {
  iconType: "cart" | "user" | "search" | "menu" | "close";
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}
