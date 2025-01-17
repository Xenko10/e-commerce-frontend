"use client";

import styles from "./Cart.module.css";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartWithItems from "./CartWithItems/CartWithItems";
import { useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import Link from "next/link";

const Cart = () => {
  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

  const [cookies] = useCookies(["Exclusive.Token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.Token"]);
  }, [cookies]);

  if (!isLoggedIn) {
    return (
      <div className={styles.contentWrapper}>
        Please&nbsp;
        <Link href="/login">log in</Link>&nbsp;to see your cart
      </div>
    );
  }

  const products = cart.map((product) => {
    const isInWishlist = wishlist?.find((item) => {
      return item.id === product.id;
    });
    const isInCart = cart?.find((item) => {
      return item.id === product.id;
    });
    return {
      ...product,
      isInWishlist: !!isInWishlist,
      isInCart: !!isInCart,
      quantity: product.quantity,
    };
  });

  return (
    <div>
      <div className={styles.contentWrapper}>
        {products.length !== 0 ? (
          <CartWithItems products={products} />
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};

export default Cart;
