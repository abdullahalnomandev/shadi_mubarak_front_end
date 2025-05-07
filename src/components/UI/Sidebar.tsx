"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { IUserPayload } from "@/types";
import SidebarProfile from "./SidebarProfile";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as IUserPayload;

  return (
    <Sider
      // collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={265}
      theme="light"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <SidebarProfile />
      <Menu theme="light" mode="inline" items={sidebarItems(role)} />
    </Sider>
  );
};

export default Sidebar;
