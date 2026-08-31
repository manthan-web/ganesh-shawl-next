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

export interface BlogTable {
  headers: string[];
  rows: string[][];
}

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: BlogTable;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  intro: string[];
  sections: BlogSection[];
  faqs: BlogFaq[];
}
