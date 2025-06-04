import React from 'react';
import { Product } from '../data/types';
import Image from 'next/image';


interface ProductCardProps {
  product: Product;
  onImageClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onImageClick }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div 
        className="relative h-auto overflow-hidden cursor-pointer"
        onClick={onImageClick}
      >
        <Image 
          src={product.image} 
          alt={product.name} 
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {product.name}
        </h3>
        <div className="flex justify-between items-center">
          {/* <span className="text-amber-600 font-medium">₹{product.price.toLocaleString()}</span> */}
          <a 
            href={`tel:+919872531240`}
            className="px-3 py-2 bg-amber-600 text-white text-md rounded hover:bg-amber-700 transition-colors"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;