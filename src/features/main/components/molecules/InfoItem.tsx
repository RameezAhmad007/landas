import React from "react";
import Text from "@shared/components/atoms/Text";

interface InfoItemProps {
  info: string;
  className?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ info, className }) => {
  return (
    <Text className={className || "font-normal text-lg text-[#B2B2B2] dark:text-gray-400"}>
      {info}
    </Text>
  );
};

export default InfoItem;
