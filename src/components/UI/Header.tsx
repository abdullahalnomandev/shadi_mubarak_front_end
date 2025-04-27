"use client";
import React from "react";
import { Layout, Row, Dropdown, Avatar, Button, Space, Menu } from "antd";
import Link from "next/link";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removedUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";

const { Header: AntHeader } = Layout;

const Header = () => {
  const logOut = () => {
    removedUserInfo(authKey);
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button type="text" danger onClick={logOut}>
          Logout
        </Button>
      ),
    },
    {
      key: "1",
      label: <Link href="/dashboard">Dashboa</Link>,
    },
  ];

  const menuItems: MenuProps["items"] = [
    {
      key: "0",
      label: <Link href="/">Home</Link>,
    },
    {
      key: "1",
      label: <Link href="/about">About</Link>,
    },
    {
      key: "2",
      label: <Link href="/contact">Contact</Link>, 
    },
    {
      key: "3",
      label: <Link href="/guideline">Guideline</Link>, 
    },
    {
      key: "4",
      label: <Link href="/user">Dashboard</Link>, 
    }
  ]
  return (
    <AntHeader
      className="!bg-[#fff]"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        width: "100%",
        padding: "0 24px",
        boxShadow: "0 1px 4px rgba(0,21,41,.08)",
      }}
    >
      <Row justify="end" align="middle" className="h-full">
        <Menu
          mode="horizontal"
          className="border-none flex-1 justify-center"
          items={menuItems}
        />
        <Dropdown menu={{ items }} placement="bottomRight">
          <Space wrap size={16} className="cursor-pointer">
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
    // <AntHeader className="bg-white shadow-md fixed w-full z-50">
    //   <div className="container mx-auto flex justify-between items-center h-full">
    //     <div className="logo">
    //       <Link href="/">
    //         <Image src="/src/assets/login.png" alt="Shadi Mubarak" width={150} height={40} />
    //       </Link>
    //     </div>

    //     <Menu
    //       mode="horizontal"
    //       className="border-none flex-1 justify-center"
    //       items={menuItems}
    //     />

    //     <div className="auth-buttons space-x-4">
    //       <Button type="primary" href="/login">
    //         Login
    //       </Button>
    //       <Button href="/register">
    //         Register
    //       </Button>
    //     </div>
    //   </div>
    // </AntHeader>
  );
};

export default Header;
