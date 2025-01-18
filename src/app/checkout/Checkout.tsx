"use client";

import styles from "./Checkout.module.css";

import BillingDetails from "./components/BillingDetails/BillingDetails";
import Summary from "./components/Summary/Summary";
import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    streetAddress: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <div>
      <div className={styles.contentWrapper}>
        <BillingDetails form={form} setForm={setForm} />
        <Summary />
      </div>
    </div>
  );
};

export default Checkout;
