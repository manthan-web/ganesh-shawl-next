export interface ProductDetails {
  material: string;
  dimensions: string;
  care?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  image: string;
  details: ProductDetails;
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
}