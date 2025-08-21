export interface Category {
  id: string;
  description: React.ReactNode;
  name: React.ReactNode;
  image: string;
  backgroundColor: string;
}

export interface Hero {
  id: string;
  description?: React.ReactNode;
  name: React.ReactNode;
  image: string;
  backgroundColor: string;
}

export interface Product {
  id: string;
  name: string;
  brandName: string;
  colors: string[];
  imageUrl: string;
  warehouseName: string;
  price: string;
}

export interface CompanyInfo {
  id: string;
  info: string;
}

export interface CompanyInformation {
  general: CompanyInfo[];
  timing: CompanyInfo[];
}
