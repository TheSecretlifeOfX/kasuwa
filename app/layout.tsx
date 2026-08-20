import type { Metadata } from "next";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { StarGradientDef } from "@/components/Stars";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kasuwa — Online Shopping for Nigeria",
    template: "%s | Kasuwa",
  },
  description:
    "Shop phones, electronics, fashion, groceries and more. Fast delivery "
    + "across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <StarGradientDef />
        <CartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="mx-auto max-w-7xl px-4 py-5">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-10 bg-ink py-8 text-sm text-white/70">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-3">
        <div>
          <p className="mb-2 font-bold text-white">kasuwa.</p>
          <p className="leading-relaxed">
            A demonstration storefront built with Next.js. Not a real shop —
            no orders are placed and no payments are taken.
          </p>
        </div>
        <div>
          <p className="mb-2 font-semibold text-white">Customer service</p>
          <ul className="space-y-1">
            <li>Help centre</li>
            <li>Delivery &amp; returns</li>
            <li>Track your order</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold text-white">Payment</p>
          <ul className="space-y-1">
            <li>Pay on delivery</li>
            <li>Card &amp; bank transfer</li>
            <li>Buy now, pay later</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
