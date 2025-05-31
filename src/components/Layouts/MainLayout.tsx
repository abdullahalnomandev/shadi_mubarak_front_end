"use client";
import React from "react";
import Footer from "@/components/shared/Footer";
import { usePathname } from "next/navigation";
import Header from "../shared/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isProtectedRoute =
    pathname?.startsWith("/user") ||
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/super_admin");

  return (
    <React.Fragment>
      <Header />
      <main className='flex-grow'>{children}</main>
      {!isProtectedRoute && <Footer />}
    </React.Fragment>
  );
};

export default MainLayout;
