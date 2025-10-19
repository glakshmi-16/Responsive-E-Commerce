const products = [
  {
    id: 1,
    name: "Smartphone X1",
    category: "electronics",
    price: 50000,
    brand: "TechPro",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/71goZuIha-L._UF1000,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71goZuIha-L._UF1000,1000_QL80_.jpg", // main
      "https://m.media-amazon.com/images/I/71goZuIha-L._UF1000,1000_QL80_.jpg", // side
      "https://m.media-amazon.com/images/I/71goZuIha-L._UF1000,1000_QL80_.jpg" // back
    ],
    description: "A powerful smartphone with a stunning display and long battery life."
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "electronics",
    price: 999,
    brand: "SoundMax",
    rating: 4.2,
    image: "https://m.media-amazon.com/images/I/51FNnHjzhQL._SX522_.jpg",
    images: [
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Experience high-quality sound without the wires."
  },
  {
    id: 3,
    name: "Laptop Pro 15",
    category: "electronics",
    price: 70000,
    brand: "CompEdge",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "A sleek laptop for professionals and creators."
  },
  {
    id: 4,
    name: "Men's T-Shirt",
    category: "clothing",
    section: "mens",
    price: 500,
    brand: "FashionHub",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Comfortable and stylish cotton t-shirt for men."
  },
  {
    id: 5,
    name: "Women's Dress",
    category: "clothing",
    section: "womens",
    price: 600,
    brand: "Glamour",
    rating: 4.3,
    image: "https://img.faballey.com/images/Product/XKS03763F/d3.jpg",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Elegant dress perfect for any occasion."
  },
  {
    id: 6,
    name: "Unisex Hoodie",
    category: "clothing",
    section: "mens",
    price: 399,
    brand: "UrbanWear",
    rating: 3.8,
    image: "https://m.media-amazon.com/images/I/81d2VijDnVL._UY1100_.jpg",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Cozy hoodie for all seasons."
  },
  {
    id: 15,
    name: "Kids T-Shirt",
    category: "clothing",
    section: "kids",
    price: 499,
    brand: "TinyTrends",
    rating: 4.2,
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/kids-t-shirt/u/f/6/7-8-years-sidhu02-sidhu-moosewala-kids-tshirt-original-imagqyk4qffyhvtf.jpeg?q=90&crop=false",
    images: [
      "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Fun and comfy t-shirt for kids."
  },
  {
    id: 16,
    name: "Kids Dress",
    category: "clothing",
    section: "kids",
    price: 500,
    brand: "LittleFashion",
    rating: 4.5,
    image: "https://m.media-amazon.com/images/I/61+rr2cf65L._SX679_.jpg",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Adorable dress for little girls."
  },
  {
    id: 7,
    name: "Leather Wallet",
    category: "accessories",
    price: 350,
    brand: "LuxCraft",
    rating: 4.6,
    image: "https://images.meesho.com/images/products/406332538/0zgfs_512.webp",
    images: [
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Premium leather wallet with multiple compartments."
  },
  {
    id: 8,
    name: "Sunglasses",
    category: "accessories",
    price: 299,
    brand: "SunGuard",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Stylish sunglasses with UV protection."
  },
  {
    id: 9,
    name: "Backpack",
    category: "accessories",
    price: 700,
    brand: "TravelPro",
    rating: 4.4,
    image: "https://redtape.com/cdn/shop/files/RBB0044_001.jpg?v=1751014684",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Durable backpack for travel and daily use."
  },
  {
    id: 10,
    name: "Non-stick Cookware Set",
    category: "kitchen set",
    price: 1200,
    brand: "ChefEase",
    rating: 4.0,
    image: "https://5.imimg.com/data5/MF/UW/MY-22740806/15-piece-nonstick-stay-cool-handle-cookware-set-2c-black-1000x1000.jpg",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Complete non-stick cookware set for your kitchen."
  },
  {
    id: 11,
    name: "Modern Sofa",
    category: "furnitures",
    price: 45000,
    brand: "HomeStyle",
    rating: 3.9,
    image: "https://www.estre.in/cdn/shop/files/1-min_ad655fee-4b6d-4daa-b0a4-f017978b6376.jpg?v=1743762867",
    images: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Comfortable and stylish modern sofa for your living room."
  },
  {
    id: 12,
    name: "Bestselling Novel",
    category: "books",
    price: 180,
    brand: "BookWorld",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "A gripping bestselling novel to keep you hooked."
  },
  {
    id: 13,
    name: "Herbal Beauty Cream",
    category: "beauty creams",
    price: 220,
    brand: "GlowCare",
    rating: 3.7,
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/fairness/x/u/y/20-face-cream-for-skin-whitening-brightening-youth-beauty-cream-original-imah2tqhvuuab7ky.jpeg?q=90&crop=false",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Natural herbal beauty cream for glowing skin."
  },
  {
    id: 14,
    name: "Tablet Z10",
    category: "electronics",
    price: 299,
    brand: "TabTech",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Lightweight tablet with a vibrant display and fast processor."
  },
  // Electronics
  {
    id: 17,
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 890,
    brand: "SoundBlitz",
    rating: 4.4,
    image: "https://avstore.in/cdn/shop/files/2.AVStore-JBL-PartyBox-110-160W-Portable-Wireless-Speaker-Front-Left-Angled-View.jpg?v=1682411625&width=2000",
    images: [
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Portable Bluetooth speaker with deep bass."
  },
  {
    id: 18,
    name: "Smartwatch S2",
    category: "electronics",
    price: 499,
    brand: "WristTech",
    rating: 4.1,
    image: "https://m.media-amazon.com/images/I/616e2t492uL._SX679_.jpg",
    images: [
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Stylish smartwatch with fitness tracking."
  },
  // Clothing - Mens
  {
    id: 19,
    name: "Men's Jeans",
    category: "clothing",
    section: "mens",
    price: 450,
    brand: "DenimPro",
    rating: 4.3,
    image: "https://jasonbarret.com/cdn/shop/files/H1e7cf38d88b44ef68b2a6225be61280ak.webp?v=1730835877&width=1080",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Classic blue jeans for men."
  },
  // Clothing - Womens
  {
    id: 20,
    name: "Women's Blouse",
    category: "clothing",
    section: "womens",
    price: 350,
    brand: "ChicStyle",
    rating: 4.4,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/QT/IK/PW/70722746/whatsapp-image-2021-09-23-at-12-55-17-1--500x500.jpeg",
    images: [
      "https://images.unsplash.com/photo-1514995669114-d1c1b3a1c6b4?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Elegant blouse for women."
  },
  // Clothing - Kids
  {
    id: 21,
    name: "Kids Hoodie",
    category: "clothing",
    section: "kids",
    price: 250,
    brand: "TinyTrends",
    rating: 4.2,
    image: "https://fashion-wear.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-17-at-3.18.41-PM-jpeg.webp",
    images: [
      "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Warm hoodie for kids."
  },
  // Accessories
  {
    id: 22,
    name: "Gold Necklace",
    category: "accessories",
    price: 1200,
    brand: "JewelArt",
    rating: 4.7,
    image: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/286/1659169825_184c8850aa0aee753be5.jpg",
    images: [
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Beautiful gold necklace for special occasions."
  },
  {
    id: 23,
    name: "Bangles Set",
    category: "accessories",
    price: 400,
    brand: "BangleBox",
    rating: 4.5,
    image: "https://rubans.in/cdn/shop/files/rubans-stylish-set-of-2-18k-gold-plated-ruby-studded-geru-polish-finish-traditional-bangles-bangles-bracelets-1150834743.jpg?v=1751575116",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Colorful bangles set for women and girls."
  },
  // Kitchen Set
  {
    id: 24,
    name: "Stainless Steel Pan",
    category: "kitchen set",
    price: 550,
    brand: "ChefEase",
    rating: 4.6,
    image: "https://m.media-amazon.com/images/I/91bNW0HWeEL.jpg",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Durable stainless steel pan for everyday cooking."
  },
  // Furnitures
  {
    id: 25,
    name: "Wooden Dining Table",
    category: "furnitures",
    price: 35000,
    brand: "HomeStyle",
    rating: 4.2,
    image: "https://thetimberguy.com/cdn/shop/products/Buy-Stylish-Wooden-Dining-table-Chair-Bench-furniture-set-for-modern-Home-Choose-your-combination_1200x.jpg?v=1739729337",
    images: [
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Elegant wooden dining table for your home."
  },
  // Books
  {
    id: 26,
    name: "Science Fiction Novel",
    category: "books",
    price: 220,
    brand: "BookWorld",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "A thrilling science fiction adventure."
  },
  // Beauty Creams
  {
    id: 27,
    name: "Luxury Lipstick",
    category: "beauty creams",
    price: 280,
    brand: "GlowCare",
    rating: 4.8,
    image: "https://www.reneecosmetics.in/cdn/shop/files/8906121645491_1_c8d144f0-e818-4c32-80bf-75f13f1ba956.jpg?v=1742483477",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Premium lipstick for a glamorous look."
  },
  // More Mens Clothing
  {
    id: 28,
    name: "Men's Formal Shirt",
    category: "clothing",
    section: "mens",
    price: 320,
    brand: "OfficeWear",
    rating: 4.2,
    image: "https://filohevis.com/cdn/shop/files/teal_blue_ai.jpg?v=1733725423&width=1000",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Classic formal shirt for men."
  },
  {
    id: 29,
    name: "Men's Jacket",
    category: "clothing",
    section: "mens",
    price: 600,
    brand: "WinterPro",
    rating: 4.5,
    image: "https://jasonbarret.com/cdn/shop/files/Ligthweight_Windbreaker_Jacket_cleanup.png?v=1732145842&width=1080",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Warm and stylish jacket for men."
  },
  // More Womens Clothing
  {
    id: 30,
    name: "Women's Skirt",
    category: "clothing",
    section: "womens",
    price: 380,
    brand: "ChicStyle",
    rating: 4.3,
    image: "https://stylequotient.co.in/cdn/shop/files/AW23SQKAZY_BBLK_5.jpg?v=1702960938",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Trendy skirt for women."
  },
  {
    id: 31,
    name: "Women's Sweater",
    category: "clothing",
    section: "womens",
    price: 420,
    brand: "Glamour",
    rating: 4.4,
    image: "https://m.media-amazon.com/images/I/61s1qe9ShXL._SY741_.jpg",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Cozy sweater for women."
  },
  // More Kids Clothing
  {
    id: 32,
    name: "Kids Shorts",
    category: "clothing",
    section: "kids",
    price: 150,
    brand: "TinyTrends",
    rating: 4.1,
    image: "https://m.media-amazon.com/images/I/71DIVKeEBnL._SY879_.jpg",
    images: [
      "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Comfortable shorts for kids."
  },
  {
    id: 33,
    name: "Kids Jacket",
    category: "clothing",
    section: "kids",
    price: 280,
    brand: "LittleFashion",
    rating: 4.3,
    image: "https://cdn.shopify.com/s/files/1/0646/0211/2255/files/active_05_12_2024_804e249f-885d-48a0-88e7-75201d11c7e220241205-191918.jpg?v=1743065199&width=1512",
    images: [
      "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Warm jacket for kids."
  },
  // More Beauty Creams
  {
    id: 34,
    name: "Face Moisturizer",
    category: "beauty creams",
    price: 240,
    brand: "GlowCare",
    rating: 4.5,
    image: "https://viahbeauty.com/cdn/shop/files/TAM.jpg?v=1728999375&width=1080",
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Hydrating face moisturizer for radiant skin."
  },
  {
    id: 35,
    name: "Eye Shadow Palette",
    category: "beauty creams",
    price: 300,
    brand: "MakeupPro",
    rating: 4.7,
    image: "https://m.media-amazon.com/images/I/81cxVrPeeiL._SX522_.jpg",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "Vibrant eye shadow palette for stunning looks."
  },
  // More Books
  {
    id: 36,
    name: "Romantic Novel",
    category: "books",
    price: 200,
    brand: "BookWorld",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "A heartwarming romantic story."
  },
  {
    id: 37,
    name: "Children's Storybook",
    category: "books",
    price: 160,
    brand: "BookWorld",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1518445695201-1c1edb7b8c85?auto=format&fit=facearea&w=400&q=80",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=facearea&w=400&q=80"
    ],
    description: "A delightful storybook for children."
  }
]; 