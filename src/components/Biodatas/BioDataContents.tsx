"use client";
import React from "react";
import { Layout } from "antd";
const { Content } = Layout;
const BioDataContents = ({ children }: { children: React.ReactNode }) => {
  return <Content style={{ overflow: "initial" }}>{children}</Content>;
};

export default BioDataContents;
