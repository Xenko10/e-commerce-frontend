import styles from "./ProductInCart.module.css";
import { ChangeEvent, useContext, useState } from "react";
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
  const [inputQuantity, setInputQuantity] = useState(quantity);

  const deleteProductFromCart = async () => {
    await axios.delete(`${API_URL}/cart/${id}`);
    refetchCart();
  };

  const updateProductQuantity = async (newQuantity: number) => {
    await axios.put(`${API_URL}/cart/${id}/quantity/${newQuantity}`);
    refetchCart();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 10) {
      const newQuantity = parseInt(e.target.value, 10);
      setInputQuantity(newQuantity);
      updateProductQuantity(newQuantity);
    }
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
          value={inputQuantity.toString()}
          className={styles.quantityInput}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
      </div>
      <div>
        ${priceAfterDiscount ? quantity * priceAfterDiscount : quantity * price}
      </div>
    </div>
  );
};

export default ProductInCart;
