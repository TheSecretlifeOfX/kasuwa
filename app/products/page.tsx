import type { Metadata } from "next";
import { Suspense } from "react";
import { search, type SortKey } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Filters } from "@/components/Filters";

export const metadata: Metadata = {
  title: "All products",
};

type Props = {
  searchParams: Promise<{ q?: string; category?: string; sort?: string }>;
};

const SORTS: SortKey[] = ["relevance", "price-asc", "price-desc", "rating"];

export default async function ProductsPage({ searchParams }: Props) {
  const { q = "", category = "", sort = "relevance" } = await searchParams;

  // Never trust the query string — fall back if it's been hand-edited.
  const safeSort: SortKey = SORTS.includes(sort as SortKey)
    ? (sort as SortKey)
    : "relevance";

  const results = search({ q, category, sort: safeSort });

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold text-ink">
        {q ? `Results for "${q}"` : "All products"}
      </h1>

      <Suspense fallback={<div className="h-32 rounded-lg bg-card" />}>
        <Filters total={results.length} />
      </Suspense>

      {results.length === 0 ? (
        <div className="rounded-lg bg-card px-4 py-16 text-center">
          <p className="mb-1 text-lg font-semibold text-ink">
            No products matched
          </p>
          <p className="text-sm text-muted">
            Try a shorter search term, or clear the filters above.
          </p>
        </div>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
