import Link from "next/link";
import type { Product } from "@/lib/types";
import { discountPercent } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { ProductTile } from "./ProductTile";
import { Stars } from "./Stars";

export function ProductCard({ product }: { product: Product }) {
  const discount = discountPercent(product);

  return (
    <article className="group relative flex flex-col rounded-lg bg-card p-3 transition-shadow hover:shadow-md">
      <div className="relative mb-3">
        <ProductTile product={product} />
        {discount !== null && (
          <span className="absolute right-2 top-2 rounded bg-brand-tint px-1.5 py-0.5 text-xs font-semibold text-sale">
            -{discount}%
          </span>
        )}
      </div>

      <h3 className="mb-1 line-clamp-2 text-sm leading-snug text-body">
        <Link
          href={`/products/${product.id}`}
          className="after:absolute after:inset-0 after:content-['']"
        >
          <span className="font-medium text-ink">{product.brand}</span>{" "}
          {product.name}
        </Link>
      </h3>

      <div className="mt-auto">
        <p className="font-semibold text-ink">{formatPrice(product.price)}</p>
        {product.oldPrice && (
          <p className="text-xs text-muted line-through">
            {formatPrice(product.oldPrice)}
          </p>
        )}

        <div className="mt-1.5">
          <Stars rating={product.rating} reviews={product.reviews} />
        </div>

        {product.badge && (
          <span className="mt-2 inline-block rounded bg-brand-tint px-1.5 py-0.5 text-[11px] font-medium text-brand-dark">
            {product.badge}
          </span>
        )}

        {product.stock <= 5 && (
          <p className="mt-1.5 text-[11px] font-medium text-sale">
            Only {product.stock} left
          </p>
        )}
      </div>
    </article>
  );
}
