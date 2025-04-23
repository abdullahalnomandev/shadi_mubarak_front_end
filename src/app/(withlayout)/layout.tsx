"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Layout } from "antd";
import Sidebar from "@/components/UI/Sidebar";
import Contents from "@/components/UI/Contents";
import { isUserLoggedIn } from "@/services/auth.service";

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
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
