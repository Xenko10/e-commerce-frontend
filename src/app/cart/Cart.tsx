"use client";

import styles from "./Cart.module.css";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartWithItems from "./CartWithItems/CartWithItems";
import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

const Cart = () => {
  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

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
      quantity: 1,
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
