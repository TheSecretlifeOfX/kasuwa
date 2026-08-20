const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
  return naira.format(value);
}

export function formatCount(value: number): string {
  return new Intl.NumberFormat("en-NG").format(value);
}
