"use client";

import styles from "./Login.module.css";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
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
        <h1 className={styles.heading}>Log in to Exclusive</h1>
        <p className={styles.paragraph}>Enter you details bellow</p>
      </div>
      <div className={styles.formWrapper}>
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
        <button className={styles.logInBtn}>Log in</button>
      </div>
    </div>
  );
};

export default Login;
