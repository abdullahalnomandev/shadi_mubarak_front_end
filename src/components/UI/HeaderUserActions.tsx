"use client";

import profileImage from "@/assets/girl.jpg";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo, isUserLoggedIn } from "@/services/auth.service";
import { logOutUser } from "@/services/logOutUser";
import { IUserPayload } from "@/types";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Menu, Popover, Progress, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Button from "./Button";

const Content = ({ role, hide }: { role: string; hide: () => void }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuClick = ({ key }: { key: string }) => {
    router.push(key);
    hide(); // Close popover after navigation
  };

  const handleLogout = () => {
    logOutUser(router);
  };

  return (
    <>
      <div className='max-w-xs mx-auto mb-1 border-b border-gray-300  p-4 bg-white'>
        {/* Profile Image */}
        <div className='flex justify-center mb-1'>
          <div className='w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500'>
            <Image
              src={profileImage}
              alt='Profile'
              className='object-cover w-full h-full'
              width={96}
              height={96}
            />
          </div>
        </div>

        {/* Progress & Tip */}
        <div className='mb-2'>
          <Tooltip title='Biodata completion: 50%' placement='bottomRight'>
            <Progress
              percent={50}
              status='active'
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
          <p className='text-sm text-gray-500 mt-1'>Complete your profile</p>
        </div>

        {/* Status */}
        <div className='flex justify-between items-center mt-4'>
          <span className='text-sm mr-1 font-medium text-gray-700'>
            Biodata Status:
          </span>
          <span className='text-xs font-semibold text-yellow-800 bg-yellow-100 px-1 py-0.5 rounded-full border border-yellow-300'>
            Not Completed
          </span>
        </div>

        {/* Edit Button */}
        <button
          className='w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow cursor-pointer '
          onClick={() => router.push(`/${role}/edit-biodata`)}>
          <FaRegEdit size={16} />
          Edit Biodata
        </button>
      </div>

      {/* Sidebar Menu */}
      <Menu
        onClick={handleMenuClick}
        theme='light'
        mode='inline'
        selectedKeys={[pathname]}
        items={sidebarItems(role, handleLogout)}
      />
    </>
  );
};

const HeaderUserActions = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

  // Only get user info if authenticated
  const userInfo = isAuthenticated ? (getUserInfo() as IUserPayload) : null;
  const role = userInfo?.role || "user"; // Provide a default role
  const isLoggedIn = isUserLoggedIn();

  if (isLoading || !isLoggedIn) {
    return (
      <div className='hidden md:flex items-center gap-3'>
        <Link href='/login'>
          <button
            type='default'
            className='flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105'>
            Sign In
          </button>
        </Link>
        <Link href='/register'>
          <Button
            variant='cta'
            className='flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105'>
            Create Account
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='flex items-center'>
      <Popover
        placement='bottom'
        open={open}
        onOpenChange={handleOpenChange}
        content={<Content role={role} hide={hide} />}
        trigger='hover'>
        <Avatar
          size='large'
          icon={<UserOutlined />}
          style={{ backgroundColor: "#3051F2" }}
          className='cursor-pointer'
        />
      </Popover>
    </div>
  );
};

export default HeaderUserActions;
