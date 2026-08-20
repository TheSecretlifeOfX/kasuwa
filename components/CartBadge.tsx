"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "./CartProvider";

export function CartBadge() {
  const { count } = useCart();
  const [bump, setBump] = useState(false);
  const previous = useRef(count);

  useEffect(() => {
    if (count > previous.current) {
      setBump(true);
      const timer = setTimeout(() => setBump(false), 360);
      return () => clearTimeout(timer);
    }
    previous.current = count;
  }, [count]);

  useEffect(() => {
    previous.current = count;
  }, [count]);

  return (
    <Link
      href="/cart"
      className="relative flex items-center gap-2 rounded px-2 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
    >
      <span className="relative">
        <CartIcon />
        {count > 0 && (
          <span
            className={`absolute -right-2 -top-1.5 flex size-4 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white ${
              bump ? "pop" : ""
            }`}
          >
            {count > 99 ? "99+" : count}
          </span>
        )}
      </span>
      <span className="hidden sm:inline">Cart</span>
    </Link>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2l2.3 12.1a1.6 1.6 0 0 0 1.6 1.3h8.5a1.6 1.6 0 0 0 1.6-1.3L21 7H5.1" />
    </svg>
  );
}
