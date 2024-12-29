import styles from "./ProductInCart.module.css";
import { useState } from "react";
import { ProductInCartDTO } from "@/types/types";

const ProductInCart = ({
  url,
  alt,
  header,
  price,
  priceAfterDiscount,
  quantity,
}: ProductInCartDTO) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className={styles.row}
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      <div className={styles.imgProductNameWrapper}>
        <div className={styles.imgWrapper}>
          <div
            className={`${styles.deleteFromCart} ${
              isMouseOver ? styles.show : null
            }`}
          >
            X
          </div>
          <img src={`/img/flashsales/${url}`} alt={alt} />
        </div>
        <div className={styles.productName}>{header}</div>
      </div>
      <div>${priceAfterDiscount ? priceAfterDiscount : price}</div>
      <div>
        <input
          type="number"
          value={quantity.toString()}
          className={styles.quantityInput}
        />
      </div>
      <div>
        ${priceAfterDiscount ? quantity * priceAfterDiscount : quantity * price}
      </div>
    </div>
  );
};

export default ProductInCart;
