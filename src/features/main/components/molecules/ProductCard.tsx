import React from "react";
import classNameMerge from "@shared/utils/classNameMerge";
import Image from "@shared/components/atoms/Image";
import Text from "@shared/components/atoms/Text";
import ColorSwatch from "@shared/components/atoms/ColorSwatch";
import { type Product } from "@features/main/types/types";

interface ProductCardProps extends Product {
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brandName,
  colors,
  imageUrl,
  warehouseName,
  price,
  className,
}) => {
  return (
    <div
      className={classNameMerge(
        "bg-white dark:bg-gray-800 flex flex-col",
        className
      )}
    >
      <div className="relative min-h-[197px] md:min-h-[420px]">
        <Image
          src={imageUrl}
          alt={`product-${id}`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-2.5 md:p-5">
        <div className="flex flex-wrap gap-[11px]">
          {colors.map((color) => (
            <ColorSwatch key={`${id}_${color}`} color={color} />
          ))}
        </div>
        <Text className="text-black dark:text-white font-medium md:font-semibold text-sm md:text-lg mt-2.5 md:mt-4">
          {name}
        </Text>
        <Text className="text-[#666666] dark:text-gray-400 font-normal text-base my-1.5 md:my-3.5">
          {brandName}
        </Text>
        <div className="flex items-center gap-1.5 md:gap-3.5">
          <span className="shrink-0 py-0.5 md:py-2 px-1.5 border border-amber-200 bg-amber-50 dark:border-amber-600 dark:bg-amber-900/50 rounded-[5px] md:rounded-xl text-[#594504] dark:text-amber-300 font-medium text-sm">
            {warehouseName}
          </span>
          <Text className="text-black dark:text-white font-semibold text-lg">
            {price}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
