import type { Category, Product } from "./types";

export const categories: Category[] = [
  { slug: "phones-tablets", name: "Phones & Tablets", icon: "📱" },
  { slug: "computing", name: "Computing", icon: "💻" },
  { slug: "electronics", name: "Electronics", icon: "🔌" },
  { slug: "fashion", name: "Fashion", icon: "👟" },
  { slug: "home-kitchen", name: "Home & Kitchen", icon: "🍳" },
  { slug: "health-beauty", name: "Health & Beauty", icon: "🧴" },
  { slug: "supermarket", name: "Supermarket", icon: "🛒" },
  { slug: "gaming", name: "Gaming", icon: "🎮" },
];

export const products: Product[] = [
  {
    id: "tecno-spark-20",
    name: "Spark 20 Pro 256GB + 8GB RAM",
    brand: "Tecno",
    category: "phones-tablets",
    price: 214900,
    oldPrice: 259000,
    rating: 4.4,
    reviews: 1284,
    emoji: "📱",
    tile: ["#1e3a8a", "#3b82f6"],
    badge: "Official Store",
    stock: 24,
    description:
      "A 6.78-inch 120Hz display, 108MP main camera and a 5000mAh battery that "
      + "comfortably clears a full day. Ships with 3 months of screen-crack cover.",
    specs: [
      { label: "Display", value: '6.78" FHD+ 120Hz' },
      { label: "Storage", value: "256GB, expandable" },
      { label: "RAM", value: "8GB (+8GB virtual)" },
      { label: "Camera", value: "108MP + 2MP, 32MP front" },
      { label: "Battery", value: "5000mAh, 33W fast charge" },
    ],
  },
  {
    id: "infinix-hot-40i",
    name: "HOT 40i 128GB + 4GB RAM",
    brand: "Infinix",
    category: "phones-tablets",
    price: 132500,
    oldPrice: 155000,
    rating: 4.2,
    reviews: 3907,
    emoji: "📱",
    tile: ["#065f46", "#10b981"],
    badge: "Kasuwa Express",
    stock: 61,
    description:
      "Budget flagship styling with a 90Hz panel and dual speakers. The battery is "
      + "the headline: 5000mAh with genuinely conservative power management.",
    specs: [
      { label: "Display", value: '6.56" HD+ 90Hz' },
      { label: "Storage", value: "128GB" },
      { label: "RAM", value: "4GB" },
      { label: "Camera", value: "50MP dual, 8MP front" },
      { label: "Battery", value: "5000mAh" },
    ],
  },
  {
    id: "samsung-a15",
    name: "Galaxy A15 128GB Dual SIM",
    brand: "Samsung",
    category: "phones-tablets",
    price: 289000,
    rating: 4.6,
    reviews: 842,
    emoji: "📱",
    tile: ["#4c1d95", "#8b5cf6"],
    badge: "Official Store",
    stock: 12,
    description:
      "Super AMOLED at this price is the reason to buy it. Four years of security "
      + "updates puts it well ahead of anything else in the bracket.",
    specs: [
      { label: "Display", value: '6.5" Super AMOLED' },
      { label: "Storage", value: "128GB" },
      { label: "RAM", value: "6GB" },
      { label: "Camera", value: "50MP triple" },
      { label: "Battery", value: "5000mAh, 25W" },
    ],
  },
  {
    id: "ipad-10th-gen",
    name: "iPad 10th Gen 64GB Wi-Fi",
    brand: "Apple",
    category: "phones-tablets",
    price: 685000,
    oldPrice: 749000,
    rating: 4.8,
    reviews: 356,
    emoji: "📱",
    tile: ["#334155", "#94a3b8"],
    stock: 7,
    badge: "Few units left",
    description:
      "The all-rounder tablet. Fast enough for editing on the move, and the "
      + "10.9-inch laminated display is a real step up from the older base model.",
    specs: [
      { label: "Display", value: '10.9" Liquid Retina' },
      { label: "Chip", value: "A14 Bionic" },
      { label: "Storage", value: "64GB" },
      { label: "Camera", value: "12MP wide, 12MP front" },
      { label: "Battery", value: "Up to 10 hours" },
    ],
  },
  {
    id: "hp-pavilion-15",
    name: "Pavilion 15 Core i5 512GB SSD",
    brand: "HP",
    category: "computing",
    price: 895000,
    oldPrice: 1050000,
    rating: 4.3,
    reviews: 218,
    emoji: "💻",
    tile: ["#0f172a", "#475569"],
    badge: "Official Store",
    stock: 9,
    description:
      "A dependable work laptop: 12th-gen i5, 16GB RAM and an SSD that makes the "
      + "whole machine feel quicker than the spec sheet suggests.",
    specs: [
      { label: "Processor", value: "Intel Core i5-1235U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "512GB NVMe SSD" },
      { label: "Display", value: '15.6" FHD IPS' },
      { label: "OS", value: "Windows 11 Home" },
    ],
  },
  {
    id: "macbook-air-m2",
    name: 'MacBook Air 13" M2 256GB',
    brand: "Apple",
    category: "computing",
    price: 1685000,
    rating: 4.9,
    reviews: 412,
    emoji: "💻",
    tile: ["#1c1917", "#78716c"],
    badge: "Official Store",
    stock: 4,
    description:
      "Silent, cool and it genuinely lasts the day. Still the machine to beat for "
      + "anyone writing code or editing photos away from a desk.",
    specs: [
      { label: "Chip", value: "Apple M2, 8-core" },
      { label: "RAM", value: "8GB unified" },
      { label: "Storage", value: "256GB SSD" },
      { label: "Display", value: '13.6" Liquid Retina' },
      { label: "Battery", value: "Up to 18 hours" },
    ],
  },
  {
    id: "logitech-mx-master-3s",
    name: "MX Master 3S Wireless Mouse",
    brand: "Logitech",
    category: "computing",
    price: 96500,
    oldPrice: 118000,
    rating: 4.7,
    reviews: 1044,
    emoji: "🖱️",
    tile: ["#155e75", "#22d3ee"],
    stock: 33,
    description:
      "The quiet-click version. Flows across three machines and the horizontal "
      + "scroll wheel is worth the price on its own if you live in spreadsheets.",
    specs: [
      { label: "Sensor", value: "8000 DPI Darkfield" },
      { label: "Connection", value: "Bluetooth / Bolt receiver" },
      { label: "Battery", value: "70 days per charge" },
      { label: "Devices", value: "Up to 3, with Flow" },
    ],
  },
  {
    id: "hisense-43-smart-tv",
    name: '43" A6 Series 4K UHD Smart TV',
    brand: "Hisense",
    category: "electronics",
    price: 385000,
    oldPrice: 455000,
    rating: 4.1,
    reviews: 627,
    emoji: "📺",
    tile: ["#7c2d12", "#f97316"],
    badge: "Kasuwa Express",
    stock: 18,
    description:
      "4K with Dolby Vision and a VIDAA interface that stays out of the way. "
      + "Bright enough for a sitting room with the curtains open.",
    specs: [
      { label: "Screen", value: '43" 4K UHD' },
      { label: "HDR", value: "Dolby Vision, HDR10+" },
      { label: "Ports", value: "3× HDMI, 2× USB" },
      { label: "Smart", value: "VIDAA U6" },
    ],
  },
  {
    id: "jbl-flip-6",
    name: "Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "electronics",
    price: 128000,
    rating: 4.6,
    reviews: 2311,
    emoji: "🔊",
    tile: ["#831843", "#ec4899"],
    stock: 47,
    description:
      "IP67 rated, so rain and dust are non-issues. Twelve hours of playback and "
      + "far more low end than something this size has any right to produce.",
    specs: [
      { label: "Output", value: "30W RMS" },
      { label: "Battery", value: "12 hours" },
      { label: "Rating", value: "IP67 waterproof" },
      { label: "Bluetooth", value: "5.1, PartyBoost" },
    ],
  },
  {
    id: "anker-powerbank-20k",
    name: "PowerCore 20000mAh Power Bank",
    brand: "Anker",
    category: "electronics",
    price: 42500,
    oldPrice: 55000,
    rating: 4.5,
    reviews: 5106,
    emoji: "🔋",
    tile: ["#134e4a", "#14b8a6"],
    badge: "Kasuwa Express",
    stock: 120,
    description:
      "Charges a phone four to five times over. The 20W USB-C port will also top "
      + "up a tablet at a sensible speed.",
    specs: [
      { label: "Capacity", value: "20000mAh" },
      { label: "Output", value: "20W USB-C PD" },
      { label: "Ports", value: "1× USB-C, 2× USB-A" },
      { label: "Recharge", value: "~6 hours" },
    ],
  },
  {
    id: "nike-air-force-1",
    name: "Air Force 1 '07 Low Trainers",
    brand: "Nike",
    category: "fashion",
    price: 168000,
    oldPrice: 195000,
    rating: 4.7,
    reviews: 1873,
    emoji: "👟",
    tile: ["#0c4a6e", "#38bdf8"],
    stock: 28,
    description:
      "The one that never goes out of rotation. Leather upper, Air cushioning, "
      + "and it survives being worn several times a week.",
    specs: [
      { label: "Upper", value: "Full-grain leather" },
      { label: "Sole", value: "Rubber cupsole, Air unit" },
      { label: "Sizes", value: "EU 39 – 46" },
      { label: "Colour", value: "Triple White" },
    ],
  },
  {
    id: "ankara-two-piece",
    name: "Tailored Ankara Two-Piece Set",
    brand: "Zuri",
    category: "fashion",
    price: 38500,
    rating: 4.4,
    reviews: 296,
    emoji: "👗",
    tile: ["#713f12", "#eab308"],
    badge: "Few units left",
    stock: 6,
    description:
      "Cut from wax print cotton and finished with a lined bodice. Made to order "
      + "in Lagos, so allow three days before dispatch.",
    specs: [
      { label: "Fabric", value: "100% wax print cotton" },
      { label: "Fit", value: "True to size" },
      { label: "Care", value: "Cold hand wash" },
      { label: "Made", value: "Lagos, Nigeria" },
    ],
  },
  {
    id: "casio-mtp-watch",
    name: "MTP-1374 Stainless Steel Watch",
    brand: "Casio",
    category: "fashion",
    price: 47900,
    oldPrice: 62000,
    rating: 4.5,
    reviews: 731,
    emoji: "⌚",
    tile: ["#292524", "#a8a29e"],
    stock: 41,
    description:
      "Quiet, well-proportioned and it goes with everything. 50m water resistance "
      + "means you can forget it's on.",
    specs: [
      { label: "Case", value: "40mm stainless steel" },
      { label: "Movement", value: "Quartz analogue" },
      { label: "Water", value: "50m resistant" },
      { label: "Battery", value: "~3 years" },
    ],
  },
  {
    id: "binatone-blender",
    name: "BLG-450 2-in-1 Blender & Grinder",
    brand: "Binatone",
    category: "home-kitchen",
    price: 54900,
    oldPrice: 68000,
    rating: 4.2,
    reviews: 1120,
    emoji: "🍹",
    tile: ["#3f6212", "#84cc16"],
    badge: "Kasuwa Express",
    stock: 52,
    description:
      "Handles pepper and egusi without complaint, which is the only test that "
      + "matters. Comes with a separate dry mill jar.",
    specs: [
      { label: "Power", value: "450W" },
      { label: "Jars", value: "1.5L wet, dry mill" },
      { label: "Speeds", value: "2 + pulse" },
      { label: "Blades", value: "Stainless steel" },
    ],
  },
  {
    id: "rechargeable-fan-18",
    name: '18" Rechargeable Standing Fan',
    brand: "Century",
    category: "home-kitchen",
    price: 78500,
    rating: 4.0,
    reviews: 884,
    emoji: "💨",
    tile: ["#1e40af", "#60a5fa"],
    stock: 31,
    description:
      "Built for an unreliable grid: runs about eight hours on a full charge, "
      + "with an LED lamp and remote included.",
    specs: [
      { label: "Blade", value: '18" ABS' },
      { label: "Runtime", value: "6 – 8 hours" },
      { label: "Battery", value: "12V rechargeable" },
      { label: "Extras", value: "Remote, LED light" },
    ],
  },
  {
    id: "nonstick-pot-set",
    name: "7-Piece Granite Non-Stick Pot Set",
    brand: "Dessini",
    category: "home-kitchen",
    price: 92000,
    oldPrice: 125000,
    rating: 4.3,
    reviews: 502,
    emoji: "🍳",
    tile: ["#7f1d1d", "#ef4444"],
    stock: 15,
    description:
      "Heavy-based and evenly heated, with glass lids. Not induction compatible, "
      + "so check your hob before ordering.",
    specs: [
      { label: "Pieces", value: "7 (3 pots, pan, lids)" },
      { label: "Coating", value: "Granite non-stick" },
      { label: "Base", value: "Die-cast aluminium" },
      { label: "Hob", value: "Gas and electric" },
    ],
  },
  {
    id: "nivea-body-lotion",
    name: "Perfect & Radiant Body Lotion 400ml",
    brand: "Nivea",
    category: "health-beauty",
    price: 8900,
    rating: 4.6,
    reviews: 4402,
    emoji: "🧴",
    tile: ["#1e3a8a", "#93c5fd"],
    badge: "Kasuwa Express",
    stock: 210,
    description:
      "Everyday lotion with SPF 15. Absorbs quickly and doesn't leave the greasy "
      + "film that most of this category does.",
    specs: [
      { label: "Volume", value: "400ml" },
      { label: "SPF", value: "15" },
      { label: "Skin type", value: "All" },
      { label: "Scent", value: "Light floral" },
    ],
  },
  {
    id: "oraimo-smartwatch",
    name: "Watch 3 Pro Fitness Smartwatch",
    brand: "Oraimo",
    category: "health-beauty",
    price: 34500,
    oldPrice: 45000,
    rating: 4.1,
    reviews: 1637,
    emoji: "⌚",
    tile: ["#4a044e", "#c026d3"],
    stock: 74,
    description:
      "Step count, heart rate and sleep tracking with a fortnight of battery. The "
      + "app is decent and doesn't demand an account for basic features.",
    specs: [
      { label: "Display", value: '1.8" TFT' },
      { label: "Battery", value: "Up to 14 days" },
      { label: "Rating", value: "IP68" },
      { label: "Sensors", value: "HR, SpO2, sleep" },
    ],
  },
  {
    id: "golden-penny-semovita",
    name: "Semovita 10kg Bag",
    brand: "Golden Penny",
    category: "supermarket",
    price: 18400,
    oldPrice: 21500,
    rating: 4.7,
    reviews: 2894,
    emoji: "🌾",
    tile: ["#78350f", "#f59e0b"],
    badge: "Kasuwa Express",
    stock: 340,
    description:
      "Standard 10kg bag. Smooth swallow, and the resealable inner liner keeps "
      + "weevils out for longer than the paper packs.",
    specs: [
      { label: "Weight", value: "10kg" },
      { label: "Packaging", value: "Resealable liner" },
      { label: "Shelf life", value: "12 months" },
    ],
  },
  {
    id: "peak-milk-powder",
    name: "Peak Full Cream Milk Powder 900g",
    brand: "Peak",
    category: "supermarket",
    price: 14200,
    rating: 4.8,
    reviews: 5217,
    emoji: "🥛",
    tile: ["#1e40af", "#bfdbfe"],
    stock: 180,
    description:
      "The 900g refill tin. Dissolves without lumps in hot or cold water.",
    specs: [
      { label: "Weight", value: "900g" },
      { label: "Type", value: "Full cream" },
      { label: "Servings", value: "~36" },
    ],
  },
  {
    id: "indomie-carton",
    name: "Chicken Flavour Noodles — Carton of 40",
    brand: "Indomie",
    category: "supermarket",
    price: 12800,
    oldPrice: 15000,
    rating: 4.9,
    reviews: 8842,
    emoji: "🍜",
    tile: ["#9a3412", "#fb923c"],
    badge: "Kasuwa Express",
    stock: 96,
    description: "Forty 70g packs. There is nothing more to say about this.",
    specs: [
      { label: "Packs", value: "40 × 70g" },
      { label: "Flavour", value: "Chicken" },
      { label: "Shelf life", value: "9 months" },
    ],
  },
  {
    id: "ps5-slim",
    name: "PlayStation 5 Slim Disc Edition",
    brand: "Sony",
    category: "gaming",
    price: 1149000,
    oldPrice: 1290000,
    rating: 4.9,
    reviews: 673,
    emoji: "🎮",
    tile: ["#0c0a09", "#57534e"],
    badge: "Few units left",
    stock: 3,
    description:
      "The slim revision with the detachable disc drive. Includes one DualSense "
      + "controller; region-free for game discs.",
    specs: [
      { label: "Storage", value: "1TB SSD" },
      { label: "Output", value: "4K 120Hz, 8K ready" },
      { label: "Includes", value: "1× DualSense" },
      { label: "Drive", value: "Detachable Blu-ray" },
    ],
  },
  {
    id: "dualsense-controller",
    name: "DualSense Wireless Controller",
    brand: "Sony",
    category: "gaming",
    price: 118500,
    rating: 4.7,
    reviews: 1429,
    emoji: "🎮",
    tile: ["#1e1b4b", "#818cf8"],
    stock: 22,
    description:
      "Haptic feedback and adaptive triggers, which genuinely change how some "
      + "games feel. USB-C charging.",
    specs: [
      { label: "Connection", value: "Bluetooth / USB-C" },
      { label: "Battery", value: "~10 hours" },
      { label: "Features", value: "Haptics, adaptive triggers" },
      { label: "Colour", value: "Midnight Black" },
    ],
  },
  {
    id: "gaming-headset-h3",
    name: "H3 Wired Gaming Headset",
    brand: "Fantech",
    category: "gaming",
    price: 28900,
    oldPrice: 36000,
    rating: 4.0,
    reviews: 918,
    emoji: "🎧",
    tile: ["#581c87", "#a855f7"],
    stock: 64,
    description:
      "Over-ear with a detachable boom mic. Cushions are replaceable, which is "
      + "rare at this price.",
    specs: [
      { label: "Drivers", value: "50mm" },
      { label: "Connection", value: "3.5mm + USB (lighting)" },
      { label: "Mic", value: "Detachable, noise-cancelling" },
      { label: "Weight", value: "320g" },
    ],
  },
];

/* ── Query helpers. Everything runs on the server. ───────────── */

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function byCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function discountPercent(product: Product): number | null {
  if (!product.oldPrice) return null;
  return Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );
}

export type SortKey = "relevance" | "price-asc" | "price-desc" | "rating";

/**
 * Single entry point for the listing pages. Filtering and sorting happen
 * server-side; the client only ever sends the query string.
 */
export function search({
  q = "",
  category = "",
  sort = "relevance",
  maxPrice,
}: {
  q?: string;
  category?: string;
  sort?: SortKey;
  maxPrice?: number;
}): Product[] {
  const term = q.trim().toLowerCase();

  let results = products.filter((p) => {
    if (category && p.category !== category) return false;
    if (maxPrice !== undefined && p.price > maxPrice) return false;
    if (!term) return true;

    // The category name has to be part of the haystack, otherwise searching
    // "phone" misses every phone — none of them carry the word in their name.
    const categoryName = getCategory(p.category)?.name ?? "";

    return [p.name, p.brand, p.description, categoryName, p.category].some(
      (field) => field.toLowerCase().includes(term),
    );
  });

  switch (sort) {
    case "price-asc":
      results = [...results].sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      results = [...results].sort((a, b) => b.price - a.price);
      break;
    case "rating":
      results = [...results].sort((a, b) => b.rating - a.rating);
      break;
  }

  return results;
}

export const priceCeiling = Math.max(...products.map((p) => p.price));
