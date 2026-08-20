import Link from "next/link";
import { Suspense } from "react";
import { categories } from "@/lib/products";
import { SearchBar } from "./SearchBar";
import { CartBadge } from "./CartBadge";

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-4 py-1.5 text-center text-xs text-white/90">
          Free delivery on orders over ₦50,000 — Lagos, Abuja and Ibadan
        </div>
      </div>

      <div className="bg-brand">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:gap-6">
          <Link
            href="/"
            className="shrink-0 text-xl font-extrabold tracking-tight text-white"
          >
            kasuwa
            <span className="text-white/70">.</span>
          </Link>

          {/* useSearchParams needs a Suspense boundary in the App Router. */}
          <Suspense
            fallback={<div className="h-9 flex-1 rounded bg-white/90" />}
          >
            <SearchBar />
          </Suspense>

          <CartBadge />
        </div>
      </div>

      <nav
        aria-label="Categories"
        className="border-b border-line bg-card shadow-sm"
      >
        <ul className="no-scrollbar mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center gap-1.5 whitespace-nowrap rounded px-3 py-1.5 text-sm text-body transition-colors hover:bg-brand-tint hover:text-brand-dark"
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
