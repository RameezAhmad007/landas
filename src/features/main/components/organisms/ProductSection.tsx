import React from "react";
import ProductCard from "../molecules/ProductCard";
import SectionTitle from "../molecules/SectionTitle";
import { type Product } from "@features/main/types/types";
import classNameMerge from "@shared/utils/classNameMerge";

interface ProductSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  products: Product[];
  className?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  className,
}) => {
  return (
    <section
      className={classNameMerge(
        "px-5 pt-[60px] lg:px-[215px] lg:pt-[152px] bg-white dark:bg-gray-900",
        className
      )}
    >
      <SectionTitle title={title} subtitle={subtitle} />
      <div className="mt-[60px] grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            brandName={product.brandName}
            colors={product.colors}
            imageUrl={product.imageUrl}
            warehouseName={product.warehouseName}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
