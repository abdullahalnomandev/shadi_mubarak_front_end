"use client";
import { Layout } from "antd";
import React from "react";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{ minHeight: "100vh" }}
      className='dark:bg-slate-900 text-slate-500 bg-white dark:text-slate-400 antialiased p-3'>
      {children}
    </Content>
  );
};

export default Contents;
