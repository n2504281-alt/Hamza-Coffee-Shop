/* ==========================================================================
   HAMZA COFFEE SHOP — Central Mock Database & Datasets
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: "prod-1",
    name: "Signature Caramel Macchiato",
    category: "Espresso",
    categorySlug: "espresso",
    price: 5.50,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Bestseller",
    image: "images/iced_coffee.png",
    description: "Freshly pulled espresso poured over silky steamed oat milk and vanilla syrup, topped with rich caramel drizzle.",
    hotOrIced: "both",
    sizes: ["Small", "Medium", "Large"],
    milkOptions: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
    extras: [
      { name: "Extra Shot", price: 1.00 },
      { name: "Whipped Cream", price: 0.50 },
      { name: "Caramel Drizzle", price: 0.50 }
    ]
  },
  {
    id: "prod-2",
    name: "Artisan Cappuccino",
    category: "Hot Coffee",
    categorySlug: "hot-coffee",
    price: 4.80,
    rating: 4.8,
    reviewsCount: 98,
    badge: "Popular",
    image: "images/hero_coffee.png",
    description: "Equal parts velvet espresso, silky hot milk, and deep airy foam dusted with organic cocoa powder.",
    hotOrIced: "hot",
    sizes: ["Small", "Medium", "Large"],
    milkOptions: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
    extras: [
      { name: "Extra Shot", price: 1.00 },
      { name: "Cinnamon Powder", price: 0.25 }
    ]
  },
  {
    id: "prod-3",
    name: "Vanilla Cold Brew",
    category: "Cold Coffee",
    categorySlug: "cold-coffee",
    price: 5.20,
    rating: 4.9,
    reviewsCount: 116,
    badge: "Refreshing",
    image: "images/iced_coffee.png",
    description: "Slow-steeped for 20 hours using single-origin Ethiopian beans, infused with Madagascar vanilla bean syrup.",
    hotOrIced: "iced",
    sizes: ["Medium", "Large"],
    milkOptions: ["Whole Milk", "Almond Milk", "Oat Milk", "Soy Milk"],
    extras: [
      { name: "Sweet Cold Foam", price: 0.80 },
      { name: "Extra Shot", price: 1.00 }
    ]
  },
  {
    id: "prod-4",
    name: "Matcha Velvet Latte",
    category: "Specialty Drinks",
    categorySlug: "specialty",
    price: 5.80,
    rating: 4.7,
    reviewsCount: 84,
    badge: "New",
    image: "images/hero_coffee.png",
    description: "Ceremonial grade Uji Matcha whisked to perfection with steamed almond milk and pure raw honey.",
    hotOrIced: "both",
    sizes: ["Small", "Medium", "Large"],
    milkOptions: ["Whole Milk", "Almond Milk", "Oat Milk"],
    extras: [
      { name: "Vanilla Syrup", price: 0.50 }
    ]
  },
  {
    id: "prod-5",
    name: "Fresh Butter Croissant",
    category: "Pastries",
    categorySlug: "pastries",
    price: 3.90,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Fresh Daily",
    image: "images/pastry_croissant.png",
    description: "Flaky, multi-layered French pastry baked every morning with 100% Normandy butter.",
    sizes: ["Standard"],
    milkOptions: [],
    extras: [
      { name: "Side Berry Jam", price: 0.75 },
      { name: "Warmed Up", price: 0.00 }
    ]
  },
  {
    id: "prod-6",
    name: "Classic Espresso Doppio",
    category: "Espresso",
    categorySlug: "espresso",
    price: 3.50,
    rating: 4.8,
    reviewsCount: 76,
    badge: "",
    image: "images/hero_coffee.png",
    description: "Double shot of concentrated single-origin espresso with golden hazelnut crema.",
    hotOrIced: "hot",
    sizes: ["Double Shot"],
    milkOptions: [],
    extras: [
      { name: "Lemon Twist", price: 0.25 }
    ]
  },
  {
    id: "prod-7",
    name: "Velvet Flat White",
    category: "Hot Coffee",
    categorySlug: "hot-coffee",
    price: 4.90,
    rating: 4.8,
    reviewsCount: 64,
    badge: "Barista Favorite",
    image: "images/hero_coffee.png",
    description: "Ristretto double shot mixed with micro-foamed whole milk for a rich, silky texture.",
    hotOrIced: "hot",
    sizes: ["Small", "Medium"],
    milkOptions: ["Whole Milk", "Oat Milk"],
    extras: []
  },
  {
    id: "prod-8",
    name: "Hazelnut Mocha Supreme",
    category: "Specialty Drinks",
    categorySlug: "specialty",
    price: 6.10,
    rating: 4.9,
    reviewsCount: 155,
    badge: "Decadent",
    image: "images/iced_coffee.png",
    description: "Rich dark Belgian chocolate ganache melted into espresso and roasted hazelnut syrup.",
    hotOrIced: "both",
    sizes: ["Medium", "Large"],
    milkOptions: ["Whole Milk", "Almond Milk", "Oat Milk"],
    extras: [
      { name: "Whipped Cream", price: 0.50 },
      { name: "Chocolate Shavings", price: 0.50 }
    ]
  }
];

const LOCATIONS_DATA = [
  {
    id: "loc-1",
    name: "Hamza Coffee Shop – Main Flagship Branch",
    address: "742 Grand Avenue, Downtown Cultural District",
    city: "City Center",
    phone: "+1 (555) 234-5678",
    email: "flagship@hamzacoffee.com",
    hours: "Mon-Thu: 7am-10pm | Fri-Sat: 7am-11pm | Sun: 8am-10pm",
    image: "images/cafe_interior.png",
    mapCoords: "37.7749,-122.4194"
  },
  {
    id: "loc-2",
    name: "Hamza Coffee Shop – Marina Bay Corner",
    address: "108 Waterfront Promenade, Bayview",
    city: "Marina Bay",
    phone: "+1 (555) 987-6543",
    email: "marina@hamzacoffee.com",
    hours: "Mon-Thu: 7am-10pm | Fri-Sat: 7am-11pm | Sun: 8am-10pm",
    image: "images/cafe_interior.png",
    mapCoords: "37.7833,-122.4167"
  },
  {
    id: "loc-3",
    name: "Hamza Coffee Shop – Uptown Financial Tower",
    address: "450 Executive Plaza, 5th Avenue",
    city: "Uptown Financial",
    phone: "+1 (555) 456-7890",
    email: "uptown@hamzacoffee.com",
    hours: "Mon-Fri: 6:30am-9pm | Sat-Sun: 8am-8pm",
    image: "images/cafe_interior.png",
    mapCoords: "37.7900,-122.4000"
  },
  {
    id: "loc-4",
    name: "Hamza Coffee Shop – Westside Artisanal Lounge",
    address: "892 Sunset Boulevard, West End",
    city: "Westside",
    phone: "+1 (555) 321-7654",
    email: "westside@hamzacoffee.com",
    hours: "Mon-Sun: 7:30am-10:30pm",
    image: "images/cafe_interior.png",
    mapCoords: "37.7600,-122.4300"
  }
];

const OFFERS_DATA = [
  {
    id: "offer-1",
    title: "Morning Artisan Coffee Deal",
    code: "WELCOME10",
    discount: "10% OFF",
    discountPercent: 10,
    description: "Get 10% off your entire first order ahead or online order with us.",
    validUntil: "Dec 31, 2026",
    badge: "Welcome Offer"
  },
  {
    id: "offer-2",
    title: "Weekend Roaster Special",
    code: "COFFEE20",
    discount: "20% OFF",
    discountPercent: 20,
    description: "Enjoy 20% off when ordering 2 or more specialty coffee drinks.",
    validUntil: "Every Fri - Sun",
    badge: "Weekend Treat"
  },
  {
    id: "offer-3",
    title: "Fresh Bakery & Pastry Special",
    code: "PASTRY15",
    discount: "15% OFF",
    discountPercent: 15,
    description: "Enjoy 15% off all freshly baked Normandy butter croissants and morning scones.",
    validUntil: "Valid All Month",
    badge: "Bakery Promo"
  },
  {
    id: "offer-4",
    title: "Express Order Ahead Saver",
    code: "EXPRESS5",
    discount: "$5.00 OFF",
    discountAmount: 5.00,
    description: "Get $5 off when you place your pickup order ahead using our express system.",
    validUntil: "Limited Time",
    badge: "Express Perk"
  }
];

const BLOG_DATA = [
  {
    id: "blog-1",
    title: "The Art of Pour-Over Coffee: A Step-by-Step Guide",
    category: "Brewing Guides",
    date: "July 18, 2026",
    author: "Hamza Al-Maktoum (Head Roaster)",
    image: "images/hero_coffee.png",
    excerpt: "Discover how water temperature, grind size, and pour timing combine to extract the fullest flavor from bean to cup.",
    content: `
      <p>Pour-over coffee brewing is both a science and an art form. When done correctly, it brings out subtle floral notes, bright acidity, and complex sweetness that espresso machine extraction can sometimes mask.</p>
      <h3>1. The Grind Size Matters</h3>
      <p>Target a medium-coarse consistency resembling sea salt. Too fine, and your brew will taste bitter and over-extracted; too coarse, and water will rush through, leaving a watery taste.</p>
      <h3>2. Water Temperature Precision</h3>
      <p>Water should ideally sit between 92°C to 96°C (198°F to 205°F). Never pour boiling water directly onto grounds as it burns the delicate aromatic oils.</p>
      <h3>3. The Bloom Phase</h3>
      <p>Pour 50g of hot water in circular motions and wait 45 seconds. Watch the coffee bed bubble as trapped carbon dioxide gas escapes — this is called the bloom.</p>
    `
  },
  {
    id: "blog-2",
    title: "Why Single-Origin Beans Are Revolutionizing Modern Cafés",
    category: "Coffee Tips",
    date: "July 10, 2026",
    author: "Elena Rostova (Barista Lead)",
    image: "images/iced_coffee.png",
    excerpt: "Learn how micro-climate, soil quality, and altitude define the distinct taste profiles of Ethiopian Yirgacheffe and Colombian Huila.",
    content: `<p>Single-origin coffees tell a story of geographical origin. Unlike blends designed for consistency, single origin allows coffee lovers to taste the terroir of specific farms.</p>`
  }
];

const FAQS_DATA = [
  {
    question: "How does the Order Ahead pickup system work?",
    answer: "You simply select your favorite coffee, customize milk and syrup choices, pick your nearest Hamza Coffee Shop branch, and choose a pickup time. Your coffee is freshly prepared 5 minutes prior to your arrival so it remains perfectly hot or ice-cold!"
  },
  {
    question: "Do you offer vegan and gluten-free pastries?",
    answer: "Yes! We offer organic oat milk, almond milk, soy milk, as well as a daily selection of vegan berry scones and gluten-free almond cakes."
  },
  {
    question: "Can I reserve a table for business meetings or gatherings?",
    answer: "Absolutely. Use our Reservations page to book a table for up to 8 guests. For private events or larger groups, contact us directly."
  },
  {
    question: "What are your promo codes for online ordering?",
    answer: "Use code WELCOME10 for 10% off your first order, or COFFEE20 for 20% off orders over $20!"
  }
];
