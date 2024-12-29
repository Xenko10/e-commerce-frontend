"use client";

import styles from "./Wishlist.module.css";
import { useContext } from "react";
import Product from "../components/Product/Product";
import EmptyWishlist from "./EmptyWishlist/EmptyWishlist";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

const Wishlist = () => {
  const context = useContext(ValuesContext);
  const wishlistProducts = context?.wishlist || [];
  const cart = context?.cart || [];

  const products = wishlistProducts.map((product) => {
    const isInWishlist = wishlistProducts?.find((item) => {
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
        {wishlistProducts.length > 0 && (
          <h2 className={styles.header}>
            Wishlist ({wishlistProducts.length})
          </h2>
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
