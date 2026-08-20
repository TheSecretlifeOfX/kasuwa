import type { Metadata } from "next";
import { products } from "@/lib/products";
import { CartView } from "./CartView";

export const metadata: Metadata = {
  title: "Your cart",
};

export default function CartPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-ink">Your cart</h1>
      {/* The catalogue is read on the server and passed down; the client
          component only holds ids and quantities. */}
      <CartView catalogue={products} />
    </div>
  );
}
