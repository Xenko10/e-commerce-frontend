import styles from "./CartWithItems.module.css";
import ProductInCart from "./ProductInCart/ProductInCart";
import { ProductInCartDTO } from "@/types/types";

type Props = {
  products: ProductInCartDTO[];
};

const CartWithItems = ({ products }: Props) => {
  const subtotal = products.reduce(
    (sum, addend) =>
      sum +
      addend.quantity *
        (addend.priceAfterDiscount ? addend.priceAfterDiscount : addend.price),
    0,
  );

  const deliveryPrice = 10;
  const shipping = subtotal >= 1000 || subtotal === 0 ? 0 : deliveryPrice;

  const total = subtotal + shipping;
  return (
    <div className={styles.cartWithItems}>
      <div className={styles.row}>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className={styles.subtotal}>Subtotal</div>
      </div>
      {products.map((product) => (
        <ProductInCart
          key={product.header}
          id={product.id}
          url={product.url}
          alt={product.alt}
          header={product.header}
          price={product.price}
          priceAfterDiscount={product.priceAfterDiscount}
          quantity={product.quantity}
          stars={product.stars}
          opinions={product.opinions}
        />
      ))}
      <div className={styles.total}>
        <h3>Cart Total:</h3>
        <div className={styles.totalRow}>
          <div>Subtotal: </div>
          <div>${subtotal}</div>
        </div>
        <hr />
        <div className={styles.totalRow}>
          <div>Shipping:</div>
          <div>{shipping === 0 ? "Free" : "$" + deliveryPrice}</div>
        </div>
        <hr />
        <div className={styles.totalRow}>
          <div>Total:</div>
          <div>${total}</div>
        </div>
        <button>Process to checkout</button>
      </div>
    </div>
  );
};

export default CartWithItems;
