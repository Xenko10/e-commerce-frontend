import styles from "./ProductInCart.module.css";
import { useContext, useState } from "react";
import { ProductInCartDTO } from "@/types/types";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

const ProductInCart = ({
  id,
  url,
  alt,
  header,
  price,
  priceAfterDiscount,
  quantity,
}: ProductInCartDTO) => {
  const context = useContext(ValuesContext);
  const refetchCart = context?.refetchCart;

  const [isMouseOver, setIsMouseOver] = useState(false);

  const deleteProductFromCart = async () => {
    await axios.delete(`${API_URL}/cart/${id}`);
    refetchCart();
  };

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
            onClick={deleteProductFromCart}
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
