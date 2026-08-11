import React from "react";
import { Product } from "../data/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-line transition-shadow duration-300"
    >
      <div className="aspect-[3/4] relative overflow-hidden bg-bg-soft">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-fg leading-snug">{product.name}</h3>
        <p className="mt-1 text-sm text-fg-muted line-clamp-2">{product.blurb}</p>
      </div>
    </Link>
  );
};

export default ProductCard;