import styles from "./Footer.module.css";
import InfoLinks from "./components/InfoLinks/InfoLinks";
import Copyright from "./components/Copyright/Copyright";

const Footer = () => (
  <div className={styles.footer}>
    <InfoLinks />
    <Copyright />
  </div>
);

export default Footer;
