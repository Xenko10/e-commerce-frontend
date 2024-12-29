"use client";

import styles from "./FlashSales.module.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import { useQuery } from "@tanstack/react-query";
import { ProductDTO } from "@/types/types";
import { API_URL } from "@/helpers/constant";
import axios from "axios";

const FlashSales = () => {
  const { data, isLoading } = useQuery<ProductDTO[]>({
    queryKey: ["flash-sales-products"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/flash-sales-products`);
      return response.data;
    },
  });

  if (isLoading || !data) {
    return null;
  }

  return (
    <div className={styles.flashSales}>
      <div className={styles.contentWrapper}>
        <div className={styles.rectangleTodaysWrapper}>
          <div className={styles.rectangle}></div>
          <div className={styles.todays}>Today&apos;s</div>
        </div>
        <div className={styles.flashSalesTimerWrapper}>
          <h2>Flash Sales</h2>
        </div>
        <ImageSlider products={data} />
      </div>
    </div>
  );
};

export default FlashSales;
