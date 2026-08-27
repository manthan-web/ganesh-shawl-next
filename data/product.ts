import { Product, Category } from './types';

export const BRAND = {
  name: 'Ganesh Shawl Emporium',
  phone1: '+91 9872531240',
  phone2: '+91 9803457668',
  whatsapp: '919872531240',
  instagram: 'https://www.instagram.com/ganeshshawlemp.in/',
  address: 'Street No.8, Mochpura Bazar, Chaura Bazar, Old Ludhiana, Ludhiana, Punjab 141008',
  baseUrl: 'https://ganesh-shawl-next.vercel.app',
};

export const categories: Category[] = [
  {
    slug: 'knitted-stoles',
    name: 'Knitted Stoles',
    tagline: 'Hand-knitted, worn-year-round warmth.',
    description:
      'Knitted stole manufacturer and wholesale supplier in Ludhiana, Punjab. Our stoles are handcrafted in soft wool blends — cozy, breathable, and built to live through winters for years. Trusted by retailers across India for bulk knitted stole supply at wholesale prices.',
    seoDescription:
      'Knitted stole manufacturer and wholesale supplier in Ludhiana, Punjab. Soft wool-blend stoles for retailers and bulk buyers across India.',
  },
  {
    slug: 'shawls',
    name: 'Shawls',
    tagline: 'Traditional shawls woven the old way.',
    description:
      'Wholesale shawls from the Ludhiana looms, including classic pure-wool styles and seasonal designs for retailers across India. Contact us for current colours, availability, MOQ, and pricing.',
    seoDescription:
      'Wholesale shawls from Ludhiana, Punjab, including pure-wool styles for retailers and bulk buyers across India. Ask for current colours and pricing.',
  },
  {
    slug: 'stoles',
    name: 'Stoles',
    tagline: 'Lightweight stoles for every season.',
    description:
      'Wholesale stoles in pure cotton, silk, and blended weaves for retailers, boutiques, and online sellers across India. Contact us for current designs, availability, MOQ, and pricing.',
    seoDescription:
      'Wholesale stoles from Ludhiana in cotton, silk, and blended weaves for retailers across India. Ask for current designs, MOQ, and pricing.',
  },
];

