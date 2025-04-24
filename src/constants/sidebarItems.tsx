import React from 'react';
import {
  DashboardOutlined,
  UserOutlined,
  IdcardOutlined,
  FilterOutlined,
  SettingOutlined,
  LogoutOutlined,
  TeamOutlined,
  CrownOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import Link from 'next/link';
import { USER_ROLE } from './role';


export const sidebarItems = (role: string) => {
  const defaultItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}`}>Profile</Link>,
      key: `/${role}`,
      icon: <UserOutlined />,
    },
    {
      label:"Account Settings",
      key: `/${role}/account-settings`,
      icon: <SettingOutlined />,      
      children: [
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
          icon:<SettingOutlined />
        },
        {
          label: <Link href={`/${role}/account-settings/delete-account`}>Delete Account</Link>,
          key: `/${role}/account-settings/delete-account`,
          icon:<SettingOutlined />

        },
      ],
    },
    {
      label: <Link href={`/${role}/logout`}>Logout</Link>,
      key: `/${role}/logout`,
      icon: <LogoutOutlined />,
    },
  ];

  const adminItems: MenuProps["items"] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/manage-users`}>Manage Users</Link>,
      key: `/${role}/manage-users`,
      icon: <TeamOutlined />,
    },
    {
      label: <Link href={`/${role}/manage-admin`}>Manage Admin</Link>,
      key: `/${role}/manage-admin`,
      icon: <TeamOutlined />,
    },
  ];

  const superAdminItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      key: `/${role}/admin`,
      icon: <CrownOutlined />,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      key: `/${role}/user`,
      icon: <CrownOutlined />,
    },
    ...defaultItems,
  ];
  const userItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      key: `/${role}/dashboard`,
      icon: <DashboardOutlined />,
      ...defaultItems,
    },
    {
      label: <Link href={`/${role}/edit-bio-data`}>Edit BioData</Link>,
      key: `/${role}/edit-bio-data`,
      icon: <IdcardOutlined />,
    },
    {
      label: <Link href={`/${role}/short-list`}>Short List</Link>,
      key: `/${role}/short-list`,
      icon: <FilterOutlined />,
    },

  ];

  if (role === USER_ROLE.USER) return userItems;
  if (role === USER_ROLE.ADMIN) return adminItems;
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
};
