"use client";

import styles from "./BillingDetails.module.css";
import BillingInput from "./BillingInput/BillingInput";
import { FormData } from "../../types/types";

type Props = {
  form: FormData;
  setForm: (form: FormData) => void;
};

const BillingDetails = ({ form, setForm }: Props) => (
  <div className={styles.billingDetails}>
    <h1 className={styles.header}>Billing Details</h1>
    <div className={styles.formWrapper}>
      <BillingInput
        label="Name"
        value={form.name}
        setValue={(value) => setForm({ ...form, name: value })}
      />
      <BillingInput
        label="Street address"
        value={form.streetAddress}
        setValue={(value) => setForm({ ...form, streetAddress: value })}
      />
      <BillingInput
        label="City"
        value={form.city}
        setValue={(value) => setForm({ ...form, city: value })}
      />
      <BillingInput
        label="Phone number"
        value={form.phoneNumber}
        setValue={(value) => setForm({ ...form, phoneNumber: value })}
      />
      <BillingInput
        label="Email"
        value={form.email}
        setValue={(value) => setForm({ ...form, email: value })}
      />
    </div>
  </div>
);

export default BillingDetails;
