import styles from "./SummaryItem.module.css";

type Props = {
  image: string;
  name: string;
  price: number;
  quantity: number;
};
const SummaryItem = ({ image, name, price, quantity }: Props) => (
  <div className={styles.summaryItem}>
    <div className={styles.imageWrapper}>
      <img
        src={`/img/flashsales/${image}`}
        alt={name}
        className={styles.image}
      />
    </div>
    <span className={styles.infoWrapper}>
      <span>
        {name} ({quantity})
      </span>
      <span>${price}</span>
    </span>
  </div>
);

export default SummaryItem;
