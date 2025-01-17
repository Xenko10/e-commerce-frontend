"use client";

import styles from "./Login.module.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import { useCookies } from "react-cookie";

const Login = () => {
  const [, setCookie] = useCookies(["Exclusive.Token"]);
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
      const response = await axios.post(`${API_URL}/account/login`, {
        email: formData.email,
        password: formData.password,
      });

      setCookie("Exclusive.Token", response.data.token, {
        expires: new Date(Date.now() + 2 * 3600 * 1000),
      });
      setError("");
      setSuccess("Logged in successfully");
      setTimeout(() => {
        window.location.href = "/";
      }, 2500);
    } catch (error) {
      setError("Invalid email or password");
      setTimeout(() => {
        setError("");
      }, 2500);
    }
  };

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Log in to Exclusive</h1>
        <p className={styles.paragraph}>Enter your details below</p>
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
        <button onClick={handleSubmit} className={styles.logInBtn}>
          Log in
        </button>
        {error !== "" && (
          <div
            className={styles.error}
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
        {success !== "" && <div className={styles.success}>{success}</div>}
      </div>
      <div className={styles.noAccountWrapper}>
        <span className={styles.noAccount}>Don&#39;t have an account?</span>
        <a href="/signup" className={styles.signup}>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Login;
