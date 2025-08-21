import React from "react";
import Text from "@shared/components/atoms/Text";

interface PromoSectionProps {
  title1: string;
  title2: string;
  description: string;
  className?: string;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  title1,
  title2,
  description,
  className,
}) => {
  return (
    <section
      className={
        className ||
        "px-0 lg:px-[215px] pt-[60px] pb-[98px] lg:pb-[120px]  md:pt-[152px] bg-white dark:bg-gray-900"
      }
    >
      <section
        className={
          "px-5 py-[83px] md:px-[60px] md:py-[121px] bg-black dark:bg-white text-white dark:text-balck "
        }
      >
        <Text className="font-semibold text-lg md:font-black md:text-4xl">
          {title1}
        </Text>
        <Text className="font-semibold text-lg md:font-black md:text-4xl mt-1.5 md:mt-5 mb-5 md:mb-[30px]">
          {title2}
        </Text>
        <Text className="font-medium text-sm md:font-semibold md:text-lg">
          {description}
        </Text>
      </section>
    </section>
  );
};

export default PromoSection;
