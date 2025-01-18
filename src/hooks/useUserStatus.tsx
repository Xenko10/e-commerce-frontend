import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

const useUserStatus = () => {
  const [cookies] = useCookies(["Exclusive.Token"]);
  const authorization = `Bearer ${cookies["Exclusive.Token"]}`;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!cookies["Exclusive.Token"]);
  }, [cookies]);

  return {
    authorization,
    isLoggedIn,
  };
};

export default useUserStatus;
