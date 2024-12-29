import styles from "./Navbar.module.css";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {ProductDTO} from "@/types/types";
import axios from "axios";
import {API_URL} from "@/helpers/constant";

const Navbar = () => {
  const { data: wishlist } = useQuery<ProductDTO[]>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/wishlist`);
      return response.data;
    },
  });

  const { data: cart} = useQuery<ProductDTO[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/cart`);
      return response.data;
    },
  });

  return (
    <div className={styles.navbar}>
      <div className={styles.logoActionsWrapper}>
        <div className={styles.logo}>
          <Link href='/'>Exclusive</Link>
        </div>
        <div className={styles.menu}>
          <Link href='/'>Home</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='/about'>About</Link>
          <Link href='/signup'>Sign Up</Link>
        </div>
        <button>☰</button>
        <div className={styles.actions}>
          <div className={styles.search}>
            <input type='text' placeholder='What are you looking for?' />
            <img src='./img/navbar/search.png' alt='Search' />
          </div>
          <Link href='/wishlist' className={styles.action}>
            <img src='./img/navbar/heart.png' alt='Wishlist' />
            {wishlist && wishlist.length !== 0 && <div>{wishlist.length}</div>}
          </Link>
          <Link href='/cart' className={styles.action}>
            <img src='./img/navbar/cart.png' alt='Cart' />
            {cart && cart.length !== 0 && <div>{cart.length}</div>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
