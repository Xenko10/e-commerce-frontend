"use client";

import styles from "./SignUp.module.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { API_URL } from "@/helpers/constant";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`${API_URL}/account/register`, {
        email: formData.email,
        password: formData.password,
      });
      setError("");
      setSuccess("Account created successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 4000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data
          .map((error: string) => error)
          .join("<br />");
        setError(errorMessage);
      } else {
        setError("An error occurred");
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Create an account</h1>
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
        <button
          onClick={() => {
            handleSubmit();
          }}
          className={styles.createAccountBtn}
        >
          Create account
        </button>
        {error !== "" && (
          <div
            className={styles.error}
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
        {success !== "" && <div className={styles.success}>{success}</div>}
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
