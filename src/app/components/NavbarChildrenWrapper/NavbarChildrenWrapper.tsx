"use client";

import Navbar from "../Navbar/Navbar";
import {
  ReactNode,
} from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

export const NavbarChildrenWrapper = ({
                                        children,
                                      }: Readonly<{
  children: ReactNode;
}>) => (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      {children}
    </QueryClientProvider>
);
