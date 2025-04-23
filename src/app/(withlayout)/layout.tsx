"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "antd";

import Sidebar from "@/components/UI/Sidebar";
import Contents from "@/components/UI/Contents";
import { isUserLoggedIn } from "@/services/auth.service";
import Header from "@/components/UI/Header";
import LoadingPage from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = isUserLoggedIn();
      setIsAuthenticated(loggedIn);
      if (!loggedIn) {
        router.push("/login");
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <Header />
      <Layout hasSider style={{ marginTop: '64px' }}>
        <Sidebar />
        <Layout>
          <Contents>{children}</Contents>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
