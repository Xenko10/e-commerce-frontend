import styles from "./InfoLinks.module.css";
import Link from "next/link";

const InfoLinks = () => (
  <div className={styles.infoLinks}>
    <div className={styles.subsection}>
      <h3 className={styles.logo}>
        <Link href="/">Exclusive</Link>
      </h3>
      <div className={styles.infoWrapper}>
        <div>
          Plac Tadeusza Kościuszki 45, <br />
          22-460 Szczebrzeszyn
        </div>
        <div>exclusive@gmail.com</div>
        <div>+688 987 654 321</div>
      </div>
    </div>
    <div className={styles.subsection}>
      <h3 className={styles.itemHeader}>Account</h3>
      <div className={styles.infoWrapper}>
        <div>My Account</div>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Log in</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/wishlist">Wishlist</Link>
        <div>Shop</div>
      </div>
    </div>
    <div className={styles.subsection}>
      <h3 className={styles.itemHeader}>Quick Link</h3>
      <div className={styles.infoWrapper}>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
    <div className={styles.subsection}>
      <h3 className={styles.itemHeader}>Download App</h3>
      <div className={styles.infoWrapper}>
        <div className={styles.discount}>Save $3 with App New User Only</div>
        <div className={styles.imgWrapper}>
          <img
            src="./img/footer/qr_code.png"
            alt="QR code"
            className={styles.qrCode}
          />
          <img
            src="./img/footer/googleplay.png"
            alt="Google Play"
            className={styles.downloadApp}
          />
          <img
            src="./img/footer/appstore.png"
            alt="App Store"
            className={styles.downloadApp}
          />
        </div>
        <div className={styles.socialsWrapper}>
          <img src="./img/footer/facebook.png" alt="Facebook" />
          <img src="./img/footer/twitter.png" alt="Twitter" />
          <img src="./img/footer/instagram.png" alt="Instagram" />
          <img src="./img/footer/linkedin.png" alt="Linkedin" />
        </div>
      </div>
    </div>
  </div>
);

export default InfoLinks;
