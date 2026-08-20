"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { ProductTile } from "@/components/ProductTile";
import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";

const FREE_DELIVERY_OVER = 50000;
const DELIVERY_FEE = 2500;

/**
 * Receives the full catalogue from the server component and joins it against
 * the cart lines held in context, so the cart never has to store price or
 * name — only an id and a quantity. Prices can change without stale copies
 * sitting in anyone's localStorage.
 */
export function CartView({ catalogue }: { catalogue: Product[] }) {
  const { lines, setQuantity, remove, clear } = useCart();

  const items = lines
    .map((line) => {
      const product = catalogue.find((p) => p.id === line.productId);
      return product ? { product, quantity: line.quantity } : null;
    })
    .filter((item): item is { product: Product; quantity: number } =>
      Boolean(item),
    );

  if (items.length === 0) {
    return (
      <div className="rounded-lg bg-card px-4 py-20 text-center">
        <p className="mb-1 text-4xl" aria-hidden="true">
          🛒
        </p>
        <h2 className="mb-1 text-lg font-semibold text-ink">
          Your cart is empty
        </h2>
        <p className="mb-6 text-sm text-muted">
          Browse the catalogue and add something you like.
        </p>
        <Link
          href="/products"
          className="inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const delivery = subtotal >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;
  const shortfall = FREE_DELIVERY_OVER - subtotal;

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-3">
        <ul className="space-y-3">
          {items.map(({ product, quantity }) => (
            <li
              key={product.id}
              className="flex gap-4 rounded-lg bg-card p-4"
            >
              <div className="w-20 shrink-0 sm:w-24">
                <ProductTile product={product} size="sm" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <Link
                  href={`/products/${product.id}`}
                  className="text-sm font-medium leading-snug text-ink hover:text-brand-dark hover:underline"
                >
                  {product.brand} {product.name}
                </Link>
                <p className="mt-0.5 text-xs text-muted">
                  {product.stock > 5
                    ? "In stock"
                    : `Only ${product.stock} left`}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
                  <div className="flex items-center rounded border border-line">
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity - 1)}
                      aria-label={`Decrease quantity of ${product.name}`}
                      className="px-2.5 py-1 text-lg leading-none text-body transition-colors hover:bg-page"
                    >
                      −
                    </button>
                    <span className="w-9 text-center text-sm font-medium tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(product.id, quantity + 1)}
                      disabled={quantity >= product.stock}
                      aria-label={`Increase quantity of ${product.name}`}
                      className="px-2.5 py-1 text-lg leading-none text-body transition-colors hover:bg-page disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold text-ink">
                    {formatPrice(product.price * quantity)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => remove(product.id)}
                aria-label={`Remove ${product.name} from cart`}
                className="shrink-0 self-start rounded p-1 text-muted transition-colors hover:bg-page hover:text-sale"
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={clear}
          className="text-sm text-muted transition-colors hover:text-sale hover:underline"
        >
          Clear cart
        </button>
      </div>

      <aside className="h-fit rounded-lg bg-card p-4 lg:sticky lg:top-40">
        <h2 className="mb-3 font-bold text-ink">Order summary</h2>

        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted">Subtotal</dt>
            <dd className="font-medium text-ink">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted">Delivery</dt>
            <dd className="font-medium text-ink">
              {delivery === 0 ? (
                <span className="text-ok">Free</span>
              ) : (
                formatPrice(delivery)
              )}
            </dd>
          </div>
          <div className="flex justify-between border-t border-line pt-2 text-base">
            <dt className="font-semibold text-ink">Total</dt>
            <dd className="font-extrabold text-ink">
              {formatPrice(subtotal + delivery)}
            </dd>
          </div>
        </dl>

        {shortfall > 0 && (
          <p className="mt-3 rounded bg-brand-tint px-3 py-2 text-xs text-brand-dark">
            Add {formatPrice(shortfall)} more for free delivery.
          </p>
        )}

        <button
          type="button"
          className="mt-4 w-full rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Proceed to checkout
        </button>

        <p className="mt-2 text-center text-xs text-muted">
          Demo storefront — checkout is not connected.
        </p>
      </aside>
    </div>
  );
}
