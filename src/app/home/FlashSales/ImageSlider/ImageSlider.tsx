"use client";

import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Product from "../../../components/Product/Product";
import styles from "./ImageSlider.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { API_V2_URL } from "@/helpers/constant";
import { ProductDTO } from "@/types/types";

const ImageSlider = () => {
  const [slides, setSlides] = useState(1);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1400px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const isSmartphone = useMediaQuery({ query: "(max-width: 600px)" });

  useEffect(() => {
    if (isSmartphone) {
      setSlides(1);
    } else if (isSmallScreen) {
      setSlides(2);
    } else if (isMediumScreen) {
      setSlides(3);
    } else {
      setSlides(4);
    }
  }, [isMediumScreen, isSmallScreen, isSmartphone]);

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
    <CarouselProvider
      className={styles.sliderWrapper}
      naturalSlideWidth={270}
      naturalSlideHeight={340}
      totalSlides={data.length}
      infinite
      isPlaying
      visibleSlides={slides}
      dragEnabled={false}
    >
      <Slider>
        {data.map((product) => (
          <Slide index={product.id} key={product.id} className={styles.slide}>
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
              cart={[]}
              setCart={() => {}}
              wishlist={[]}
              setWishlist={() => {}}
            />
          </Slide>
        ))}
      </Slider>
      <div className={styles.buttonWrapper}>
        <ButtonBack>
          <ArrowBackIcon />
        </ButtonBack>
        <ButtonNext>
          <ArrowForwardIcon />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default ImageSlider;
