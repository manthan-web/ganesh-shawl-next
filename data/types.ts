export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  blurb: string;
  intro: string;
  description: string;
  hindi: string;
  keywords: string[];
  category: string;
  image: string;
  itemCode: string;
  moq: string;
  packaging: string;
  productionCapacity: string;
  deliveryTime: string;
  specs: ProductSpec[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  seoDescription: string;
}
