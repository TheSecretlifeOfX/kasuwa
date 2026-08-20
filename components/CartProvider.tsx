"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import type { CartLine } from "@/lib/types";

const STORAGE_KEY = "kasuwa.cart";

type Action =
  | { type: "add"; productId: string; quantity?: number }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" }
  | { type: "hydrate"; lines: CartLine[] };

function reducer(state: CartLine[], action: Action): CartLine[] {
  switch (action.type) {
    case "hydrate":
      return action.lines;

    case "add": {
      const qty = action.quantity ?? 1;
      const existing = state.find((l) => l.productId === action.productId);
      if (!existing) return [...state, { productId: action.productId, quantity: qty }];
      return state.map((l) =>
        l.productId === action.productId
          ? { ...l, quantity: l.quantity + qty }
          : l,
      );
    }

    case "setQuantity":
      if (action.quantity < 1) {
        return state.filter((l) => l.productId !== action.productId);
      }
      return state.map((l) =>
        l.productId === action.productId
          ? { ...l, quantity: action.quantity }
          : l,
      );

    case "remove":
      return state.filter((l) => l.productId !== action.productId);

    case "clear":
      return [];
  }
}

type CartContextValue = {
  lines: CartLine[];
  count: number;
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, dispatch] = useReducer(reducer, []);

  // Read once on mount. Rendering an empty cart on the server and filling it
  // in after hydration keeps the markup identical on both sides.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed: unknown = JSON.parse(raw);
      if (!Array.isArray(parsed)) return;
      const valid = parsed.filter(
        (l): l is CartLine =>
          typeof l === "object" &&
          l !== null &&
          typeof (l as CartLine).productId === "string" &&
          typeof (l as CartLine).quantity === "number",
      );
      if (valid.length) dispatch({ type: "hydrate", lines: valid });
    } catch {
      // Corrupt or unavailable storage — start with an empty cart.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage full or blocked; the cart still works for this session.
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: lines.reduce((sum, l) => sum + l.quantity, 0),
      add: (productId, quantity) =>
        dispatch({ type: "add", productId, quantity }),
      remove: (productId) => dispatch({ type: "remove", productId }),
      setQuantity: (productId, quantity) =>
        dispatch({ type: "setQuantity", productId, quantity }),
      clear: () => dispatch({ type: "clear" }),
    }),
    [lines],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }
  return context;
}
