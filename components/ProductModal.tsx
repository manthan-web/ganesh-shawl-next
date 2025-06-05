"use client"
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Product } from '../data/types';
import Image from 'next/image';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      >
        <div className="md:w-1/2 h-72 md:h-auto relative">
          <Image 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
        <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-4">
            <span className="inline-block bg-amber-100 text-amber-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">
            {product.description}
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
            <ul className="space-y-1 text-gray-600">
              <li>• Material: {product.details.material}</li>
              <li>• Dimensions: {product.details.dimensions}</li>
              {product.details.care && <li>• Care: {product.details.care}</li>}
            </ul>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-amber-600">₹{product.price.toLocaleString()}</span>
            <a
              href="tel:+919872531240"
              className="inline-flex items-center px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors duration-300"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;