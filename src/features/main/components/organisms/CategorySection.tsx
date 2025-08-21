import React from "react";
import CategoryCard from "../molecules/CategoryCard";
import HeroCard from "../molecules/HeroCard";
import { type Category, type Hero } from "../../types/types";
import Text from "@shared/components/atoms/Text";

interface CategorySectionProps {
  categories: Category[];
  hero: Hero;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  hero,
}) => {
  return (
    <section className="px-5 pt-5 pb-[98px] lg:px-[215px] lg:py-[120px] bg-white dark:bg-gray-900">
      <Text className="text-black dark:text-white font-medium text-[22px] w-full">
        스타일과 실용성을 모두 담은 시즌 셀렉션
      </Text>
      <div className="grid grid-cols-3 gap-8 items-stretch xl:grid-cols-12 mt-5 xl:mt-0">
        <div className="h-full lg:pt-36 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 xl:gap-5 col-span-12 xl:col-span-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              description={category.description}
              name={category.name}
              image={category.image}
              backgroundColor={category.backgroundColor}
            />
          ))}
          <CategoryCard
            className="xl:hidden"
            id={hero.id}
            description={hero.description}
            name={hero.name}
            image={hero.image}
            backgroundColor={hero.backgroundColor}
          />
        </div>
        <div className="hidden col-span-4 h-full xl:block">
          <HeroCard
            id={hero.id}
            name={hero.name}
            image={hero.image}
            backgroundColor={hero.backgroundColor}
            className="rounded-br-[84px] overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
