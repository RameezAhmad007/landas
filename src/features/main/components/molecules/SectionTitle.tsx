import React from "react";
import Text from "@shared/components/atoms/Text";

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div
      className={
        className ||
        "flex flex-col items-center justify-center gap-5 text-black dark:text-white"
      }
    >
      <Text className="font-semibold text-[22px] text-center">{title}</Text>
      {subtitle && (
        <Text className="font-normal text-lg text-center">{subtitle}</Text>
      )}
    </div>
  );
};

export default SectionTitle;
