import { removedUserInfo } from "@/services/auth.service";
import {
  CrownOutlined,
  DashboardOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaRegEdit, FaRegHeart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoCartOutline, IoKeyOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { USER_ROLE } from "./role";
import { authKey } from "./storageKey";

export const sidebarItems = (role: string) => {
  const handleLogout = () => {
    removedUserInfo(authKey);
  };

  const defaultItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}`}>Profile</Link>,
      key: `/${role}`,
      icon: <UserOutlined />,
    },
    {
      label: "Settings",
      key: `/${role}/account-settings`,
      icon: <SettingOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/settings/change-password`}>
              Change Password
            </Link>
          ),
          key: `/${role}/settings/change-password`,
          icon: <IoKeyOutline />,
        },
        {
          label: (
            <Link href={`/${role}/settings/delete-biodata`}>
              Delete Biodata
            </Link>
          ),
          key: `/${role}/settings/delete-biodata`,
          icon: <MdDeleteOutline />,
        },
      ],
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
    },
    ...defaultItems,
    {
      label: <Link href={`/${role}/my-biodata`}>My Biodata</Link>,
      key: `/${role}/my-biodata`,
      icon: <ImProfile />,
    },
    {
      label: <Link href={`/${role}/edit-biodata`}>Edit BioData</Link>,
      key: `/${role}/edit-biodata`,
      icon: <FaRegEdit />,
    },
    {
      label: <Link href={`/${role}/favorite-list`}>Favorites List</Link>,
      key: `/${role}/favorite-list`,
      icon: <FaRegHeart />,
    },
    {
      label: <Link href={`/${role}/my-purchased`}>My purchased</Link>,
      key: `/${role}/my-purchased`,
      icon: <IoCartOutline />,
    },
    {
      label: (
        <Button
          type='link'
          href='/login'
          className='!text-red-500'
          onClick={handleLogout}>
          Log out
        </Button>
      ),
      key: `/${role}/log-out`,
      icon: <CiLogout className='!text-red-500' />,
    },
  ];

  if (role === USER_ROLE.USER) return userItems;
  if (role === USER_ROLE.ADMIN) return adminItems;
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
};
