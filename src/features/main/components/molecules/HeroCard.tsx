import React from "react";
import classNameMerge from "@shared/utils/classNameMerge";
import Image from "@shared/components/atoms/Image";
import Text from "@shared/components/atoms/Text";
import { type Hero } from "@features/main/types/types";

interface HeroCardProps extends Hero {
  className?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  id,
  name,
  image,
  backgroundColor,
  className,
}) => {
  return (
    <div
      className={classNameMerge(
        "h-full flex flex-col",
        backgroundColor,
        "dark:bg-gray-800",
        className
      )}
    >
      <div className="relative w-full flex-1 min-h-[260px]">
        <Image
          src={image}
          alt={id}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 bottom-0 flex items-end justify-center h-[217px] w-full bg-[linear-gradient(180deg,rgba(236,236,236,0)_8.86%,rgba(236,236,236,0.5)_31.64%,#ECECEC_72.66%)] dark:bg-[linear-gradient(180deg,rgba(55,65,81,0)_8.86%,rgba(55,65,81,0.5)_31.64%,#374151_72.66%)]">
          <Text className="font-medium text-sm text-black dark:text-white text-center pb-12">
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
