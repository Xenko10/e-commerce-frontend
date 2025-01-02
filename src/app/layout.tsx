import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarChildrenWrapper } from "./components/NavbarChildrenWrapper/NavbarChildrenWrapper";
import Footer from "./components/Footer/Footer";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "E-Commerce",
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <head>
      <title>E-Commerce</title>
      <link rel="icon" href="/favicon.png" />
    </head>
    <body className={inter.className}>
      <NavbarChildrenWrapper>{children}</NavbarChildrenWrapper>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
