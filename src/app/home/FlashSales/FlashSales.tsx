"use client";

import styles from "./FlashSales.module.css";
import ImageSlider from "@/app/home/components/ImageSlider/ImageSlider";
import { useQuery } from "@tanstack/react-query";
import { ProductDTO } from "@/types/types";
import { API_URL } from "@/helpers/constant";
import axios from "axios";
import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

const FlashSales = () => {
  const { data, isLoading } = useQuery<ProductDTO[]>({
    queryKey: ["flash-sales-products"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/carousel/flash-sales`);
      return response.data;
    },
  });

  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

  if (isLoading || !data) {
    return null;
  }

  const products = data.map((product) => {
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
        <div className={styles.rectangleTodaysWrapper}>
          <div className={styles.rectangle} />
          <div className={styles.todays}>Today&apos;s</div>
        </div>
        <h2>Flash Sales</h2>
        <ImageSlider products={products} />
      </div>
    </div>
  );
};

export default FlashSales;
