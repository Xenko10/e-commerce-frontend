import styles from "./Checkout.module.css";
import BillingDetails from "./components/BillingDetails/BillingDetails";
import Summary from "./components/Summary/Summary";

const Checkout = () => {
  return (
    <div>
      <div className={styles.contentWrapper}>
        <BillingDetails />
        <Summary />
      </div>
    </div>
  );
};

export default Checkout;
