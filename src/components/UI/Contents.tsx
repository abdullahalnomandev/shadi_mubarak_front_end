"use client";
import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ margin: "0 09px",  minHeight: "100vh"  }} className="dark:bg-black dark:!text-white">
      {children}
    </Content>
  );
};

export default Contents;
