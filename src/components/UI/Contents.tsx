"use client";
import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content style={{ margin: "0 09px", color: "black", minHeight: "100vh" }}>
      {children}
    </Content>
  );
};

export default Contents;