const specs = (
  fabric: string,
  dims: string,
  care: string,
  design = 'Knitted',
): Product['specs'] => [
  { label: 'Fabric', value: fabric },
  { label: 'Design', value: design },
  { label: 'Size / Dimensions', value: dims },
  { label: 'Weight', value: '300–350 gm (approx.)' },
  { label: 'MOQ', value: '100 pieces (customisable)' },
  { label: 'Wash Care', value: care },
  { label: 'Packaging', value: 'Individual poly bag + carton packing' },
  { label: 'Made In', value: 'India' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Rib Knitted Stole For Women',
    blurb: 'Soft wool-blend knit. Clean rib finish, everyday wear.',
    intro:
      'This Classic Rib Knitted Stole is one of our most ordered wholesale pieces. It has a clean, everyday rib finish with a soft drape for easy retail styling.',
    description:
      'Soft against the skin, comfortably warm, and neutral enough to go with everything you own. The rib structure keeps the drape tidy while the wool-blend yarn adds real warmth without the itch of coarse wools. Finished at our Ludhiana, Punjab workshop, this knitted stole ships across India in bulk lots for retailers, boutiques, and online sellers. Order a full-size knitted stole for women or men, stock several shades, and sell it through every winter — this is the wholesale knitted stole design retailers reorder season after season.',
    hindi:
      'यह क्लासिक रिब निटेड स्टोल लुधियाना, पंजाब में हमारी फैक्ट्री में तैयार किया जाता है। मुलायम ऊन ब्लेंड यार्न, सर्दियों के लिए गर्म और हल्का — थोक मूल्य पर उपलब्ध।',
    keywords: ['knitted stole', 'knitted stole manufacturer', 'wool blend stole wholesale', 'knitted stole for women'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-1.jpg',
    itemCode: 'KNS-101',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Soft Knit', '1.8m x 0.4m', 'Hand wash cold or dry clean'),
  },
  {
    id: 2,
    name: 'Herringbone Knitted Stole For Women',
    blurb: 'Fine herringbone weave in rich neutral tones.',
    intro:
      'A fine herringbone weave in rich neutral tones, structured enough for a suit and soft enough for an all-day layer. A versatile wholesale design for winter collections.',
    description:
      'The herringbone pattern adds quiet sophistication to a winter layer, and the wool-blend body drapes cleanly over suits, kurtas, and casual wear alike. Woven and knitted at our Ludhiana, Punjab unit and supplied in wholesale quantities across India. Retailers pair this herringbone knit with formal menswear and premium ladies\' section — a dependable wholesale knitted stole for year-round turnover.',
    hindi:
      'हैरिंगबोन डिज़ाइन वाला यह ऊन ब्लेंड निटेड स्टोल सूट और कुर्ते दोनों के साथ बढ़िया लगता है। लुधियाना में निर्मित, पूरे भारत में थोक आपूर्ति।',
    keywords: ['herringbone stole', 'wool blend stole', 'herringbone shawl wholesale', 'stole for men'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-2.jpg',
    itemCode: 'KNS-102',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.4m', 'Dry clean only', 'Herringbone'),
  },
  {
    id: 3,
    name: 'Self Design Knitted Stole For Women',
    blurb: 'Subtle self-pattern knit, quiet texture with depth.',
    intro:
      'A subtle self-pattern knit that reads as quiet texture from afar and comes alive up close. Its understated finish makes it easy to merchandise across winter collections.',
    description:
      'A wardrobe staple for winters that photographs well and sells even better. The self-pattern keeps the stole easy to pair, while the hand-finished edges reflect the quality buyers expect from an established Ludhiana knitwear manufacturer. Bulk orders dispatched pan-India with retail-ready packaging — real wholesale value for boutiques and multi-brand stores.',
    hindi:
      'सेल्फ डिज़ाइन निटेड स्टोल — हल्की बनावट, आसान पेयरिंग और टिकाऊ क्वालिटी। लुधियाना की फैक्ट्री से सीधा थोक मूल्य।',
    keywords: ['self design stole', 'designer stole wholesale', 'winter stole', 'knitted shawl manufacturer'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-3.jpg',
    itemCode: 'KNS-103',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.4m', 'Hand wash cold', 'Self Design'),
  },
  {
    id: 4,
    name: 'Textured Block Knitted Stole For Women',
    blurb: 'Chunky block knit with a plush, substantial hand feel.',
    intro:
      'A chunky-block knit with a plush hand feel. Soft, warm, and substantial without the weight of a heavy fabric, it makes a distinctive addition to a winter range.',
    description:
      'The block pattern gives this stole a rich, three-dimensional look that stands out on the rack — exactly what standalone boutiques look for in a winter line. Produced in bulk at our Ludhiana, Punjab unit with consistent colour and finish across every batch. Supply it to retailers across India at wholesale rates and keep your shelves moving through peak winter.',
    hindi:
      'ब्लॉक टेक्सचर वाला यह निटेड स्टोल हल्का पर गर्म है — दुकानों के लिए बेहतरीन थोक ऑप्शन। लुधियाना निर्मित, पां-इंडिया डिलीवरी।',
    keywords: ['chunky knitted stole', 'block knit stole', 'winter stole wholesale', 'ladies stole manufacturer'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-4.jpg',
    itemCode: 'KNS-104',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.7m x 0.4m', 'Dry clean recommended', 'Block Knit'),
  },
  {
    id: 5,
    name: 'Ribbed Knitted Stole For Women',
    blurb: 'Fine ribbed knit that drapes cleanly on the shoulder.',
    intro:
      'A fine ribbed knit that drapes cleanly on the shoulder. It pairs as easily with a blazer as it does with casual winter wear, making it a dependable retail staple.',
    description:
      'One of the highest-moving ribbed knit designs from our Ludhiana looms — soft, stretchy, and universally wearable. The rib construction hugs the neckline without bunching, making it a favourite among corporate gifting buyers and fashion retailers alike. Ask for bulk pricing and customize with your own shade across an order — wholesale knitted stoles from a manufacturer who actually makes what you sell.',
    hindi:
      'फाइन रिब निट स्टोल — ब्लेज़र या कुर्ते के साथ परफेक्ट। लुधियाना निर्माता से सीधा थोक मूल्य, कस्टम शेड्स उपलब्ध।',
    keywords: ['ribbed stole', 'ribbed knit stole', 'corporate gifting stole', 'stole manufacturer Ludhiana'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-5.jpg',
    itemCode: 'KNS-105',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.45m', 'Hand wash cold', 'Ribbed'),
  },
  {
    id: 6,
    name: 'Pebble Knitted Stole For Women',
    blurb: 'Subtle pebble texture that catches light beautifully.',
    intro:
      'Knitted with a subtle pebble texture that catches light beautifully. This quiet statement piece adds a premium-looking texture to winter retail displays.',
    description:
      'The pebble texture gives a soft, boutique feel without being loud — ideal for premium retail shelves and gifting. Knitted in wool blend at our Ludhiana, Punjab factory, with even texture across every metre. Wholesale buyers across India order this design for its unique finish and dependable repeat sales.',
    hindi:
      'पेबल टेक्सचर निट स्टोल — प्रीमियम फील, अनोखी बनावट। थोक ऑर्डर के लिए संपर्क करें, लुधियाना में निर्मित।',
    keywords: ['pebble knit stole', 'textured stole', 'premium stole wholesale', 'knitted stole supplier'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-6.jpg',
    itemCode: 'KNS-106',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.4m', 'Dry clean only', 'Pebble'),
  },
  {
    id: 7,
    name: 'Waffle Stitch Knitted Stole For Women',
    blurb: 'Waffle-stitch knit with extra warmth and air pockets.',
    intro:
      'A waffle-stitch knit offering extra warmth and air pockets. Practical and effortlessly stylish, it is a reliable choice for colder-weather retail collections.',
    description:
      'Waffle stitch is the winter workhorse — the three-dimensional weave traps warmth while staying breathable, and the structure holds its shape wash after wash. This is our recommended design for northern India winters, supplied in bulk to retailers from Ludhiana to Delhi. Wholesale pricing, steady quality, one carton to a hundred — a manufacturer you can reorder from all season.',
    hindi:
      'वफल स्टिच निट स्टोल — कड़ाके की ठंड के लिए सबसे भरोसेमंद डिज़ाइन। लुधियाना निर्मित, थोक मूल्य पर उपलब्ध।',
    keywords: ['waffle knit stole', 'warm stole for winter', 'waffle stitch shawl', 'stole wholesale Ludhiana'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-7.jpg',
    itemCode: 'KNS-107',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.4m', 'Hand wash cold', 'Waffle Stitch'),
  },
  {
    id: 8,
    name: 'Shell Pattern Knitted Stole For Women',
    blurb: 'Gentle all-over shell repeat, hand-finished.',
    intro:
      'A shell-pattern knit with a gentle allover repeat. Soft, detailed, and hand-finished, it brings a decorative option to boutique winter collections.',
    description:
      'A feminine, decorative knit that outsells plain designs in boutique retail — the shell repeat reads as intricate without ever looking busy. Hand-finished edges and even colour define every batch from our Ludhiana, Punjab unit. Retailers and online sellers stock this design for its Instagram-ready look and strong festival-season sales.',
    hindi:
      'शेल पैटर्न निट स्टोल — बाउटिक रिटेल के लिए सबसे पसंदीदा डिज़ाइन। फेस्टिवल सीज़न के लिए थोक ऑर्डर करें।',
    keywords: ['shell pattern stole', 'designer knitted stole', 'festival stole wholesale', 'stole for ladies'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-8.jpg',
    itemCode: 'KNS-108',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.7m x 0.4m', 'Dry clean recommended', 'Shell Pattern'),
  },
  {
    id: 9,
    name: 'Deep Textured Knitted Stole For Women',
    blurb: 'Deep-textured knit in a warm winter tone.',
    intro:
      'A deep-textured knit in a warm winter tone that brings character to simple outfits. Its dimensional finish gives retailers a standout option for winter displays.',
    description:
      'Best for buyers who want a stole that looks expensive on a budget — the deep texture creates rich play of light and shade from yarn structure alone. Made in bulk at our Ludhiana, Punjab factory with consistent texture and colour across production runs. A wholesale winter staple for north Indian retailers.',
    hindi:
      'डीप टेक्सचर निट स्टोल — महंगा लुक, किफ़ायती थोक मूल्य। उत्तर भारत की सर्दियों के लिए बेस्ट सेलर।',
    keywords: ['textured knitted stole', 'winter stole', 'warm stole wholesale', 'knitted stole Ludhiana'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-9.jpg',
    itemCode: 'KNS-109',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.4m', 'Hand wash cold or dry clean', 'Deep Texture'),
  },
  {
    id: 10,
    name: 'Mosaic Stitch Knitted Stole For Women',
    blurb: 'Small repeating blocks, warm and structured.',
    intro:
      'A mosaic-stitch knit built of small repeating blocks. Warm and structured, it brings a modern geometric look to everyday winter styling.',
    description:
      'The geometric block structure gives this stole a crisp, modern character that sells across age groups. Knitted in wool blend at our Ludhiana, Punjab unit, it keeps its shape through repeated wear and folding — important for retail shelves. Bulk supply available pan-India with strict quality checks on every piece.',
    hindi:
      'मोज़ेक स्टिच निट स्टोल — मॉडर्न जियोमेट्रिक लुक, हर उम्र के लिए। लुधियाना निर्मित थोक सप्लाई।',
    keywords: ['mosaic knit stole', 'geometric stole', 'modern stole wholesale', 'stole manufacturer Punjab'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-10.jpg',
    itemCode: 'KNS-110',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.4m', 'Dry clean only', 'Mosaic Stitch'),
  },
  {
    id: 11,
    name: 'Cozy Knitted Stole For Women',
    blurb: 'The kind of knit you reach for first, all season.',
    intro:
      'The kind of knit you reach for first. This classic stole has a soft, warm drape that is comfortable enough for everyday wear throughout the season.',
    description:
      'Our baseline wholesale design, and still our most reordered: soft yarn, clean knitting, warm drape, honest sizing. Made at our Ludhiana, Punjab workshop in bulk, with consistent quality across every carton. Ideal first order for new retail buyers — proven design that sells at any price point.',
    hindi:
      'कोज़ी निट स्टोल — हर सीज़न बिकने वाला क्लासिक डिज़ाइन। नए खरीदारों के लिए बेस्ट पहला थोक ऑर्डर।',
    keywords: ['cozy knitted stole', 'everyday stole', 'knitted stole wholesale', 'best seller stole'],
    category: 'knitted-stoles',
    image: '/images/knitted/knit-11.jpg',
    itemCode: 'KNS-111',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Wool Blend', '1.8m x 0.45m', 'Dry clean recommended'),
  },
  {
    id: 12,
    name: 'Paisley Border Viscose Acrylic Stole',
    blurb: 'Drapey viscose acrylic stole with designer border work.',
    intro:
      'A drapey viscose acrylic stole with a rich designer border. Its light fall works for everyday layering as well as occasion-led retail collections.',
    description:
      'Light, flowy, and finished with striking border work — this is the stole style buyers keep asking for. The viscose acrylic blend gives it a soft fall and comfortable weight for year-round wear, and the border elevates it from everyday to occasion wear. Produced in bulk at our Ludhiana, Punjab unit and shipped to retailers across India. Wholesale rates on this design are our most competitive this season — message us for current stock and pricing.',
    hindi:
      'पेसले बॉर्डर वाला विस्कोज़ एक्रिलिक स्टोल — हल्का, बहने जैसा फ़ॉल और शानदार बॉर्डर वर्क। इस सीज़न का हीरो डिज़ाइन, थोक मूल्य पर उपलब्ध।',
    keywords: ['viscose acrylic stole', 'border work stole', 'fancy stole wholesale', 'stole for women'],
    category: 'stoles',
    image: '/images/knitted/knit-12.jpg',
    itemCode: 'KNS-112',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Viscose Acrylic Blend', '1.8m x 0.4m', 'Hand wash cold', 'Paisley Border Work'),
  },
  {
    id: 13,
    name: 'Kadai Embroidery Stole with Patchwork Border',
    blurb: 'Lightweight stole with delicate embroidery and patchwork-inspired floral detailing.',
    intro:
      'A softly draped stole featuring Kadai-style embroidery and patchwork-inspired floral detailing for festive and occasion-led collections.',
    description:
      'This embroidered stole combines a light, elegant drape with delicate floral detailing and a decorative patchwork-inspired border. Its neutral palette makes it easy to merchandise for festive dressing, occasion wear, and everyday layering. Available for wholesale buyers and retailers across India from our Ludhiana unit.',
    hindi:
      'कढ़ाई और पैचवर्क बॉर्डर वाला हल्का स्टोल — त्योहारों और रोज़मर्रा के पहनावे के लिए सुंदर डिज़ाइन। थोक आपूर्ति के लिए उपलब्ध।',
    keywords: ['kadai embroidery stole', 'embroidered stole wholesale', 'patchwork stole', 'floral stole for women'],
    category: 'stoles',
    image: '/images/hero/feature-1.jpg',
    itemCode: 'STS-113',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Viscose Blend', '1.8m x 0.7m', 'Hand wash cold', 'Kadai Embroidery'),
  },
  {
    id: 14,
    name: 'Olive Green Tissue-Pattern Knitted Stole with Floral Patchwork',
    blurb: 'Soft knitted stole with a tissue-inspired texture, floral borders, and leaf patchwork motifs.',
    intro:
      'An elegant olive green knitted stole with a tissue-inspired textured pattern, contrast floral borders, and decorative leaf patchwork detailing.',
    description:
      'This olive green knitted stole brings together a refined tissue-inspired texture, contrasting cream panels, floral border work, and decorative leaf patchwork motifs. The softly draped design is easy to style for winter wardrobes, festive collections, and premium retail displays. Supplied to wholesale buyers and retailers across India from our Ludhiana unit.',
    hindi:
      'ऑलिव ग्रीन टिश्यू-पैटर्न निटेड स्टोल — फ्लोरल बॉर्डर और लीफ पैचवर्क डिज़ाइन के साथ। सर्दियों और फेस्टिव कलेक्शन के लिए सुंदर।',
    keywords: ['tissue design knitted stole', 'olive green stole wholesale', 'floral patchwork stole', 'knitted stole manufacturer'],
    category: 'knitted-stoles',
    image: '/images/knitted/68678ed4-9147-44ce-9cfc-806c1a9b16fc.jpg',
    itemCode: 'KNS-114',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Knitted Blend', '1.8m x 0.7m', 'Hand wash cold', 'Tissue-Pattern Floral Patchwork'),
  },
  {
    id: 15,
    name: 'Blush Pink Tissue-Texture Knitted Stole with Floral Embroidery',
    blurb: 'Soft pink knitted stole with a delicate textured finish and statement floral embroidery panels.',
    intro:
      'A graceful blush pink knitted stole with a tissue-inspired texture and floral embroidery panels placed for an elegant drape.',
    description:
      'This blush pink knitted stole features a soft tissue-inspired texture with decorative floral embroidery panels near the lower edges. Its light colour and flowing drape make it suitable for festive assortments, occasion wear, and premium retail displays. Supplied to wholesale buyers and retailers across India from our Ludhiana unit.',
    hindi:
      'ब्लश पिंक टिश्यू-टेक्सचर निटेड स्टोल — सुंदर फ्लोरल एम्ब्रॉयडरी पैनल और हल्के ड्रेप के साथ। फेस्टिव और प्रीमियम कलेक्शन के लिए उपयुक्त।',
    keywords: ['pink tissue texture stole', 'floral embroidered stole wholesale', 'blush pink knitted stole', 'stole manufacturer Ludhiana'],
    category: 'knitted-stoles',
    image: '/images/knitted/4ca4069a-cf64-4550-93ec-18be68d04b82.png',
    itemCode: 'KNS-115',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Knitted Blend', '1.8m x 0.7m', 'Hand wash cold', 'Tissue-Texture Floral Embroidery'),
  },
  {
    id: 16,
    name: 'Soft Pink Tissue-Pattern Knitted Stole with Floral Motifs',
    blurb: 'Elegant pink knitted stole with tonal floral motifs, decorative borders, and a soft drape.',
    intro:
      'A soft pink knitted stole with a subtle tissue-inspired pattern, tonal floral motifs, and delicate border detailing.',
    description:
      'Designed in a gentle pink palette, this knitted stole combines a fine tissue-inspired texture with tonal floral motifs, a patterned front border, and a neat decorative hem. The versatile design works for festive dressing, winter layering, and refined retail collections. Available for wholesale buyers and retailers across India from our Ludhiana unit.',
    hindi:
      'सॉफ्ट पिंक टिश्यू-पैटर्न निटेड स्टोल — टोनल फ्लोरल मोटिफ और सुंदर बॉर्डर डिटेलिंग के साथ। थोक कलेक्शन के लिए उपलब्ध।',
    keywords: ['pink floral knitted stole', 'tissue pattern stole wholesale', 'soft pink stole manufacturer', 'floral motif stole'],
    category: 'knitted-stoles',
    image: '/images/knitted/25d33a52-fcd9-464f-a2ee-f91266e58b09.jpg',
    itemCode: 'KNS-116',
    moq: '100 pieces',
    packaging: 'Individual poly bag + carton packing',
    productionCapacity: '5,000+ stoles per month',
    deliveryTime: '10–15 days after order confirmation',
    specs: specs('Knitted Blend', '1.8m x 0.7m', 'Hand wash cold', 'Tissue-Pattern Floral Motif'),
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
