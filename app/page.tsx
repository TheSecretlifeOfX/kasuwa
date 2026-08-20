import Link from "next/link";
import { categories, discountPercent, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductTile } from "@/components/ProductTile";
import { formatPrice } from "@/lib/format";

export default function HomePage() {
  const deals = products
    .filter((p) => p.oldPrice)
    .sort((a, b) => (discountPercent(b) ?? 0) - (discountPercent(a) ?? 0))
    .slice(0, 6);

  const topRated = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 12);

  return (
    <div className="space-y-6">
      <section className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col justify-center rounded-lg bg-gradient-to-br from-brand to-brand-dark p-8 text-white sm:p-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-white/80">
            Independence sale
          </p>
          <h1 className="mb-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Up to 30% off phones,
            <br />
            laptops and home goods
          </h1>
          <p className="mb-6 max-w-md text-white/90">
            Free delivery on orders over ₦50,000. Pay on delivery available in
            Lagos, Abuja and Ibadan.
          </p>
          <Link
            href="/products"
            className="w-fit rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-dark transition-transform hover:-translate-y-0.5"
          >
            Shop all products
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {[
            { title: "Pay on delivery", body: "Inspect before you pay", icon: "📦" },
            { title: "Free returns", body: "7-day return window", icon: "↩️" },
            { title: "Genuine products", body: "Official store partners", icon: "✅" },
          ].map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-3 rounded-lg bg-card p-4"
            >
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="text-xs text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg bg-card p-4">
        <h2 className="mb-4 text-lg font-bold text-ink">Shop by category</h2>
        <ul className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className="flex flex-col items-center gap-2 rounded-lg p-2 text-center transition-colors hover:bg-brand-tint"
              >
                <span className="text-2xl" aria-hidden="true">
                  {category.icon}
                </span>
                <span className="text-xs leading-tight text-body">
                  {category.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg bg-card p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink">
            Flash deals
            <span className="ml-2 rounded bg-sale px-1.5 py-0.5 text-xs font-semibold text-white">
              Save big
            </span>
          </h2>
          <Link
            href="/products?sort=price-asc"
            className="text-sm font-medium text-brand-dark hover:underline"
          >
            See all
          </Link>
        </div>

        <ul className="no-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
          {deals.map((product) => (
            <li key={product.id} className="w-40 shrink-0 sm:w-48">
              <Link
                href={`/products/${product.id}`}
                className="block rounded-lg border border-line p-2 transition-shadow hover:shadow-md"
              >
                <div className="relative mb-2">
                  <ProductTile product={product} size="sm" />
                  <span className="absolute right-1 top-1 rounded bg-sale px-1.5 py-0.5 text-[11px] font-bold text-white">
                    -{discountPercent(product)}%
                  </span>
                </div>
                <p className="line-clamp-2 text-xs leading-snug text-body">
                  {product.name}
                </p>
                <p className="mt-1 text-sm font-bold text-ink">
                  {formatPrice(product.price)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-ink">Top rated</h2>
          <Link
            href="/products?sort=rating"
            className="text-sm font-medium text-brand-dark hover:underline"
          >
            See all
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {topRated.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
