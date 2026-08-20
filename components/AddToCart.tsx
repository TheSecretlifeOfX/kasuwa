"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";

export function AddToCart({
  productId,
  stock,
}: {
  productId: string;
  stock: number;
}) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (stock === 0) {
    return (
      <p className="rounded-lg bg-page px-4 py-3 text-center text-sm font-medium text-muted">
        Out of stock
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-sm text-body">Quantity</span>
        <div className="flex items-center rounded border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="px-3 py-1.5 text-lg leading-none text-body transition-colors hover:bg-page disabled:opacity-40"
          >
            −
          </button>
          <span
            aria-live="polite"
            className="w-10 text-center text-sm font-medium tabular-nums"
          >
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(stock, q + 1))}
            disabled={quantity >= stock}
            aria-label="Increase quantity"
            className="px-3 py-1.5 text-lg leading-none text-body transition-colors hover:bg-page disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          add(productId, quantity);
          setAdded(true);
          setTimeout(() => setAdded(false), 1800);
        }}
        className="w-full rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        {added ? "Added to cart ✓" : "Add to cart"}
      </button>

      <p aria-live="polite" className="sr-only">
        {added ? `${quantity} added to cart` : ""}
      </p>
    </div>
  );
}
