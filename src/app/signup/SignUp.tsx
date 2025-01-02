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

  // TODO make submit button do something
  // TODO add validation

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Create an account</h1>
        <p className={styles.paragraph}>Enter you details bellow</p>
      </div>
      <div className={styles.formWrapper}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className={styles.input}
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className={styles.input}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className={styles.createAccountBtn}>Create account</button>
      </div>
      <div className={styles.alreadyAccountWrapper}>
        <span className={styles.alreadyAccount}>Already have an account?</span>
        <a href="/login" className={styles.login}>
          Log in
        </a>
      </div>
    </div>
  );
};

export default SignUp;
