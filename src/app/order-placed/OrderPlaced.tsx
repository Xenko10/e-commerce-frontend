import styles from "./OrderPlaced.module.css";

// TODO show order number
const OrderPlaced = () => (
  <div>
    <div className={styles.contentWrapper}>
      <h1>Order Placed</h1>
      <p>Your order will be realized when payment to account bellow is made.</p>
      <p>Account number: PL25 1090 2402 7488 8851 8982 1385</p>
    </div>
  </div>
);

export default OrderPlaced;
