import React from "react";
import Text from "@shared/components/atoms/Text";

interface LinkGroupProps {
  links: string[];
}

const LinkGroup: React.FC<LinkGroupProps> = ({ links }) => {
  return (
    <Text className="font-normal text-xs xs:font-medium xs:text-[15px] text-black dark:text-white">
      {links.join(" | ")}
    </Text>
  );
};

export default LinkGroup;
