import { Product, Category } from './types';

export const BRAND = {
  name: 'Ganesh Shawl Emporium',
  phone1: '+91 9872531240',
  phone2: '+91 9803457668',
  whatsapp: '919872531240',
  instagram: 'https://www.instagram.com/ganeshshawlemp.in/',
  address: 'Street No.8, Mochpura Bazar, Chaura Bazar, Old Ludhiana, Ludhiana, Punjab 141008',
  baseUrl: 'https://ganeshshawlemporium.com',
};

export const categories: Category[] = [
  {
    slug: 'knitted-stoles',
    name: 'Knitted Stoles',
    tagline: 'Hand-knitted, worn-year-round warmth.',
    description:
      'Knitted stole manufacturer and wholesale supplier in Ludhiana. Our stoles are handcrafted in soft wool blends — cozy, breathable, and built to live through winters for years.',
  },
  {
    slug: 'shawls',
    name: 'Shawls',
    tagline: 'Traditional shawls woven the old way.',
    description:
      'Classic pure-wool shawls from the Ludhiana looms. We wholesale to retailers across India — photographs of the current collection coming soon.',
  },
  {
    slug: 'stoles',
    name: 'Stoles',
    tagline: 'Lightweight stoles for every season.',
    description:
      'Everyday stoles in pure cotton, silk, and blended weaves. Worthy of the wholesale order. Photographs of the current collection coming soon.',
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Knitted Stole',
    description:
      'A clean, everyday knitted stole in a classic rib finish. Soft against the skin, comfortably warm, and neutral enough to go with everything you own.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-1.jpg',
    details: {
      material: 'Wool Soft Knit',
      dimensions: '1.8m x 0.4m',
      care: 'Hand wash cold or dry clean',
    },
  },
  {
    id: 2,
    name: 'Herringbone Knit Stole',
    description:
      'A fine herringbone weave in rich neutral tones. Structured enough for a suit, soft enough for an all-day layer.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-2.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.4m',
      care: 'Dry clean only',
    },
  },
  {
    id: 3,
    name: 'Self-Design Knit Stole',
    description:
      'A subtle self-pattern knit that reads as quiet texture from afar and comes alive up close. A wardrobe staple for winters.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-3.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.4m',
      care: 'Hand wash cold',
    },
  },
  {
    id: 4,
    name: 'Textured Block Knit Stole',
    description:
      'A chunky-block knit with a plush hand feel. Soft, warm, and substantial without the weight of a heavy fabric.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-4.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.7m x 0.4m',
      care: 'Dry clean recommended',
    },
  },
  {
    id: 5,
    name: 'Ribbed Knit Stole',
    description:
      'A fine ribbed knit that drapes cleanly on the shoulder. Pairs as effortlessly with a blazer as it does at home on a cold evening.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-5.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.45m',
      care: 'Hand wash cold',
    },
  },
  {
    id: 6,
    name: 'Pebble Knit Stole',
    description:
      'Knitted with a subtle pebble texture that catches light beautifully. A quiet statement piece for winters.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-6.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.4m',
      care: 'Dry clean only',
    },
  },
  {
    id: 7,
    name: 'Waffle Stitch Knit Stole',
    description:
      'A waffle-stitch knit offering extra warmth and air pockets. Practical, warm, and effortlessly stylish.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-7.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.4m',
      care: 'Hand wash cold',
    },
  },
  {
    id: 8,
    name: 'Shell Pattern Knit Stole',
    description:
      'A shell-pattern knit with a gentle allover repeat. Soft, detailed, and unmistakably hand-finished.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-8.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.7m x 0.4m',
      care: 'Dry clean recommended',
    },
  },
  {
    id: 9,
    name: 'Textured Knit Stole',
    description:
      'A deep-textured knit in a warm winter tone. Throws a lot of character into the simplest outfits.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-9.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.4m',
      care: 'Hand wash cold or dry clean',
    },
  },
  {
    id: 10,
    name: 'Mosaic Stitch Knit Stole',
    description:
      'A mosaic-stitch knit built of small repeating blocks. Warm, structured, and a favorite for winter mornings.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-10.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.4m',
      care: 'Dry clean only',
    },
  },
  {
    id: 11,
    name: 'Cozy Knit Stole',
    description:
      'The kind of knit you reach for first. A classic knit with a soft, warm drape, comfortable enough to live in all season.',
    category: 'knitted-stoles',
    image: '/images/knitted/knit-11.jpg',
    details: {
      material: 'Wool Blend',
      dimensions: '1.8m x 0.45m',
      care: 'Dry clean recommended',
    },
  },
];

export const heroImage = '/images/hero/feature-1.jpg';
export const heroImageAlt = '/images/hero/feature-2.jpg';

export function getProduct(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}