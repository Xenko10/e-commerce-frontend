import styles from "./FlashSales.module.css";
import Timer from "./Timer/Timer";
import ImageSlider from "./ImageSlider/ImageSlider";

const FlashSales = () => (
  <div className={styles.flashSales}>
    <div className={styles.contentWrapper}>
      <div className={styles.rectangleTodaysWrapper}>
        <div className={styles.rectangle}></div>
        <div className={styles.todays}>Today&apos;s</div>
      </div>
      <div className={styles.flashSalesTimerWrapper}>
        <h2>Flash Sales</h2>
        <Timer />
      </div>
      <ImageSlider />
    </div>
  </div>
);

export default FlashSales;
