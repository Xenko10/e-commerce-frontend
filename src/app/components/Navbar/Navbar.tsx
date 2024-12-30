import styles from "./Navbar.module.css";
import Link from "next/link";
import { useContext } from "react";
import { ValuesContext } from "@/app/components/AppLayout/AppLayout";

const Navbar = () => {
  const context = useContext(ValuesContext);
  const wishlist = context?.wishlist || [];
  const cart = context?.cart || [];

  return (
    <div className={styles.navbar}>
      <div className={styles.logoActionsWrapper}>
        <div className={styles.logo}>
          <Link href="/">Exclusive</Link>
        </div>
        <div className={styles.menu}>
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
        <button>☰</button>
        <div className={styles.actions}>
          <Link href="/wishlist" className={styles.action}>
            <img src="./img/navbar/heart.png" alt="Wishlist" />
            {wishlist && wishlist.length !== 0 && <div>{wishlist.length}</div>}
          </Link>
          <Link href="/cart" className={styles.action}>
            <img src="./img/navbar/cart.png" alt="Cart" />
            {cart && cart.length !== 0 && <div>{cart.length}</div>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
