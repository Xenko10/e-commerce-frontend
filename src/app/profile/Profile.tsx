"use client";

import styles from "./Account.module.css";
import Link from "next/link";
import useUserStatus from "@/hooks/useUserStatus";

const Profile = () => {
  const { isLoggedIn, logout } = useUserStatus();

  return (
    <div>
      <div className={styles.contentWrapper}>
        <div className={styles.breadcrumbs}>
          <Link href="/" className={styles.home}>
            Home
          </Link>
          <span className={styles.separator}>/</span>
          <span>My account</span>
        </div>
        {isLoggedIn && (
          <button onClick={logout} className={styles.logoutButton}>
            Log out
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
