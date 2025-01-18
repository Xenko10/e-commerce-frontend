"use client";

import styles from "./Summary.module.css";
import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import SummaryItem from "./SummaryItem/SummaryItem";

const Summary = () => {
  const context = useContext(ValuesContext);
  const cart = context?.cart || [];

  return (
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
  );
};

export default Summary;
