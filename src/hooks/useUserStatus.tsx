import { useCookies } from "react-cookie";

const useUserStatus = () => {
  const [cookies] = useCookies(["Exclusive.Token"]);
  const authorization = `Bearer ${cookies["Exclusive.Token"]}`;
  return {
    authorization,
    isLoggedIn: !!cookies["Exclusive.Token"],
  };
};

export default useUserStatus;
