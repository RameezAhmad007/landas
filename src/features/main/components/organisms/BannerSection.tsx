import React from "react";
import Text from "@shared/components/atoms/Text";

interface BannerSectionProps {
  text: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({ text }) => {
  return (
    <div className="relative h-dvh w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_58.38%,#000_85.25%),linear-gradient(180deg,#000_6.86%,rgba(0,0,0,0)_54.32%),url('assets/images/banner.png')] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0)_58.38%,#1F2937_85.25%),linear-gradient(180deg,#1F2937_6.86%,rgba(0,0,0,0)_54.32%),url('assets/images/banner.png')] lg:bg-[linear-gradient(180deg,rgba(0,0,0,0)_76.24%,#000_94.69%),linear-gradient(180deg,#000_5.14%,rgba(0,0,0,0)_54.32%),url('assets/images/banner.png')] dark:lg:bg-[linear-gradient(180deg,rgba(0,0,0,0)_76.24%,#1F2937_94.69%),linear-gradient(180deg,#1F2937_5.14%,rgba(0,0,0,0)_54.32%),url('assets/images/banner.png')] bg-cover bg-center">
      <Text className="absolute bottom-[17%] right-5 lg:top-1/2 lg:right-[100px] text-white dark:text-gray-200 text-lg lg:text-[40px] font-normal font-zen w-[53%] lg:w-[42%]">
        {text}
      </Text>
    </div>
  );
};

export default BannerSection;
