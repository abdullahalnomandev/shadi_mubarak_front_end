"use client";
import React from "react";
import { Layout } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ margin: "0 09px", color: "black", minHeight: "100vh" }}>
      <UMBreadCrumb items={[
        { label: `${base}` , link:`/${base}` }, 
        { label: `student`, link:`/${base}/student` },
        { label: `student`, link:"" },
        ]} />
      {children}
    </Content>
  );
};

export default Contents;
