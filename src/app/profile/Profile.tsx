"use client";

import styles from "./Account.module.css";
import Link from "next/link";
import useUserStatus from "@/hooks/useUserStatus";

const Profile = () => {
  const { isLoggedIn, logout } = useUserStatus();

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
        <button onClick={logout} className={styles.logoutButton}>
          Log out
        </button>
      )}
    </div>
  );
};

export default Profile;
