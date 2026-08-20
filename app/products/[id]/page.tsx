import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  byCategory,
  discountPercent,
  getCategory,
  getProduct,
  products,
} from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { ProductTile } from "@/components/ProductTile";
import { ProductCard } from "@/components/ProductCard";
import { Stars } from "@/components/Stars";
import { AddToCart } from "@/components/AddToCart";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return { title: "Product not found" };

  return {
    title: `${product.brand} ${product.name}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const category = getCategory(product.category);
  const discount = discountPercent(product);
  const related = byCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-brand-dark hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/category/${product.category}`}
              className="hover:text-brand-dark hover:underline"
            >
              {category?.name}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="grid gap-4 rounded-lg bg-card p-4 sm:grid-cols-2">
          <ProductTile product={product} size="lg" />

          <div>
            <p className="text-sm text-muted">{product.brand}</p>
            <h1 className="mb-2 text-xl font-bold leading-snug text-ink">
              {product.name}
            </h1>

            <div className="mb-4">
              <Stars rating={product.rating} reviews={product.reviews} />
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <p className="text-2xl font-extrabold text-ink">
                  {formatPrice(product.price)}
                </p>
                {product.oldPrice && (
                  <>
                    <p className="text-sm text-muted line-through">
                      {formatPrice(product.oldPrice)}
                    </p>
                    <span className="rounded bg-brand-tint px-1.5 py-0.5 text-xs font-semibold text-sale">
                      -{discount}%
                    </span>
                  </>
                )}
              </div>

              <p className="mt-1 text-sm">
                {product.stock > 5 ? (
                  <span className="text-ok">In stock</span>
                ) : product.stock > 0 ? (
                  <span className="font-medium text-sale">
                    Only {product.stock} left in stock
                  </span>
                ) : (
                  <span className="text-muted">Out of stock</span>
                )}
              </p>
            </div>

            <p className="mb-4 text-sm leading-relaxed text-body">
              {product.description}
            </p>

            {product.badge && (
              <span className="inline-block rounded bg-brand-tint px-2 py-1 text-xs font-medium text-brand-dark">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg bg-card p-4">
            <AddToCart productId={product.id} stock={product.stock} />
          </div>

          <div className="rounded-lg bg-card p-4 text-sm">
            <h2 className="mb-3 font-semibold text-ink">Delivery</h2>
            <ul className="space-y-2.5 text-body">
              <li className="flex gap-2.5">
                <span aria-hidden="true">🚚</span>
                <span>
                  Delivery within 2–4 business days.{" "}
                  <span className="text-muted">Free over ₦50,000.</span>
                </span>
              </li>
              <li className="flex gap-2.5">
                <span aria-hidden="true">📦</span>
                <span>Pay on delivery available</span>
              </li>
              <li className="flex gap-2.5">
                <span aria-hidden="true">↩️</span>
                <span>7-day free return window</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <section className="rounded-lg bg-card p-4">
        <h2 className="mb-3 font-bold text-ink">Specifications</h2>
        <dl className="divide-y divide-line">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex gap-4 py-2.5 text-sm">
              <dt className="w-32 shrink-0 text-muted">{spec.label}</dt>
              <dd className="text-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-ink">
            More in {category?.name}
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {related.map((item) => (
              <li key={item.id}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
