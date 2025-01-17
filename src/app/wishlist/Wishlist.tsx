"use client";

import styles from "./Wishlist.module.css";
import { useContext } from "react";
import Product from "../components/Product/Product";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import Link from "next/link";
import useUserStatus from "@/hooks/useUserStatus";

const Wishlist = () => {
  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

  const { isLoggedIn } = useUserStatus();

  if (!isLoggedIn) {
    return (
      <div className={styles.contentWrapper}>
        Please&nbsp;
        <Link href="/login">log in</Link>&nbsp;to see your wishlist
      </div>
    );
  }

  const products = wishlist.map((product) => {
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
    };
  });

  return (
    <div className={styles.wishlist}>
      <div className={styles.contentWrapper}>
        {wishlist.length > 0 && (
          <h2 className={styles.header}>Wishlist ({wishlist.length})</h2>
        )}
        <div className={styles.productsWrapper}>
          {products.length !== 0 ? (
            products.map((product) => (
              <Product
                id={product.id}
                key={product.header}
                url={product.url}
                alt={product.alt}
                header={product.header}
                price={product.price}
                priceAfterDiscount={product.priceAfterDiscount}
                stars={product.stars}
                opinions={product.opinions}
                isInWishlist={product.isInWishlist}
                isInCart={product.isInCart}
              />
            ))
          ) : (
            <EmptyWishlist />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
