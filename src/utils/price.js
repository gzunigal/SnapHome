export function calculatePriceAt({
  price,
  ROI = 12,
  atMonth = 0,
  factor = 0.5
}) {
  const a = factor;
  return price / (a * atMonth + ((ROI - 1) * a) / (Math.exp(a) - 1) - a);
}

export function formatPrice(price) {
  return `$${new Intl.NumberFormat("es-CL").format(parseInt(price))}`;
}
