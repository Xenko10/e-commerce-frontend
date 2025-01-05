"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];
  const [cookies] = useCookies(["Exclusive.UserId"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.UserId"]);
  }, [cookies]);

  return (
    <div className={styles.navbar}>
      <div className={styles.logoActionsWrapper}>
        <div className={styles.logo}>
          <Link href="/">Exclusive</Link>
        </div>
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {isLoggedIn ? (
            <Link href="/profile">Profile</Link>
          ) : (
            <Link href="/login">Log in</Link>
          )}
        </div>
        <button>☰</button>
        <div className={styles.actions}>
          <Link href="/wishlist" className={styles.action}>
            <img src="./img/navbar/heart.png" alt="Wishlist" />
            {wishlist && wishlist.length !== 0 && <div>{wishlist.length}</div>}
          </Link>
          <Link href="/cart" className={styles.action}>
            <img src="./img/navbar/cart.png" alt="Cart" />
            {cart && cart.length !== 0 && <div>{cart.length}</div>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
