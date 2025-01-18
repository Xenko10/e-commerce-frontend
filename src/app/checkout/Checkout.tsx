"use client";

import styles from "./Checkout.module.css";

import BillingDetails from "./components/BillingDetails/BillingDetails";
import Summary from "./components/Summary/Summary";
import { FormEvent, useState } from "react";
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
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      form.name.length < 3 ||
      form.streetAddress.length < 3 ||
      form.city.length < 3 ||
      form.phoneNumber.length < 3 ||
      form.email.length < 3
    ) {
      setError("Fill in all fields");
      setTimeout(() => {
        setError("");
      }, 4000);
      return;
    }
    router.push("/order-placed");
  };

  return (
    <div>
      <form className={styles.contentWrapper} onSubmit={handleSubmit}>
        <BillingDetails form={form} setForm={setForm} errorMessage={error} />
        <Summary />
      </form>
    </div>
  );
};

export default Checkout;
