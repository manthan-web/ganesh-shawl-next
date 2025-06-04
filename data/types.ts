export interface ProductDetails {
  material: string;
  dimensions: string;
  care?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  details: ProductDetails;
}