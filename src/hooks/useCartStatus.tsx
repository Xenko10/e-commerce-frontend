import { ProductInCartDTO } from "@/types/types";

type Args = {
  products: ProductInCartDTO[];
};

const useCartStatus = ({ products }: Args) => {
  const subtotal = products.reduce(
    (sum, addend) =>
      sum +
      addend.quantity *
        (addend.priceAfterDiscount ? addend.priceAfterDiscount : addend.price),
    0,
  );

  const deliveryPrice = 10;
  const shipping = subtotal >= 1000 || subtotal === 0 ? 0 : deliveryPrice;

  const total = subtotal + shipping;
  return { subtotal, shipping, total, deliveryPrice };
};

export default useCartStatus;
