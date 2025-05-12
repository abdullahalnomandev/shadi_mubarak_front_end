"use client";

import { useEffect, useState } from "react";
import { Avatar, Button, Menu, Popover, Progress, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getUserInfo, isUserLoggedIn } from "@/services/auth.service";
import { FaRegEdit } from "react-icons/fa";
import Image from "next/image";
import profileImage from "@/assets/girl.jpg";
import { sidebarItems } from "@/constants/sidebarItems";
import { IUserPayload } from "@/types";
import { usePathname, useRouter } from "next/navigation";

const Contact = ({ role, hide }: { role: string; hide: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
    hide(); // Close popover after navigation
  };

  return (
    <>
      <div className="max-w-xs mx-auto mb-1 border-b border-gray-300  p-4 bg-white">
        {/* Profile Image */}
        <div className="flex justify-center mb-1">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500">
            <Image
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
              width={96}
              height={96}
            />
          </div>
        </div>

        {/* Progress & Tip */}
        <div className="mb-2">
          <Tooltip title="Biodata completion: 50%" placement="bottomRight">
            <Progress
              percent={50}
              status="active"
              strokeColor={{
                from: "#06b6d4",
                to: "#3b82f6",
              }}
              percentPosition={{
                align: "end",
                type: "outer",
              }}
            />
          </Tooltip>
          <p className="text-sm text-gray-500 mt-1">Complete your profile</p>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm mr-1 font-medium text-gray-700">
            Biodata Status:
          </span>
          <span className="text-xs font-semibold text-yellow-800 bg-yellow-100 px-1 py-0.5 rounded-full border border-yellow-300">
            Not Completed
          </span>
        </div>

        {/* Edit Button */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow cursor-pointer ">
          <FaRegEdit size={16} />
          Edit Biodata
        </button>
      </div>

      {/* Sidebar Menu */}
      <Menu
        onClick={handleMenuClick}
        theme="light"
        mode="inline"
        selectedKeys={[pathname]}
        items={sidebarItems(role)}
      />
    </>
  );
};

const HeaderUserActions = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const checkAuth = () => {
      try {
        const loggedIn = isUserLoggedIn();
        setIsAuthenticated(loggedIn);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
      } finally {
        // Add a small delay to prevent flash of loading state
        setTimeout(() => setIsLoading(false), 100);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="hidden md:flex items-center gap-3">
        <Link href="/login">
          <Button
            type="default"
            className="!h-10 !rounded-md border border-[#6208d4] dark:border-purple-400 dark:text-white"
          >
            Sign In
          </Button>
        </Link>
        <Link href="/register">
          <Button
            type="primary"
            className="!bg-[#6208d4] !h-10 !rounded-md !hover:bg-[#2708d4] dark:!bg-purple-600 dark:hover:!bg-purple-700"
          >
            Create Account
          </Button>
        </Link>
      </div>
    );
  }

  // Only get user info if authenticated
  const userInfo = isAuthenticated ? (getUserInfo() as IUserPayload) : null;
  const role = userInfo?.role || "user"; // Provide a default role

  return isAuthenticated ? (
    <div className="flex items-center">
      <Popover
        placement="bottom"
        open={open}
        onOpenChange={handleOpenChange}
        content={<Contact role={role} hide={hide} />}
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
  ) : (
    <div className="hidden md:flex items-center gap-3">
      <Link href="/login">
        <Button
          type="default"
          className="!h-10 !rounded-md border border-[#6208d4] dark:border-purple-400 dark:text-white"
        >
          Sign In
        </Button>
      </Link>
      <Link href="/register">
        <Button
          type="primary"
          className="!bg-[#6208d4] !h-10 !rounded-md !hover:bg-[#2708d4] dark:!bg-purple-600 dark:hover:!bg-purple-700"
        >
          Create Account
        </Button>
      </Link>
    </div>
  );
};

export default HeaderUserActions;
