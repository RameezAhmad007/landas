import React from "react";
import Icon from "@shared/components/atoms/Icon";

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={className || "flex items-center gap-2.5 text-[#666] dark:text-gray-400"}>
      <Icon type="instagram" />
      <Icon type="facebook" />
      <Icon type="youtube" />
    </div>
  );
};

export default SocialLinks;
