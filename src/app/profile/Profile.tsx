"use client";

import styles from "./Account.module.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const Profile = () => {
  const [cookies] = useCookies(["Exclusive.UserId"]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.UserId"]);
  }, [cookies]);

  return (
    <div className={styles.contentWrapper}>
      <h1>Profile</h1>
      {isLoggedIn && (
        <button
          onClick={() => {
            document.cookie =
              "Exclusive.UserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            setIsLoggedIn(false);
          }}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Profile;
