"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/lib/products";

/**
 * Every control writes to the query string and lets the server re-render the
 * results. No product data is filtered on the client.
 */
export function Filters({ total }: { total: number }) {
  const router = useRouter();
  const params = useSearchParams();

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    router.push(`/products${next.size ? `?${next}` : ""}`);
  };

  const activeCategory = params.get("category") ?? "";
  const activeSort = params.get("sort") ?? "relevance";
  const hasFilters = Boolean(params.get("q") || activeCategory);

  return (
    <div className="space-y-4 rounded-lg bg-card p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          <span className="font-semibold text-ink">{total}</span>{" "}
          {total === 1 ? "product" : "products"} found
        </p>

        <label className="flex items-center gap-2 text-sm">
          <span className="text-muted">Sort by</span>
          <select
            value={activeSort}
            onChange={(e) => update("sort", e.target.value)}
            className="rounded border border-line bg-white px-2 py-1.5 text-sm text-ink"
          >
            <option value="relevance">Relevance</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="rating">Customer rating</option>
          </select>
        </label>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
          Category
        </p>
        <ul className="flex flex-wrap gap-2">
          <li>
            <button
              type="button"
              onClick={() => update("category", "")}
              aria-pressed={!activeCategory}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                !activeCategory
                  ? "border-brand bg-brand text-white"
                  : "border-line text-body hover:border-brand hover:text-brand-dark"
              }`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.slug}>
              <button
                type="button"
                onClick={() => update("category", category.slug)}
                aria-pressed={activeCategory === category.slug}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  activeCategory === category.slug
                    ? "border-brand bg-brand text-white"
                    : "border-line text-body hover:border-brand hover:text-brand-dark"
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={() => router.push("/products")}
          className="text-xs font-medium text-brand-dark hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
