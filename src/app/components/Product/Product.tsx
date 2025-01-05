import styles from "./Product.module.css";
import Wishlist from "@/icons/Wishlist";
import Cart from "@/icons/Cart";
import { useContext } from "react";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";
import Stars from "./components/Stars";
import { useCookies } from "react-cookie";

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
  isInCart: boolean;
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
  isInCart,
}: Props) => {
  const context = useContext(ValuesContext);
  const refetchWishlist = context?.refetchWishlist;
  const refetchCart = context?.refetchCart;
  const [cookies] = useCookies(["Exclusive.UserId"]);

  const shouldRedirect = () => {
    if (!cookies["Exclusive.UserId"]) {
      window.location.href = "/login";
      return true;
    }
    return false;
  };

  const handleWishlistClick = async () => {
    if (shouldRedirect()) return;

    if (isInWishlist) {
      await axios.delete(`${API_URL}/wishlist/${id}`);
    } else {
      await axios.post(`${API_URL}/wishlist/${id}`);
    }
    refetchWishlist();
  };

  const handleCartClick = async () => {
    if (shouldRedirect()) return;

    if (isInCart) {
      await axios.delete(`${API_URL}/cart/${id}`);
    } else {
      await axios.post(`${API_URL}/cart/${id}`);
    }
    refetchCart();
  };

  let wishlistStroke = isInWishlist ? "white" : "black";
  let cartStroke = isInCart ? "white" : "black";

  return (
    <div>
      <div className={styles.imgActionsWrapper}>
        <img src={`/img/flashsales/${url}`} alt={alt} />
        {priceAfterDiscount && (
          <div className={styles.percentages}>
            -{Math.floor((1 - priceAfterDiscount / price) * 100)}%
          </div>
        )}
        <div
          className={
            isInWishlist
              ? `${styles.wishlist} ${styles.clicked}`
              : styles.wishlist
          }
          onClick={handleWishlistClick}
        >
          <Wishlist wishlistStroke={wishlistStroke} />
        </div>
        <div
          className={
            isInCart ? `${styles.cart} ${styles.clicked}` : styles.cart
          }
          onClick={handleCartClick}
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
          {priceAfterDiscount && <span className={styles.price}>${price}</span>}
        </div>
        <div className={styles.reviews}>
          <Stars rating={stars} />
          <span className={styles.opinions}>({opinions})</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
