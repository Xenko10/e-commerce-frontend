import { useQuery } from "@tanstack/react-query";
import { ProductDTO } from "@/types/types";
import axios from "axios";
import { API_URL } from "@/helpers/constant";
import Navbar from "@/app/components/Navbar/Navbar";
import { createContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type ContextData = {
  wishlist: ProductDTO[];
  cart: ProductDTO[];
  refetchWishlist: () => void;
};

export const ValuesContext = createContext<ContextData>(null!);

const AppLayout = ({ children }: Props) => {
  const { data: wishlistData, refetch: refetchWishlist } = useQuery<
    ProductDTO[]
  >({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/wishlist`);
      return response.data;
    },
  });

  const wishlist = wishlistData || [];

  const { data: cartData } = useQuery<ProductDTO[]>({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}/cart`);
      return response.data;
    },
  });

  const cart = cartData || [];

  return (
    <>
      <ValuesContext.Provider value={{ wishlist, cart, refetchWishlist }}>
        <Navbar />
        {children}
      </ValuesContext.Provider>
    </>
  );
};

export default AppLayout;
