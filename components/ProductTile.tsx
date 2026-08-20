import type { Product } from "@/lib/types";

/**
 * Stands in for product photography. Real listings would use next/image
 * against a CDN; this keeps the demo self-contained and free of broken
 * images while preserving the aspect ratio a real photo would occupy.
 */
export function ProductTile({
  product,
  size = "md",
}: {
  product: Product;
  size?: "sm" | "md" | "lg";
}) {
  const fontSize = { sm: "2rem", md: "3.25rem", lg: "6rem" }[size];

  return (
    <div
      className="flex aspect-square w-full items-center justify-center rounded-lg"
      style={{
        background: `linear-gradient(135deg, ${product.tile[0]}, ${product.tile[1]})`,
      }}
      role="img"
      aria-label={`${product.brand} ${product.name}`}
    >
      <span style={{ fontSize }} aria-hidden="true">
        {product.emoji}
      </span>
    </div>
  );
}
