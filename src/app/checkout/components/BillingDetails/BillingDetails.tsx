"use client";

import styles from "./BillingDetails.module.css";
import BillingInput from "./BillingInput/BillingInput";
import { useState } from "react";

const BillingDetails = () => {
  const [form, setForm] = useState({
    name: "",
    streetAddress: "",
    city: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <div>
      <h1 className={styles.billingDetails}>Billing Details</h1>
      <div className={styles.formWrapper}>
        <BillingInput
          label="name"
          value={form.name}
          setValue={(value) => setForm({ ...form, name: value })}
        />
        <BillingInput
          label="street address"
          value={form.streetAddress}
          setValue={(value) => setForm({ ...form, streetAddress: value })}
        />
        <BillingInput
          label="city"
          value={form.city}
          setValue={(value) => setForm({ ...form, city: value })}
        />
        <BillingInput
          label="phone number"
          value={form.phoneNumber}
          setValue={(value) => setForm({ ...form, phoneNumber: value })}
        />
        <BillingInput
          label="email"
          value={form.email}
          setValue={(value) => setForm({ ...form, email: value })}
        />
      </div>
    </div>
  );
};

export default BillingDetails;
