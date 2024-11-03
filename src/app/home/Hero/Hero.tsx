import styles from "./Hero.module.css";
import Categories from "./Categories/Categories";
import MessageOfTheDay from "./MessageOfTheDay/MessageOfTheDay";

const Hero = () => (
  <div className={styles.hero}>
    <div className={styles.contentWrapper}>
      <Categories />
      <MessageOfTheDay />
    </div>
  </div>
);

export default Hero;
