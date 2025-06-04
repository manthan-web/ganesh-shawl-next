"use client"
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ImageOverlay from './ImageOverlay';
import { products } from '../data/product';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shawl', name: 'Shawls' },
    { id: 'stole', name: 'Stoles' },
    { id: 'knitted-stole', name: 'Knitted Stole' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-10 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Collection</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive range of handcrafted products, made with the finest materials and exquisite craftsmanship.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-md transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onImageClick={() => setSelectedImage(product.image)}
            />
          ))}
        </div>

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products available in this category yet.</p>
          </div>
        )}

        {/* Image Overlay */}
        {selectedImage && (
          <ImageOverlay 
            imageSrc={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default ProductsSection;