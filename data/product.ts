import { Product } from './types';


export const heroImage = 'https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/fg-hello.jpg';


const url = "http://192.168.29.93:9000/shawls-images/IMG_0086.png"
console.log(url)

export const products: Product[] = [
  {
    id: 1,
    name: "Acrylic Shawl",
    description:
      "Handwoven pure pashmina shawl from Kashmir with intricate embroidery. This luxurious piece is incredibly soft and warm, perfect for special occasions.",
    price: 12500,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-1.jpg",
    details: {
      material: "100% Pashmina Wool",
      dimensions: "2m x 1m",
      care: "Dry clean only",
    },
  },
  {
    id: 2,
    name: "Stole",
    description:
      "Elegant silk blend stole with a modern geometric pattern. Lightweight and versatile, perfect for both casual and formal occasions.",
    price: 3500,
    category: "stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/stole-1.jpg",
    details: {
      material: "70% Silk, 30% Cotton",
      dimensions: "1.8m x 0.5m",
    },
  },
  // {
  //   id: 3,
  //   name: "Knitted Stole",
  //   description:
  //     "Warm and soft merino wool muffler in a classic herringbone pattern. Perfect for cold winter days while maintaining a sophisticated look.",
  //   price: 2200,
  //   category: "knitted-stole",
  //   image:
  //     "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-one.png",
  //   details: {
  //     material: "100% Merino Wool",
  //     dimensions: "1.5m x 0.3m",
  //     care: "Hand wash with cold water",
  //   },
  // },
  {
    id: 4,
    name: "Acrylic Shawl",
    description:
      "Luxurious cashmere shawl with hand-embroidered floral motifs. An heirloom piece that combines traditional craftsmanship with timeless elegance.",
    price: 18000,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shalw-2.jpg",
    details: {
      material: "Pure Cashmere",
      dimensions: "2.2m x 1m",
      care: "Professional dry clean only",
    },
  },
  {
    id: 5,
    name: "Stole",
    description:
      "Vibrant printed silk stole featuring traditional Indian motifs. The perfect accessory to add a pop of color to any outfit.",
    price: 2800,
    category: "stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/stole-2.jpg",
    details: {
      material: "100% Pure Silk",
      dimensions: "1.8m x 0.5m",
    },
  },
  {
    id: 6,
    name: "Knitted Stole",
    description:
      "Classic check pattern woolen muffler in earthy tones. A timeless accessory that adds sophistication to your winter wardrobe.",
    price: 1800,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-two.jpeg",
    details: {
      material: "90% Wool, 10% Nylon",
      dimensions: "1.4m x 0.3m",
      care: "Hand wash cold",
    },
  },
  {
    id: 7,
    name: "Raging Shawl",
    description:
      "Traditional Jamawar shawl with intricate paisley patterns. This piece showcases the rich heritage of Indian textile craftsmanship.",
    price: 8500,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-3.jpg",
    details: {
      material: "Wool with Silk Embroidery",
      dimensions: "2m x 1m",
      care: "Dry clean recommended",
    },
  },
  {
    id: 8,
    name: "Stole",
    description:
      "Lightweight pashmina stole with a beautiful ombre effect. Transitions from one shade to another for a contemporary look.",
    price: 4200,
    category: "stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/stole-3.jpg",
    details: {
      material: "70% Pashmina, 30% Silk",
      dimensions: "1.9m x 0.7m",
    },
  },
  {
    id: 9,
    name: "Stole",
    description:
      "Soft handloom cotton stole with subtle stripes. Breathable and lightweight, ideal for summer and layering.",
    price: 1600,
    category: "stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/stole-4.jpg",
    details: {
      material: "100% Handloom Cotton",
      dimensions: "2m x 0.6m",
      care: "Gentle machine wash",
    },
  },
  {
    id: 10,
    name: "Stole",
    description:
      "Luxurious modal silk stole with digital floral prints. Smooth texture and elegant drape for festive occasions.",
    price: 2400,
    category: "stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/stole-5.jpg",
    details: {
      material: "Modal Silk",
      dimensions: "1.9m x 0.5m",
      care: "Dry clean only",
    },
  },
  {
    id: 11,
    name: "Acrylic Shawl",
    description:
      "Pastel-colored linen stole with a soft, natural finish. Perfect for spring and summer outfits.",
    price: 2100,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-4.jpg",
    details: {
      material: "100% Linen",
      dimensions: "2m x 0.55m",
      care: "Hand wash cold",
    },
  },
  {
    id: 12,
    name: "Acrylic Shawl",
    description:
      "Rich Banarasi brocade stole with gold zari work. Adds a regal touch to ethnic and fusion wear.",
    price: 3200,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-5.jpg",
    details: {
      material: "Silk Brocade",
      dimensions: "2m x 0.6m",
      care: "Dry clean only",
    },
  },
  {
    id: 13,
    name: "Kalamkari Shawl",
    description:
      "Double-sided wool stole with contrasting colors. Warm, soft, and versatile for winter styling.",
    price: 2700,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-6.jpg",
    details: {
      material: "100% Wool",
      dimensions: "1.8m x 0.5m",
      care: "Hand wash cold or dry clean",
    },
  },
  {
    id: 14,
    name: "Poly Shawl",
    description:
      "Traditional Kani weave shawl with vibrant floral patterns. A collector's piece representing centuries-old Kashmiri artistry.",
    price: 15500,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-7.jpg",
    details: {
      material: "100% Pashmina Wool",
      dimensions: "2m x 1m",
      care: "Dry clean only",
    },
  },
  {
    id: 15,
    name: "Poly Shawl",
    description:
      "Elegant black wool shawl with subtle self-design. Versatile for both formal and casual winter wear.",
    price: 2900,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-8.jpg",
    details: {
      material: "100% Fine Wool",
      dimensions: "2m x 0.7m",
      care: "Hand wash cold or dry clean",
    },
  },
  {
    id: 16,
    name: "Poly Shawl",
    description:
      "Soft wool shawl in pastel tones with all-over paisley motifs. Lightweight yet warm, perfect for layering.",
    price: 3100,
    category: "shawl",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/shawl-9.jpg",
    details: {
      material: "Wool Blend",
      dimensions: "1.9m x 0.6m",
      care: "Gentle hand wash or dry clean",
    },
  },
  {
    id: 17,
    name: "Knitted Stole",
    description:
      "Soft gray knitted stole with a subtle ribbed pattern. Lightweight and perfect for layering in all seasons.",
    price: 1750,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-ten.jpg",
    details: {
      material: "85% Wool, 15% Acrylic",
      dimensions: "1.6m x 0.4m",
      care: "Hand wash cold",
    },
  },
  {
    id: 18,
    name: "Knitted Stole",
    description:
      "Pastel blue knitted stole with a delicate cable design. Adds a touch of color and warmth to your outfit.",
    price: 1850,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-eleven.jpg",
    details: {
      material: "100% Merino Wool",
      dimensions: "1.7m x 0.35m",
      care: "Dry clean only",
    },
  },
  {
    id: 19,
    name: "Knitted Stole",
    description:
      "Earthy brown knitted stole with a chunky weave. Cozy and stylish for chilly days.",
    price: 1900,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-twelve.jpg",
    details: {
      material: "90% Wool, 10% Nylon",
      dimensions: "1.5m x 0.4m",
      care: "Hand wash cold",
    },
  },
  {
    id: 20,
    name: "Knitted Stole",
    description:
      "Blush pink knitted stole with a soft, fluffy texture. Feminine and elegant for any occasion.",
    price: 2000,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-thirteen.jpg",
    details: {
      material: "80% Angora, 20% Wool",
      dimensions: "1.6m x 0.38m",
      care: "Dry clean recommended",
    },
  },
  {
    id: 21,
    name: "Knitted Stole",
    description:
      "Olive green knitted stole with a basket weave pattern. Durable and warm for winter months.",
    price: 2100,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-fourteen.jpg",
    details: {
      material: "70% Wool, 30% Acrylic",
      dimensions: "1.8m x 0.4m",
      care: "Hand wash or dry clean",
    },
  },
  {
    id: 22,
    name: "Knitted Stole",
    description:
      "Bright mustard yellow knitted stole with a chevron pattern. Adds a pop of color to your winter wardrobe.",
    price: 1950,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-fifteen.jpg",
    details: {
      material: "100% Wool",
      dimensions: "1.7m x 0.36m",
      care: "Hand wash cold",
    },
  },
  {
    id: 23,
    name: "Knitted Stole",
    description:
      "Charcoal black knitted stole with a modern geometric knit. Sleek and versatile for all occasions.",
    price: 2200,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-sixteen.jpg",
    details: {
      material: "95% Wool, 5% Spandex",
      dimensions: "1.6m x 0.4m",
      care: "Dry clean only",
    },
  },
  {
    id: 24,
    name: "Knitted Stole",
    description:
      "Cream white knitted stole with a classic cable knit. Timeless and elegant for any season.",
    price: 2050,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-seventeen.jpg",
    details: {
      material: "100% Merino Wool",
      dimensions: "1.7m x 0.38m",
      care: "Hand wash or dry clean",
    },
  },
  {
    id: 25,
    name: "Knitted Stole",
    description:
      "Deep red knitted stole with a bold, textured pattern. Statement piece for winter fashion.",
    price: 2150,
    category: "knitted-stole",
    image:
      "https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/knited-eighteen.jpg",
    details: {
      material: "85% Wool, 15% Nylon",
      dimensions: "1.8m x 0.4m",
      care: "Hand wash cold",
    },
  },
];