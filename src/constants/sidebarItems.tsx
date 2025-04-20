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

type MenuItem = Required<MenuProps>['items'][number];

export const sidebarItems = (role: USER_ROLE.USER | USER_ROLE.ADMIN | USER_ROLE.SUPER_ADMIN) => {
  const defaultItems: MenuItem[] = [
    {
      label: <Link href={`/${role}/dashboard`}>Dashboard</Link>,
      key: `/${role}/dashboard`,
      icon: <DashboardOutlined />,
    },
    {
      label: <Link href={`/${role}/profile`}>Profile</Link>,
      key: `/${role}/profile`,
      icon: <UserOutlined />,
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
    {
      label: <Link href={`/${role}/account-settings`}>Account Settings</Link>,
      key: `/${role}/account-settings`,
      icon: <SettingOutlined />,      
      children: [
        {
          label: <Link href={`/${role}/account-settings/change-password`}>Change Password</Link>,
          key: `/${role}/account-settings/change-password`,
        },
        {
          label: <Link href={`/${role}/account-settings/delete-account`}>Delete Account</Link>,
          key: `/${role}/account-settings/delete-account`,
        },
      ],
    },
    {
      label: <Link href={`/${role}/logout`}>Logout</Link>,
      key: `/${role}/logout`,
      icon: <LogoutOutlined />,
    },
  ];

  const adminItems: MenuItem[] = [
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

  const superAdminItems: MenuItem[] = [
    ...defaultItems,
    {
      label: <Link href={`/${role}/manage-super-admin`}>Manage Super Admin</Link>,
      key: `/${role}/manage-super-admin`,
      icon: <CrownOutlined />,
    },
  ];

  if (role === USER_ROLE.USER) return defaultItems;
  if (role === USER_ROLE.ADMIN) return adminItems;
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
};
