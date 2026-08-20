"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * Submits to /products with the term in the query string. Search state lives
 * in the URL, so results are shareable, bookmarkable and survive a reload.
 */
export function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();
  const [term, setTerm] = useState(params.get("q") ?? "");

  // Keep the field in step when navigation changes the query (back button,
  // a category link, clearing the search).
  useEffect(() => {
    setTerm(params.get("q") ?? "");
  }, [params]);

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const next = new URLSearchParams();
        if (term.trim()) next.set("q", term.trim());
        router.push(`/products${next.size ? `?${next}` : ""}`);
      }}
      className="flex flex-1 items-stretch overflow-hidden rounded bg-white"
    >
      <label htmlFor="site-search" className="sr-only">
        Search products
      </label>
      <input
        id="site-search"
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search products, brands and categories"
        className="min-w-0 flex-1 px-3 py-2 text-sm text-ink outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="shrink-0 bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:px-6"
      >
        Search
      </button>
    </form>
  );
}
