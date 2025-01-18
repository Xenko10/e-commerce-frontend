"use client";

import styles from "./Checkout.module.css";

import BillingDetails from "./components/BillingDetails/BillingDetails";
import Summary from "./components/Summary/Summary";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    streetAddress: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = () => {
    if (
      form.name.length < 3 ||
      form.streetAddress.length < 3 ||
      form.city.length < 3 ||
      form.phoneNumber.length < 3 ||
      form.email.length < 3
    ) {
      return;
    }
    router.push("/order-placed");
  };

  return (
    <div>
      <div className={styles.contentWrapper}>
        <BillingDetails form={form} setForm={setForm} />
        <Summary handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Checkout;
