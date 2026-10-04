export function calculateCartSummary(cart) {
  const subTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const shipping = subTotal > 20 ? 5 : 0;

  const total = subTotal + shipping;

  return { subTotal, shipping, total };
}
