"use client";

import profileImage from "@/assets/girl.jpg";
import { BioDataStatus } from "@/constants/bioData";
import { sidebarItems } from "@/constants/sidebarItems";
import { useGetUserQuery } from "@/redux/api/user";
import { getUserInfo, isUserLoggedIn } from "@/services/auth.service";
import { logOutUser } from "@/services/logOutUser";
import { IUserPayload } from "@/types";
import { getBioDataStatusLabel } from "@/utils/biodata-status";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Menu, Popover, Progress, Tooltip } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./Button";
import ProfileStatusAction from "./ProfileStatusAction";

const Content = ({ role, hide }: { role: string; hide?: () => void }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState(pathname);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  // const handleMenuClick = ({ key }: { key: string }) => {
  //   router.push(key);
  //   hide(); // Close popover after navigation
  // };

  const handleLogout = () => {
    logOutUser(router);
  };

  const { data: userData } = useGetUserQuery({});

  const completedSteps = (userData?.user as any)?.bioData?.completedSteps;
  console.log({ completedSteps });

  const totalSteps = 10;
  const basePercent = 15;
  const maxPercent = 100;
  const stepIncrement = (maxPercent - basePercent) / totalSteps;
  const completedCount = completedSteps?.length;
  const profileStatus = (userData?.user as any)?.bioData?.profileStatus;

  const percent = Math.min(
    basePercent + stepIncrement * completedCount,
    maxPercent
  );

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };
  return (
    <>
      <div className="max-w-xs mx-auto mb-1 border-b border-gray-300  p-4 pt-1 bg-white">
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-600 shadow">
            <Image
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-medium text-gray-700">
            Biodata Status:
          </span>
          <span
            className={`text-xs font-semibold px-3 py-0.5 rounded-full border ${
              profileStatus === BioDataStatus.NOT_STARTED
                ? "text-gray-800 bg-gray-100 border-gray-300"
                : profileStatus === BioDataStatus.INCOMPLETE
                ? "text-orange-800 bg-orange-100 border-orange-300"
                : profileStatus === BioDataStatus.NOT_SUBMITTED
                ? "text-blue-800 bg-blue-100 border-blue-300"
                : profileStatus === BioDataStatus.PENDING
                ? "text-yellow-800 bg-yellow-100 border-yellow-300"
                : profileStatus === BioDataStatus.REJECTED
                ? "text-red-800 bg-red-100 border-red-300"
                : "text-green-800 bg-green-100 border-green-300" // for verified status
            }`}
          >
            {getBioDataStatusLabel(profileStatus)}
          </span>
        </div>
        {/* Progress & Tip */}
        <div className="mb-2">
          <Tooltip title="Biodata completion: 50%" placement="bottomRight">
            <Progress
              percent={percent}
              status="active"
              strokeColor={{
                from: "#06b6d4",
                to: "#3b82f6",
              }}
              percentPosition={{
                align: "end",
                type: "outer",
              }}
              showInfo={true}
            />
          </Tooltip>
          <p className="text-sm text-gray-500 mt-1">Complete your profile</p>
        </div>

        {/* Edit Button */}
        <ProfileStatusAction profileStatus={profileStatus} />
      </div>

      {/* Sidebar Menu */}
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        items={sidebarItems(role, handleLogout, t)}
        onClick={() => {
          hide?.();
        }}
      />
    </>
  );
};

const HeaderUserActions = () => {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  const isAuthenticated = isUserLoggedIn();

  // Only get user info if authenticated
  const userInfo = isAuthenticated ? (getUserInfo() as IUserPayload) : null;
  const role = userInfo?.role || "user"; // Provide a default role
  if (!isAuthenticated) {
    return (
      <div className="hidden md:flex items-center gap-3">
        <Link href="/login">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium  bg-white border rounded-md hover:bg-gray-50 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105 border-pink-500 text-pink-500 hover:border-pink-500 hover:text-pink-500 focus:ring-pink-500"
          >
            {t("header.login")}
          </Button>
        </Link>
        <Link href="/register">
          <Button
            variant="cta"
            className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105 focus:ring-pink-500"
          >
            {t("header.register")}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <Popover
        placement="bottom"
        open={open}
        onOpenChange={handleOpenChange}
        content={<Content role={role} hide={hide} />}
        trigger="hover"
      >
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{ backgroundColor: "#3051F2" }}
          className="cursor-pointer"
        />
      </Popover>
    </div>
  );
};

export default HeaderUserActions;
