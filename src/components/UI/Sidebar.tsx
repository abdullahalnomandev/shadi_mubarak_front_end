"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { IUserPayload } from "@/types";
import SidebarProfile from "./SidebarProfile";
import { usePathname } from "next/navigation";

const { Sider } = Layout;

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(pathname);

  const { role } = getUserInfo() as IUserPayload;

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);
  return (
    <Sider
      // collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={265}
      theme="light"
      style={{
        overflow: "auto",
        height: "calc(100vh - 64px)",
        position: "sticky",
        left: 0,
        top: "64px",
        bottom: 0,
      }}
    >
      <SidebarProfile />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[usePathname()]}
        activeKey={usePathname()}
        selectedKeys={[selectedKey]}
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
