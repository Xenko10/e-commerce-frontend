"use client";

import styles from "./Summary.module.css";
import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import SummaryItem from "./SummaryItem/SummaryItem";
import useCartStatus from "@/hooks/useCartStatus";
import { useRouter } from "next/navigation";

const Summary = () => {
  const router = useRouter();
  const context = useContext(ValuesContext);
  const cart = context?.cart || [];

  const { shipping, total, subtotal, deliveryPrice } = useCartStatus({
    products: cart,
  });

  const handlePlaceOrder = () => {
    router.push("/order-placed");
  };

  return (
    <div>
      <div className={styles.summary}>
        {cart.map((item) => (
          <SummaryItem
            key={item.id}
            price={(item.priceAfterDiscount ?? item.price) * item.quantity}
            quantity={item.quantity}
            image={item.url}
            name={item.header}
          />
        ))}
      </div>
      <div className={styles.priceSummary}>
        <div className={styles.priceSummaryItem}>
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className={styles.priceSummaryItem}>
          <span>Shipping:</span>
          <span>{shipping === 0 ? "Free" : "$" + deliveryPrice}</span>
        </div>
        <div className={styles.priceSummaryItem}>
          <span>Total:</span>
          <span>${total}</span>
        </div>
        <button
          onClick={() => handlePlaceOrder()}
          className={styles.placeOrder}
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Summary;
