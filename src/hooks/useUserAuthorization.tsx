import { useCookies } from "react-cookie";

const useUserAuthorization = () => {
  const [cookies] = useCookies(["Exclusive.Token"]);

  return `Bearer ${cookies["Exclusive.Token"]}`;
};

export default useUserAuthorization;
