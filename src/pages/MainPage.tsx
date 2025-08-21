import React from "react";
import Header from "@features/main/components/organisms/Header";
import BannerSection from "@features/main/components/organisms/BannerSection";
import CategorySection from "@features/main/components/organisms/CategorySection";
import ProductSection from "@features/main/components/organisms/ProductSection";
import PromoSection from "@features/main/components/organisms/PromoSection";
import Footer from "@features/main/components/organisms/Footer";
import ErrorBoundary from "@shared/components/organisms/ErrorBoundary";

const categories = [
  {
    id: "0",
    description: (
      <>
        계절에 구애받지 않고
        <br />
        편하게 입을 수 있는 아노락
      </>
    ),
    name: "카테고리명",
    image: "assets/images/image1.png",
    backgroundColor: "bg-[linear-gradient(270deg,#F4F4F6_0%,#F0F1F3_100%)]",
  },
  {
    id: "1",
    description: (
      <>
        가볍고 뛰어난 보온성을
        <br />
        자랑하는 방한조끼
      </>
    ),
    name: "카테고리명",
    image: "assets/images/image2.png",
    backgroundColor: "bg-[linear-gradient(270deg,#EEEEEE_0%,#EAEAEA_100%)]",
  },
  {
    id: "2",
    description: (
      <>
        포근한 따뜻함이
        <br />
        필요할 때 플리스
      </>
    ),
    name: "카테고리명",
    image: "assets/images/image3.png",
    backgroundColor: "bg-[linear-gradient(270deg,#F4F4F6_0%,#EAEAEA_100%)]",
  },
];

const hero = {
  id: "3",
  description: "",
  name: (
    <>
      쌀쌀한 바람이 부는
      <br />
      가을에 입기 좋은 자켓
    </>
  ),
  image: "assets/images/image4.png",
  backgroundColor: "bg-[linear-gradient(270deg,#ECECEC_0%,#E8E8E8_100%)]",
};

const products = [
  {
    id: "0",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니...",
    brandName: "{브랜드명} 그룹코드-색상명",
    colors: [
      "text-gray-900",
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-indigo-700",
    ],
    imageUrl: "assets/images/image5.png",
    warehouseName: "창고명 6자",
    price: "000,000원",
  },
  {
    id: "1",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니...",
    brandName: "{브랜드명} 그룹코드-색상명",
    colors: [
      "text-gray-900",
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-indigo-700",
    ],
    imageUrl: "assets/images/image5.png",
    warehouseName: "창고명 6자",
    price: "000,000원",
  },
  {
    id: "2",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니...",
    brandName: "{브랜드명} 그룹코드-색상명",
    colors: [
      "text-gray-900",
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-indigo-700",
    ],
    imageUrl: "assets/images/image5.png",
    warehouseName: "창고명 6자",
    price: "000,000원",
  },
  {
    id: "3",
    name: "상품명이 노출 됩니다.상품명이 노출 됩니...",
    brandName: "{브랜드명} 그룹코드-색상명",
    colors: [
      "text-gray-900",
      "text-red-500",
      "text-yellow-500",
      "text-green-500",
      "text-indigo-700",
    ],
    imageUrl: "assets/images/image5.png",
    warehouseName: "창고명 6자",
    price: "000,000원",
  },
];

const companyInformation = {
  general: [
    { id: "0", info: "대표이사 : 장창진" },
    { id: "1", info: "사업자등록번호 : 201-86-15245" },
    { id: "2", info: "서울특별시 중구 다산로 139 (랜더스빌딩) 6층" },
    { id: "3", info: "통신판매업신고 : 중구 제0575호" },
    { id: "4", info: "개인정보보호책임자 : 최주연" },
  ],
  timing: [
    { id: "0", info: "평일 : 09:00 ~ 18:00" },
    { id: "1", info: "기관 : 기업은행" },
    { id: "2", info: "계좌번호 : 213-111127-04-035" },
    { id: "3", info: "예금주 : (주)랜더스" },
  ],
};

const Main: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="h-full w-full bg-white dark:bg-gray-900">
        <Header />
        <BannerSection text="Performance-Ready Apparel for Work & Beyond" />
        <CategorySection categories={categories} hero={hero} />
        <ProductSection
          title="상품진열이 타이틀이 들어갑니다."
          subtitle="부타이틀이 필요할 경우 텍스트가 들어갑니다."
          products={products}
        />
        <ProductSection
          title="상품진열이 타이틀이 들어갑니다."
          subtitle="부타이틀이 필요할 경우 텍스트가 들어갑니다."
          products={products}
          className="lg:pt-[120px]"
        />
        <PromoSection
          title1="B2B 전문 의류 쇼핑몰!"
          title2="15년 이상의 노하우로 믿고 거래 하세요"
          description="수많은 기업이 선택한 신뢰받는 쇼핑 소식, 지금 만나보세요"
        />
        <Footer companyInformation={companyInformation} />
      </div>
    </ErrorBoundary>
  );
};

export default Main;
