import styles from "./OrderPlaced.module.css";
import { usePathname } from "next/navigation";

const OrderPlaced = () => {
  const pathname = usePathname();
  const orderId = pathname.split("/")[2];

  return (
    <div>
      <div className={styles.contentWrapper}>
        <h1>Order Placed</h1>
        <p>
          Your order will be realized when payment to account bellow is made.
        </p>
        <p>Account number: PL25 1090 2402 7488 8851 8982 1385</p>
        <p>Your unique order id number: {orderId}</p>
      </div>
    </div>
  );
};

export default OrderPlaced;
