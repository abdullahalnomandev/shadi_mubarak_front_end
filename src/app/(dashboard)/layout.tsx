"use client";

import { Layout } from "antd";
import React from "react";

import Contents from "@/components/UI/Contents";
import Sidebar from "@/components/UI/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
