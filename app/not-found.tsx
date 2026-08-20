import Link from "next/link";

export default function NotFound() {
  return (
    <div className="rounded-lg bg-card px-4 py-20 text-center">
      <p className="mb-2 text-sm font-semibold text-brand-dark">404</p>
      <h1 className="mb-1 text-lg font-bold text-ink">Page not found</h1>
      <p className="mb-6 text-sm text-muted">
        The page you were looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
