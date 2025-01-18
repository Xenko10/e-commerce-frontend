"use client";

import styles from "./Account.module.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Link from "next/link";

const Profile = () => {
  const [cookies] = useCookies(["Exclusive.Token"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.Token"]);
  }, [cookies]);

  return (
    <div className={styles.contentWrapper}>
      <div>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.home}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span>My account</span>
        </div>
      </div>

      {isLoggedIn && (
        <button
          onClick={() => {
            document.cookie =
              "Exclusive.Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            setIsLoggedIn(false);
          }}
          className={styles.logoutButton}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Profile;
