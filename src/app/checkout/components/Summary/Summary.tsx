"use client";

import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import SummaryItem from "./SummaryItem/SummaryItem";

const Summary = () => {
  const context = useContext(ValuesContext);
  const cart = context?.cart || [];
  console.log(cart);
  return (
    <div>
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
