"use client";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { IUserPayload } from "@/types";
import { Layout, Menu } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SidebarProfile from "./SidebarProfile";

const { Sider } = Layout;

const Sidebar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(pathname);

  const { role } = getUserInfo() as IUserPayload;

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname, selectedKey]);

  console.log({
    selectedKey,
    usePathname: usePathname(),
    pathname,
  });
  return (
    <Sider
      // collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={265}
      theme='light'
      style={{
        overflow: "auto",
        height: "calc(100vh - 64px)",
        position: "sticky",
        left: 0,
        top: "64px",
        bottom: 0,
      }}>
      <SidebarProfile role={role} />
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={[usePathname()]}
        activeKey={usePathname()}
        selectedKeys={[selectedKey]}
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
