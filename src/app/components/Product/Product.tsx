import styles from "./Product.module.css";
import Cart from "./Actions/Cart";
import Wishlist from "./Actions/Wishlist";
import { useState, useContext } from "react";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

type Props = {
  id: number;
  url: string;
  alt: string;
  header: string;
  price: number;
  priceAfterDiscount?: number;
  stars: number;
  opinions: number;
  isInWishlist: boolean;
};

const Product = ({
  id,
  url,
  alt,
  header,
  price,
  priceAfterDiscount,
  stars,
  opinions,
  isInWishlist,
}: Props) => {
  const context = useContext(ValuesContext);
  const refetchWishlist = context?.refetchWishlist;

  const handleWishlistClick = async () => {
    if (isInWishlist) {
      await axios.delete(`${API_URL}/wishlist/${id}`);
    } else {
      await axios.post(`${API_URL}/wishlist/${id}`);
    }
    refetchWishlist();
  };
  function renderStars() {
    const filledStars = Math.floor(stars);
    const halfFilledStar = stars - filledStars === 0.5;
    return (
      <>
        {Array.from(Array(5), (_, index) => (
          <img
            key={index}
            src={`/img/stars/${
              index < filledStars
                ? "star_filled.png"
                : index === filledStars && halfFilledStar
                  ? "star_half_filled.png"
                  : "star_not_filled.png"
            }`}
            alt="star"
          />
        ))}
      </>
    );
  }

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  let wishlistStroke = isInWishlist ? "white" : "black";
  let cartStroke = isAddedToCart ? "white" : "black";

  const Stars = renderStars();

  return (
    <div className={styles.productWrapper}>
      <div className={styles.item}>
        <div className={styles.imgActionsWrapper}>
          <img src={`/img/flashsales/${url}`} alt={alt} />

          {priceAfterDiscount ? (
            <div className={styles.percentages}>
              -{Math.floor((1 - priceAfterDiscount / price) * 100)}%
            </div>
          ) : null}
          <div
            className={
              isInWishlist
                ? `${styles.wishlist} ${styles.clicked}`
                : styles.wishlist
            }
            onClick={() => {
              handleWishlistClick();
            }}
          >
            <Wishlist wishlistStroke={wishlistStroke} />
          </div>
          <div
            className={
              isAddedToCart ? `${styles.cart} ${styles.clicked}` : styles.cart
            }
          >
            <Cart cartStroke={cartStroke} />
          </div>
        </div>
        <div className={styles.info}>
          <h3>{header}</h3>
          <div className={styles.prices}>
            <span className={styles.priceAfterDiscount}>
              ${priceAfterDiscount ? priceAfterDiscount : price}
            </span>
            {priceAfterDiscount && (
              <span className={styles.price}>${price}</span>
            )}
          </div>
          <div className={styles.reviews}>
            <span>{Stars}</span>
            <span className={styles.opinions}>({opinions})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
