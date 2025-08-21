import React from "react";
import Logo from "@shared/components/atoms/Logo";
import Text from "@shared/components/atoms/Text";
import InfoItem from "../molecules/InfoItem";
import SocialLinks from "../molecules/SocialLinks";
import LinkText from "@shared/components/atoms/LinkText";
import { type CompanyInformation } from "@features/main/types/types";

interface FooterProps {
  companyInformation: CompanyInformation;
}

const Footer: React.FC<FooterProps> = ({ companyInformation }) => {
  return (
    <footer className="flex flex-col py-[60px] px-5 lg:py-[60px] lg:px-[244px] bg-[#1A1A1A] dark:bg-gray-900 dark:border-t dark:borde-t-white">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 grow">
        <div className="grow">
          <Logo className="w-[108px] h-[20px] md:w-[180px] md:h-[33px]" />
          <div className="flex flex-col gap-3.5 mt-10">
            {companyInformation.general.map((company) => (
              <InfoItem key={company.id} info={company.info} />
            ))}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2.5">
          <div>
            <Text className="text-white dark:text-gray-200 font-semibold text-base">
              대표 번호 및 AS 문의
            </Text>
            <Text className="text-white dark:text-gray-200 font-semibold text-2xl mt-2.5">
              1661-6244
            </Text>
            <div className="flex flex-col gap-2.5 mt-5">
              {companyInformation.timing.map((time) => (
                <InfoItem
                  key={time.id}
                  info={time.info}
                  className="text-[#ccc] dark:text-gray-400 font-normal text-lg"
                />
              ))}
            </div>
          </div>
          <div className="flex items-center flex-col-reverse lg:items-start lg:flex-col gap-5 text-[#666] dark:text-gray-400">
            <div className="flex items-center gap-5">
              <LinkText to="/privacy" className="font-medium text-sm">
                개인정보처리방침
              </LinkText>
              <LinkText to="/terms" className="font-medium text-sm">
                이용약관
              </LinkText>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <Text className="text-[#666] dark:text-gray-400 font-medium text-sm mt-3.5">
        Copyright © WWW.ldsb2bmall.com All right reserved
      </Text>
    </footer>
  );
};

export default Footer;
