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
    <section className="px-5 pt-5 lg:px-[215px] lg:pt-[120px] bg-white dark:bg-gray-900">
      <Text className="text-black dark:text-white font-medium text-[22px] w-full">
        스타일과 실용성을 모두 담은 시즌 셀렉션
      </Text>
      <div className="grid grid-cols-3 gap-8 items-stretch xl:grid-cols-12 mt-5 xl:mt-0">
        {/* <div className="h-full lg:pt-36 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 xl:gap-5 col-span-12 xl:col-span-8"> */}
        <div className="h-full xl:pt-36 grid grid-cols-4 col-span-12 xl:col-span-8 overflow-x-auto xl:overflow-x-hidden overscroll-x-contain scroll-smooth scrollbar-none">
          <div className="grid grid-flow-col auto-cols-[minmax(16rem,1fr)] gap-2.5 xl:gap-5 xl:grid-cols-3 xl:col-span-8 xl:grid-flow-row snap-x snap-mandatory xl:snap-none">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                description={category.description}
                name={category.name}
                image={category.image}
                backgroundColor={category.backgroundColor}
                className="rounded-br-[84px] overflow-hidden xl:rounded-br-0 xl:overflow-visible"
              />
            ))}
            <CategoryCard
              className="xl:hidden rounded-br-[84px] overflow-hidden"
              imageClassName="object-cover h-full"
              id={hero.id}
              description={hero.description}
              name={hero.name}
              image={hero.image}
              backgroundColor={hero.backgroundColor}
              contentClassName="justify-center pb-2.5"
            />
          </div>
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
