"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "@/app/components/AppLayout/AppLayout";

const queryClient = new QueryClient();

export const NavbarChildrenWrapper = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>{children}</AppLayout>
    </QueryClientProvider>
  );
};
