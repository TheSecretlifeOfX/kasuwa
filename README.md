# Kasuwa

**Live demo → [kasuwa-dusky.vercel.app](https://kasuwa-dusky.vercel.app)**

A demonstration e-commerce storefront modelled on Nigerian marketplaces like
Jumia. Built with Next.js 15, TypeScript and Tailwind CSS.

**Not a real shop.** No orders are placed, no payments are taken, and checkout
is deliberately inert.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3001.

```bash
npm run build   # production build
npm start       # serve the build
```

## What it does

- **Browse** 24 products across 8 categories
- **Search** by name, brand, description or category
- **Filter** by category and **sort** by price or customer rating
- **Product pages** with specifications, stock states and related items
- **Cart** with quantity controls, a live subtotal and a free-delivery threshold
- **Persistence** — the cart survives a refresh and a browser restart

## How it's built

```
app/
  layout.tsx              shell, cart provider, header/footer
  page.tsx                home — hero, categories, deals, top rated
  products/page.tsx       listing with search, filter and sort
  products/[id]/page.tsx  product detail (prerendered per product)
  category/[slug]/page.tsx category listing (prerendered per category)
  cart/page.tsx           cart, with CartView as its client half
components/               header, cards, filters, cart provider
lib/
  products.ts             the catalogue and every query helper
  types.ts                shared types
  format.ts               naira and number formatting
```

A few decisions worth calling out:

**No API keys anywhere.** The catalogue is local, typed data read on the
server. There is no third-party service to authenticate against and therefore
no secret that could leak into the client bundle.

**Search and filter state lives in the URL.** `/products?q=phone&sort=price-asc`
is a complete description of what you're looking at, so results can be shared,
bookmarked and reloaded. The client components only ever push a query string;
the actual filtering runs on the server in `lib/products.ts`.

**The cart stores ids and quantities, nothing else.** Names and prices are
joined from the catalogue at render time, so a price change can never leave a
stale figure sitting in someone's `localStorage`.

**Query parameters are validated.** A hand-edited `?sort=` value falls back to
the default rather than throwing.

**Static where possible.** All 24 product pages and 8 category pages are
prerendered at build time. Only `/products` is dynamic, because it depends on
the query string.

## Product images

Products render as gradient tiles with an emoji rather than photographs, to
keep the repository self-contained and free of licensing questions. Swapping in
real images means replacing `components/ProductTile.tsx` with `next/image` and
adding an `image` field to the `Product` type in `lib/types.ts`.

## Known limitations

- Checkout is a dead button — there is no payment integration
- No accounts, orders or persistence beyond the browser
- The catalogue is a static file, not a database
