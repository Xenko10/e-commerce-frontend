"use client";

import styles from "./Products.module.css";
import { useQuery } from "@tanstack/react-query";
import { ProductInCartDTO } from "@/types/types";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import Product from "@/app/components/Product/Product";
import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

const Products = () => {
  const { data } = useQuery<ProductInCartDTO[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    },
  });

  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

  // check if product is in wishlist
  const products = data?.map((product) => {
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
    <div>
      <div className={styles.contentWrapper}>
        <h1>Products</h1>
        <div className={styles.productsWrapper}>
          {products?.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              header={product.header}
              url={product.url}
              alt={product.alt}
              price={product.price}
              priceAfterDiscount={product.priceAfterDiscount}
              stars={product.stars}
              opinions={product.opinions}
              isInWishlist={product.isInWishlist}
              isInCart={product.isInCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
