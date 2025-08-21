import React from "react";
import classNameMerge from "@shared/utils/classNameMerge";
import Image from "@shared/components/atoms/Image";
import Text from "@shared/components/atoms/Text";
import { type Category } from "@features/main/types/types";

interface CategoryCardProps extends Category {
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  description,
  name,
  image,
  backgroundColor,
  className,
  imageClassName,
  contentClassName,
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
      {description && (
        <Text className="hidden xl:block font-bold text-base text-black p-4">
          {description}
        </Text>
      )}
      <div className="relative w-full flex-1">
        <Image
          src={image}
          alt={id}
          className={classNameMerge(imageClassName)}
        />
        <div
          className={classNameMerge(
            "absolute left-0 bottom-0 flex items-end h-[217px] w-full bg-[linear-gradient(180deg,rgba(236,236,236,0)_8.86%,rgba(236,236,236,0.5)_31.64%,#ECECEC_72.66%)] dark:bg-[linear-gradient(180deg,rgba(55,65,81,0)_8.86%,rgba(55,65,81,0.5)_31.64%,#374151_72.66%)]",
            contentClassName
          )}
        >
          <Text className="font-medium text-sm text-black dark:text-white p-4">
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
