"use client";
import React from "react";
import { Breadcrumb, Layout } from "antd";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {

  return (
    <Content style={{ margin: "0 16px" ,color:'black' , minHeight:'100vh' }}>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "User" }, { title: "Bill" }]}
      />
        {children}
    </Content>
  );
};

export default Contents;
