"use client";

import styles from "./Products.module.css";
import { useQuery } from "@tanstack/react-query";
import { ProductsListingDto } from "@/types/types";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import Product from "@/app/components/Product/Product";
import { useContext, useEffect, useState } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import { useCookies } from "react-cookie";
import { useRouter, useSearchParams } from "next/navigation";
import Pagination from "./components/Pagination/Pagination";

const Products = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;

  const { data, isLoading } = useQuery<ProductsListingDto>({
    queryKey: ["products", page],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/products`, {
        params: { page, pageSize: 4 },
      });
      return response.data;
    },
  });

  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

  const [cookies] = useCookies(["Exclusive.Token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.Token"]);
  }, [cookies]);

  if (Number(page) <= 0) {
    router.push("/products");
  }

  if (!data && isLoading) {
    return <div className={styles.contentWrapper}>Loading...</div>;
  }

  if (!data) {
    return <div className={styles.contentWrapper}>No products</div>;
  }

  const { items, totalCount } = data;

  // check if product is in wishlist
  const products = items?.map((product) => {
    const isInWishlist = wishlist?.find((item) => {
      return isLoggedIn && item.id === product.id;
    });
    const isInCart = cart?.find((item) => {
      return isLoggedIn && item.id === product.id;
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
        <Pagination totalProductsCount={totalCount} page={Number(page)} />
      </div>
    </div>
  );
};

export default Products;
