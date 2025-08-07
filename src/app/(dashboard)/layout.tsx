"use client";

import { Layout } from "antd";
import React from "react";

import Contents from "@/components/UI/Contents";
import Sidebar from "@/components/UI/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   const checkAuth = () => {
  //     const loggedIn = isUserLoggedIn();
  //     setIsAuthenticated(loggedIn);
  //     if (!loggedIn) {
  //       router.push("/login");
  //     }
  //     setIsLoading(false);
  //   };

  //   checkAuth();
  // }, [router]);

  // if (isLoading) {
  //   return (
  //     <>
  //       <LoadingPage />
  //     </>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <Layout>
      <Layout hasSider>
        <Sidebar />
        <Layout>
          <Contents>{children}</Contents>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
