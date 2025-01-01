"use client";

import styles from "./SignUp.module.css";
import { ChangeEvent, useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // TODO add css
  // TODO add submit data button
  // TODO add validation

  return (
    <div className={styles.contentWrapper}>
      <div>
        <h1>Create an account</h1>
        <p>Enter you details bellow</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Create account</button>
      </div>
    </div>
  );
};

export default SignUp;
