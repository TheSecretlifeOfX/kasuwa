import { formatCount } from "@/lib/format";

const STAR_PATH =
  "M8 1.6l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.4l-3.8 2 .7-4.3-3.1-3 4.3-.6z";

/** Defined once in the layout so half-stars can reference it by id. */
export function StarGradientDef() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <linearGradient id="kasuwa-half-star">
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#d1d5db" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Stars({
  rating,
  reviews,
}: {
  rating: number;
  reviews?: number;
}) {
  const rounded = Math.round(rating * 2) / 2;

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex" role="img" aria-label={`Rated ${rating} out of 5`}>
        {[1, 2, 3, 4, 5].map((i) => {
          const fill = Math.min(1, Math.max(0, rounded - i + 1));
          return (
            <svg key={i} viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
              <path
                d={STAR_PATH}
                fill={
                  fill === 1
                    ? "#f59e0b"
                    : fill === 0.5
                      ? "url(#kasuwa-half-star)"
                      : "#d1d5db"
                }
              />
            </svg>
          );
        })}
      </div>
      {reviews !== undefined && (
        <span className="text-xs text-muted">({formatCount(reviews)})</span>
      )}
    </div>
  );
}
