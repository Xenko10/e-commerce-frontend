"use client";

import styles from "./FlashSales.module.css";
import ImageSlider from "./ImageSlider/ImageSlider";
import { useQuery } from "@tanstack/react-query";
import { ProductDTO } from "@/types/types";
import { API_V2_URL } from "@/helpers/constant";

const FlashSales = () => {
  const { data, isFetching, isLoading } = useQuery<ProductDTO[]>({
    queryKey: ["flash-sales-products"],
    queryFn: async () => {
      const response = await fetch(`${API_V2_URL}/flash-sales-products`);
      return await response.json();
    },
  });

  if (isLoading || isFetching || !data) {
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
