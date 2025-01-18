import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const useUserStatus = () => {
  const [cookies] = useCookies(["Exclusive.Token"]);
  const authorization = `Bearer ${cookies["Exclusive.Token"]}`;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.Token"]);
  }, [cookies]);

  const logout = () => {
    document.cookie =
      "Exclusive.Token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
  };

  return {
    authorization,
    isLoggedIn,
    logout,
  };
};

export default useUserStatus;
