export type CategorySlug =
  | "phones-tablets"
  | "computing"
  | "electronics"
  | "fashion"
  | "home-kitchen"
  | "health-beauty"
  | "supermarket"
  | "gaming";

export type Category = {
  slug: CategorySlug;
  name: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: CategorySlug;
  /** Kobo-free naira. Formatted for display in lib/format.ts. */
  price: number;
  /** Pre-discount price. Present only when the item is on offer. */
  oldPrice?: number;
  rating: number;
  reviews: number;
  /** Stands in for product photography — see README. */
  emoji: string;
  /** Two hex stops for the placeholder tile's gradient. */
  tile: [string, string];
  badge?: "Official Store" | "Kasuwa Express" | "Few units left";
  stock: number;
  description: string;
  specs: { label: string; value: string }[];
};

export type CartLine = {
  productId: string;
  quantity: number;
};
