import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { byCategory, categories, getCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found" };
  return {
    title: category.name,
    description: `Shop ${category.name.toLowerCase()} on Kasuwa.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = byCategory(slug);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-lg bg-card p-5">
        <span className="text-3xl" aria-hidden="true">
          {category.icon}
        </span>
        <div>
          <h1 className="text-xl font-bold text-ink">{category.name}</h1>
          <p className="text-sm text-muted">
            {items.length} {items.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="rounded-lg bg-card px-4 py-16 text-center text-muted">
          Nothing in this category yet.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {items.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
