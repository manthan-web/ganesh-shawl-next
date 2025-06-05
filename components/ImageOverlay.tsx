"use client"
import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ImageOverlayProps {
  imageSrc: string;
  onClose: () => void;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageSrc, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={handleClickOutside}
    >
      <div className="relative max-w-4xl max-h-full">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close overlay"
        >
          <X size={24} />
        </button>
        <Image 
          src={imageSrc} 
          alt="Product" 
          className="max-w-full max-h-[90vh] object-contain"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ImageOverlay;