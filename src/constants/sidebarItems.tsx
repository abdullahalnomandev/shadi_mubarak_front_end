import {
  CrownOutlined,
  DashboardOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, MenuProps } from "antd";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { FaRegEdit, FaRegHeart } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoCartOutline, IoKeyOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { USER_ROLE } from "./role";

export const sidebarItems = (
  role: string,
  handleLogout: () => void,
  t: (key: string) => string
) => {
  const defaultItems: MenuProps["items"] = [
    {
      label: t("sidebar.account_settings"),
      key: `/${role}/account-settings`,
      icon: <SettingOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/settings/change-password`}>
              {t("sidebar.change_password")}
            </Link>
          ),
          key: `/${role}/settings/change-password`,
          icon: <IoKeyOutline />,
        },
        {
          label: (
            <Link href={`/${role}/settings/delete-biodata`}>
              {t("sidebar.delete_biodata")}
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
      label: (
        <Link href={`/${role}/manage-users`}>{t("sidebar.manage_user")}</Link>
      ),
      key: `/${role}/manage-users`,
      icon: <TeamOutlined />,
    },
    {
      label: (
        <Link href={`/${role}/manage-admin`}>{t("sidebar.manage_admin")}</Link>
      ),
      key: `/${role}/manage-admin`,
      icon: <TeamOutlined />,
    },
  ];

  const superAdminItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/admin`}>{t("sidebar.manage_admin")}</Link>,
      key: `/${role}/admin`,
      icon: <CrownOutlined />,
    },
    {
      label: <Link href={`/${role}/user`}>{t("sidebar.manage_user")}</Link>,
      key: `/${role}/user`,
      icon: <CrownOutlined />,
    },
    ...defaultItems,
  ];
  const userItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/dashboard`}>{t("sidebar.dashboard")}</Link>,
      key: `/${role}/dashboard`,
      icon: <DashboardOutlined />,
    },
    {
      label: (
        <Link href={`/${role}/my-biodata`}>{t("sidebar.my_biodata")}</Link>
      ),
      key: `/${role}/my-biodata`,
      icon: <ImProfile />,
    },

    {
      label: (
        <Link href={`/${role}/edit-biodata`}>{t("sidebar.edit_biodata")}</Link>
      ),
      key: `/${role}/edit-biodata`,
      icon: <FaRegEdit />,
    },
    {
      label: (
        <Link href={`/${role}/favorite-list`}>
          {t("sidebar.favorite_list")}
        </Link>
      ),
      key: `/${role}/favorite-list`,
      icon: <FaRegHeart />,
    },
    {
      label: (
        <Link href={`/${role}/my-purchased`}>{t("sidebar.my_purchased")}</Link>
      ),
      key: `/${role}/my-purchased`,
      icon: <IoCartOutline />,
    },
    ...defaultItems,

    {
      label: (
        <Button type='link' className='!text-red-500' onClick={handleLogout}>
          {t("sidebar.logout")}
        </Button>
      ),
      key: "",
      icon: <CiLogout className='!text-red-500' />,
    },
  ];

  if (role === USER_ROLE.USER) return userItems;
  if (role === USER_ROLE.ADMIN) return adminItems;
  if (role === USER_ROLE.SUPER_ADMIN) return superAdminItems;
};
