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
    title: "The Ultimate Guide to Pour-Over Coffee: Master the Chemex & V60",
    category: "Brewing Guides",
    readTime: "5 min read",
    date: "July 22, 2026",
    author: "Hamza Al-Maktoum (Head Roaster)",
    authorRole: "Founder & Master Roaster",
    authorAvatar: "☕",
    image: "images/gallery_pour_over.png",
    excerpt: "Master water temperature, grind size consistency, and bloom timing to extract vibrant floral and berry notes from single-origin beans.",
    content: `
      <p class="blog-lead">Pour-over coffee brewing is both a science and an art form. When done correctly, it brings out subtle floral notes, bright citrus acidity, and complex sweetness that high-pressure espresso extraction can sometimes mask.</p>
      
      <h2>1. The Precision Grind Size</h2>
      <p>Target a medium-coarse consistency resembling sea salt. Too fine, and your brew will taste bitter and over-extracted; too coarse, and water will rush through, leaving a watery, weak taste. Invest in a burr grinder for uniform particle size.</p>

      <h2>2. Water Temperature Control</h2>
      <p>Water temperature is critical for extracting delicate flavor compounds without scorching the coffee bed. Water should ideally sit between 92°C to 96°C (198°F to 205°F). Never pour boiling water directly onto grounds as it burns essential aromatic oils.</p>

      <h2>3. The 45-Second Bloom Phase</h2>
      <p>Pour 50g of hot water in slow, circular motions and wait 45 seconds. Watch the coffee bed bubble as trapped carbon dioxide gas escapes — this is called the bloom. Blooming prepares the coffee cell structure for optimal extraction during subsequent pours.</p>

      <blockquote class="blog-quote">
        "A great pour-over isn't just a caffeine hit; it's a moment of mindfulness where geometry, temperature, and timing create liquid perfection."
      </blockquote>

      <h2>4. The Golden Ratio: 1:16</h2>
      <p>For a standard 350ml cup, use 22 grams of freshly ground coffee to 350g of filtered water. Maintain a steady, concentric pour from the center outward, avoiding the paper filter edges.</p>
    `
  },
  {
    id: "blog-2",
    title: "Cold Brew vs. Iced Coffee: What’s the Real Difference?",
    category: "Coffee Culture",
    readTime: "4 min read",
    date: "July 18, 2026",
    author: "Elena Rostova (Barista Lead)",
    authorRole: "Senior Barista & Drink Stylist",
    authorAvatar: "🧊",
    image: "images/iced_coffee.png",
    excerpt: "Discover how 24-hour cold immersion extraction creates a smooth, low-acid brew compared to traditional flash-chilled espresso.",
    content: `
      <p class="blog-lead">While both drinks are served over ice, Cold Brew and traditional Iced Coffee are created through completely different chemical extraction processes, resulting in vastly different flavor profiles on the palate.</p>
      
      <h2>The Extraction Time Difference</h2>
      <p>Traditional iced coffee is brewed hot using espresso or pour-over methods and then rapidly chilled over ice. Cold brew, however, never touches hot water. Coarsely ground Arabica beans steep in ambient or chilled filtered water for 18 to 24 hours.</p>

      <h2>Acidity & Smoothness</h2>
      <p>Because hot water extracts bitter acids and oils faster, cold brew boasts up to 65% less acidity than hot-brewed coffee. The result is a naturally sweet, velvety smooth drink with deep chocolate and nutty notes that requires minimal added sugar.</p>

      <h2>Caffeine Strength Comparison</h2>
      <p>Due to the long steeping time and higher coffee-to-water ratio, cold brew concentrate contains higher caffeine density per ounce. Paired with sweet cream or vanilla bean syrup, it yields an incredibly refreshing energy boost.</p>
    `
  },
  {
    id: "blog-3",
    title: "The Secrets Behind French Butter Pastry Lamination",
    category: "Bakery Craft",
    readTime: "6 min read",
    date: "July 14, 2026",
    author: "Chef Jean-Luc",
    authorRole: "Master Pastry Chef",
    authorAvatar: "🥐",
    image: "images/pastry_croissant.png",
    excerpt: "An inside look at our 81-layer croissant dough process using imported Normandy butter and stone-ground French wheat.",
    content: `
      <p class="blog-lead">Nothing complements a morning latte quite like a fresh, golden-shattered croissant. The secret to our legendary pastry lies in the meticulous art of French butter lamination.</p>

      <h2>Imported Normandy Beurre d'Isigny</h2>
      <p>We exclusively use 84% butterfat Normandy butter. High butterfat content ensures low water content, preventing steam from tearing dough layers during rolling and guaranteeing rich, caramelized flavor.</p>

      <h2>81 Micro-Thin Layers</h2>
      <p>Our dough undergoes three precise single folds over a 24-hour resting period. This creates 81 distinct layers of dough separated by microscopic sheets of cold butter.</p>

      <h2>The Oven Steam Explosion</h2>
      <p>When placed in our stone-deck ovens at 200°C, the water in the butter layers instantly vaporizes into steam, pushing the dough layers upward to form the iconic honeycomb cross-section inside.</p>
    `
  },
  {
    id: "blog-4",
    title: "Single-Origin Arabica: From Ethiopian Highlands to Your Cup",
    category: "Roastery Stories",
    readTime: "7 min read",
    date: "July 09, 2026",
    author: "Hamza Al-Maktoum (Head Roaster)",
    authorRole: "Founder & Master Roaster",
    authorAvatar: "☕",
    image: "images/hero_coffee.png",
    excerpt: "Journey into high-altitude volcanic soils, heirloom coffee varieties, and washed processing that give Yirgacheffe its iconic bergamot aroma.",
    content: `
      <p class="blog-lead">Ethiopia is widely recognized as the birthplace of coffee. Grown at altitudes exceeding 1,900 meters above sea level in the Yirgacheffe region, these heirloom beans represent the pinnacle of coffee complexity.</p>

      <h2>Volcanic Soil & Micro-Climates</h2>
      <p>High elevation slows the growth of coffee cherries, allowing sugars to concentrate dense seed structures. Rich volcanic soil supplies essential minerals that yield vibrant stone-fruit and jasmine notes.</p>

      <h2>Washed vs. Natural Processing</h2>
      <p>Our featured lot undergoes a wet-washed fermentation process. After de-pulping, beans soak in clean mountain spring water for 36 hours before drying on raised African beds. This process highlights clean acidity and bright citrus clarity.</p>
    `
  },
  {
    id: "blog-5",
    title: "The Rise of Ceremonial Uji Matcha & Plant-Based Milks",
    category: "Wellness & Teas",
    readTime: "5 min read",
    date: "July 04, 2026",
    author: "Aria Chen",
    authorRole: "Tea & Beverage Specialist",
    authorAvatar: "🍵",
    image: "images/gallery_matcha_latte.png",
    excerpt: "Why shade-grown green tea leaves from Kyoto paired with creamy steamed oat milk create the ultimate sustained-energy beverage.",
    content: `
      <p class="blog-lead">Matcha has evolved from ancient Japanese tea ceremonies into a global wellness staple. When paired with high-grade oat milk, it provides a smooth, jitter-free energy boost that lasts all day.</p>

      <h2>Shade-Grown Quality: First Harvest</h2>
      <p>Three weeks before harvest, tea bushes in Uji, Kyoto are shaded from sunlight. This spikes chlorophyll levels and amino acids like L-theanine, giving authentic ceremonial matcha its electric green color and sweet umami taste.</p>

      <h2>L-Theanine & Sustained Focus</h2>
      <p>Unlike caffeine from coffee which can cause rapid spikes and crashes, the L-theanine in matcha slows caffeine absorption in the bloodstream, delivering 4-6 hours of calm, focused mental clarity.</p>
    `
  },
  {
    id: "blog-6",
    title: "Designing Cozy Café Aesthetics: Velvet, Warm Lights & Jazz",
    category: "Café Vibe",
    readTime: "4 min read",
    date: "June 28, 2026",
    author: "Sophia Vance",
    authorRole: "Interior Architect",
    authorAvatar: "✨",
    image: "images/cafe_interior.png",
    excerpt: "How interior lighting temperature, plush velvet lounge nooks, and curated acoustic jazz create an inspiring sanctuary for coffee lovers.",
    content: `
      <p class="blog-lead">A coffee shop should be more than just a place to pick up a drink; it should be a sensory sanctuary where creativity and relaxation flourish.</p>

      <h2>2700K Warm Ambient Lighting</h2>
      <p>We avoid harsh overhead fluorescent lighting in favor of warm, dimmable 2700K pendant bulbs and brass accent sconces. Warm light triggers relaxation and makes food and drinks look vibrant.</p>

      <h2>Acoustic Soundscapes</h2>
      <p>Soft velvet upholstery, solid oak tables, and acoustic ceiling baffles damp harsh noises while allowing quiet conversation and gentle background vinyl jazz to resonate naturally.</p>
    `
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
