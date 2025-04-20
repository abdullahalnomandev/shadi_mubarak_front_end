import React from "react";
import Sidebar from "@/components/UI/Sidebar";
import Contents from "@/components/UI/Contents";
import { Layout } from "antd";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sidebar />
      <Contents>
        {children}
      </Contents>
    </Layout>
  );
};

export default DashboardLayout;
