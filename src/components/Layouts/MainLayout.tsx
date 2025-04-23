"use client";
import React from "react";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isProtectedRoute =
    pathname?.startsWith("/user") ||
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/register");

  return (
    <div className="min-h-screen flex flex-col">
      {isProtectedRoute && <Header />}
      <main className="flex-grow">{children}</main>
      {isProtectedRoute && <Footer />}
    </div>
  );
};

export default MainLayout;
