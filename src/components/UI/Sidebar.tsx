"use client";
import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { logOutUser } from "@/services/logOutUser";
import { IUserPayload } from "@/types";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import CustomButton from "./Button";
import SidebarProfile from "./SidebarProfile";
import Link from "next/link";

const { Sider } = Layout;

const Sidebar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(pathname);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const router = useRouter();

  const { role } = getUserInfo() as IUserPayload;

  useEffect(() => {
    setSelectedKey(pathname);
  }, [pathname]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Set initial open keys based on current pathname
  useEffect(() => {
    const menuItems = sidebarItems(role, handleLogout, t);
    const findParentKey = (items: any[], targetPath: string): string | null => {
      for (const item of items) {
        if (item.children) {
          const childMatch = item.children.find(
            (child: any) => child.key === targetPath
          );
          if (childMatch) return item.key;

          const nestedMatch = findParentKey(item.children, targetPath);
          if (nestedMatch) return item.key;
        }
      }
      return null;
    };

    const parentKey = findParentKey(menuItems as any, pathname);
    if (parentKey && !openKeys.includes(parentKey)) {
      setOpenKeys([parentKey]);
    }
  }, [pathname, role, t, openKeys]);


  const handleLogout = () => {
    logOutUser(router);
  };


  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <>
      {/* Desktop Sidebar - Keep exactly as you want */}
      {/* Mobile Menu Button */}
      {isMobile && mobileDrawerOpen === false && (
        <CustomButton
          variant='primary'
          onClick={() => setMobileDrawerOpen(true)}
          aria-label='Open menu'
          className='rounded-xs !px-1'
          style={{
            position: "fixed",
            top: 60,
            left: 0,
            zIndex: 1100,
            width: 40,
            height: 40,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            color: "white",
          }}>
          <FaChevronRight />
        </CustomButton>
      )}

      {!isMobile && (
        <Sider
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
          <SidebarProfile  />
          <Menu
            theme='light'
            mode='inline'
            selectedKeys={[selectedKey]}
            openKeys={openKeys}
            onOpenChange={handleOpenChange}
            items={sidebarItems(role, handleLogout, t)}
          />
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          placement='left'
          onClose={() => setMobileDrawerOpen(false)}
          open={mobileDrawerOpen}
          width={280}
          closable={false}
          styles={{
            body: {
              padding: 0,
              height: "100%",
            },
          }}
          zIndex={1000}
          className='md:hidden'
          destroyOnClose={false}>
          <div className='h-full flex flex-col'>
            {/* Mobile Navigation Header */}
            <div className='flex justify-between items-center px-6 py-4 border-b border-gray-100 sticky top-0 bg-gradient-to-r from-pink-50 to-indigo-50 backdrop-blur-sm z-10 shadow-sm'>
              <div className='flex items-center space-x-3'>
                <Link href='/'>
                  <h2 className='text-xl font-bold tracking-tight bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent'>
                    বিয়ের ঠিকানা
                  </h2>
                </Link>
              </div>
              <Button
                type='text'
                icon={<CloseOutlined className='text-lg' />}
                onClick={() => setMobileDrawerOpen(false)}
                className='
                  w-10 h-10 rounded-xl 
                  text-gray-600 hover:text-red-600 
                  hover:bg-white/80 active:bg-white 
                  border border-gray-200/50 hover:border-red-200 
                  shadow-sm hover:shadow-md 
                  transition-all duration-200 ease-out
                  flex items-center justify-center
                '
                aria-label='Close menu'
              />
            </div>

            {/* Mobile Content */}
            <div className='flex-1 overflow-y-auto px-2'>
              <SidebarProfile />
              <Menu
                theme='light'
                mode='inline'
                selectedKeys={[selectedKey]}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
                items={sidebarItems(role, handleLogout, t)}
                className='border-none mobile-menu'
                onClick={() => {
                    setMobileDrawerOpen(false);
                }}
              />
            </div>
          </div>
        </Drawer>
      )}

      {/* Custom Styles */}
      <style jsx global>{`
        /* Mobile menu specific styles */
        .mobile-menu .ant-menu-item {
          margin: 4px 8px !important;
          border-radius: 6px !important;
          height: auto !important;
          line-height: 1.4 !important;
          padding: 12px 16px !important;
          min-height: 48px !important;
        }

        .mobile-menu .ant-menu-item-selected {
          background-color: #e6f4ff !important;
          color: #1677ff !important;
        }

        .mobile-menu .ant-menu-submenu-title {
          margin: 4px 8px !important;
          border-radius: 6px !important;
          padding: 12px 16px !important;
          min-height: 48px !important;
        }

        .mobile-menu .ant-menu-submenu > .ant-menu {
          background-color: #f8f9fa !important;
        }

        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          .ant-menu-item,
          .ant-menu-submenu-title {
            display: flex !important;
            align-items: center !important;
          }

          .ant-layout-content {
            margin-left: 0 !important;
            padding-bottom: 100px;
          }

          body {
            padding-bottom: env(safe-area-inset-bottom, 0);
          }
        }

        /* Drawer z-index management */
        .ant-drawer-mask {
          z-index: 999;
        }

        .ant-drawer-wrap {
          z-index: 1000;
        }

        /* Smooth drawer transitions */
        .ant-drawer {
          transition: transform 0.3s ease;
        }

        /* Prevent scroll jump when drawer opens */
        .ant-drawer-open .ant-drawer-content {
          overflow-y: auto;
        }
      `}</style>
    </>
  );
};

export default Sidebar;

// "use client";
// import { sidebarItems } from "@/constants/sidebarItems";
// import { getUserInfo } from "@/services/auth.service";
// import { logOutUser } from "@/services/logOutUser";
// import { IUserPayload } from "@/types";
// import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
// import { Button, Drawer, Layout, Menu } from "antd";
// import { useTranslations } from "next-intl";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import SidebarProfile from "./SidebarProfile";

// const { Sider } = Layout;

// const Sidebar = () => {
//   const t = useTranslations();
//   const pathname = usePathname();
//   const [collapsed, setCollapsed] = useState(false);
//   const [selectedKey, setSelectedKey] = useState(pathname);
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [openKeys, setOpenKeys] = useState<string[]>([]);
//   const router = useRouter();

//   const { role } = getUserInfo() as IUserPayload;

//   // Check if device is mobile
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkIsMobile();
//     window.addEventListener("resize", checkIsMobile);
//     return () => window.removeEventListener("resize", checkIsMobile);
//   }, []);

//   useEffect(() => {
//     setSelectedKey(pathname);
//     // DON'T close mobile drawer when route changes - let user control it
//   }, [pathname]);

//   // Set initial open keys based on current pathname
//   useEffect(() => {
//     const menuItems = sidebarItems(role, handleLogout, t);
//     const findParentKey = (items: any[], targetPath: string): string | null => {
//       for (const item of items) {
//         if (item.children) {
//           const childMatch = item.children.find(
//             (child: any) => child.key === targetPath
//           );
//           if (childMatch) return item.key;

//           const nestedMatch = findParentKey(item.children, targetPath);
//           if (nestedMatch) return item.key;
//         }
//       }
//       return null;
//     };

//     const parentKey = findParentKey(menuItems, pathname);
//     if (parentKey && !openKeys.includes(parentKey)) {
//       setOpenKeys([parentKey]);
//     }
//   }, [pathname, role, t, openKeys]);

//   const handleLogout = () => {
//     logOutUser(router);
//     if (isMobile) {
//       setMobileDrawerOpen(false);
//     }
//   };

//   const toggleMobileDrawer = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   const handleOpenChange = (keys: string[]) => {
//     setOpenKeys(keys);
//   };

//   // Mobile Menu Button positioned at bottom of main menu
//   const MobileMenuButton = () => (
//     <Button
//       type='text'
//       icon={<MenuOutlined className='text-white text-lg' />}
//       onClick={toggleMobileDrawer}
//       className={`
//         fixed bottom-4 right-4 z-[1001]
//         bg-blue-600 hover:bg-blue-700 active:bg-blue-800
//         border-none rounded-full
//         w-12 h-12
//         flex items-center justify-center
//         shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/50
//         transition-all duration-300 ease-out
//         hover:scale-105 active:scale-95
//         md:hidden
//       `}
//       aria-label='Open menu'
//     />
//   );

//   // Sidebar Content
//   const SidebarContent = ({
//     isMobileDrawer = false,
//   }: {
//     isMobileDrawer?: boolean;
//   }) => (
//     <div className='h-full flex flex-col'>
//       {isMobileDrawer && (
//         <div className='flex justify-between items-center px-6 py-4 border-b border-gray-100 sticky top-0 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm z-10 shadow-sm'>
//           <div className='flex items-center space-x-3'>
//             <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md'>
//               <MenuOutlined className='text-white text-sm' />
//             </div>
//             <h2 className='text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent'>
//               Navigation
//             </h2>
//           </div>
//           <Button
//             type='text'
//             icon={<CloseOutlined className='text-lg' />}
//             onClick={() => setMobileDrawerOpen(false)}
//             className='
//               w-10 h-10 rounded-xl
//               text-gray-600 hover:text-red-600
//               hover:bg-white/80 active:bg-white
//               border border-gray-200/50 hover:border-red-200
//               shadow-sm hover:shadow-md
//               transition-all duration-200 ease-out
//               flex items-center justify-center
//             '
//             aria-label='Close menu'
//           />
//         </div>
//       )}

//       <div className={`flex-1 overflow-y-auto ${isMobileDrawer ? "px-2" : ""}`}>
//         <SidebarProfile role={role} />

//         <Menu
//           theme='light'
//           mode='inline'
//           selectedKeys={[selectedKey]}
//           openKeys={openKeys}
//           onOpenChange={handleOpenChange}
//           items={sidebarItems(role, handleLogout, t)}
//           className={`
//             border-none
//             ${isMobileDrawer ? "mobile-menu" : ""}
//           `}
//         />
//       </div>
//     </div>
//   );

//   return (
//     <>
//       {/* Mobile Menu Button - Only visible on mobile */}
//       {isMobile && <MobileMenuButton />}

//       {/* Desktop Sidebar */}
//       {!isMobile && (
//         <Sider
//           collapsible
//           collapsed={collapsed}
//           onCollapse={(value) => setCollapsed(value)}
//           width={265}
//           collapsedWidth={80}
//           theme='light'
//           className='
//             overflow-auto
//             sticky left-0 top-16 bottom-0
//             border-r border-gray-200
//           '
//           style={{
//             height: "calc(100vh - 64px)",
//           }}>
//           <SidebarContent />
//         </Sider>
//       )}

//       {/* Mobile Drawer */}
//       {isMobile && (
//         <Drawer
//           placement='left'
//           onClose={() => setMobileDrawerOpen(false)}
//           open={mobileDrawerOpen}
//           width={280}
//           closable={false}
//           bodyStyle={{
//             padding: 0,
//             height: "100%",
//           }}
//           zIndex={1000}
//           className='md:hidden'
//           destroyOnClose={false}>
//           <SidebarContent isMobileDrawer />
//         </Drawer>
//       )}

//       {/* Custom Styles */}
//       <style jsx global>{`
//         /* Mobile menu specific styles */
//         .mobile-menu .ant-menu-item {
//           margin: 4px 8px !important;
//           border-radius: 6px !important;
//           height: auto !important;
//           line-height: 1.4 !important;
//           padding: 12px 16px !important;
//           min-height: 48px !important;
//         }

//         .mobile-menu .ant-menu-item-selected {
//           background-color: #e6f4ff !important;
//           color: #1677ff !important;
//         }

//         .mobile-menu .ant-menu-submenu-title {
//           margin: 4px 8px !important;
//           border-radius: 6px !important;
//           padding: 12px 16px !important;
//           min-height: 48px !important;
//         }

//         .mobile-menu .ant-menu-submenu > .ant-menu {
//           background-color: #f8f9fa !important;
//         }

//         /* Better touch targets for mobile */
//         @media (max-width: 768px) {
//           .ant-menu-item,
//           .ant-menu-submenu-title {
//             display: flex !important;
//             align-items: center !important;
//           }

//           .ant-layout-content {
//             margin-left: 0 !important;
//             padding-bottom: 100px; /* Account for floating menu button */
//           }

//           /* Ensure menu button doesn't interfere with top menu */
//           body {
//             padding-bottom: env(safe-area-inset-bottom, 0);
//           }
//         }

//         /* Drawer z-index management */
//         .ant-drawer-mask {
//           z-index: 999;
//         }

//         .ant-drawer-wrap {
//           z-index: 1000;
//         }

//         /* Smooth drawer transitions */
//         .ant-drawer {
//           transition: transform 0.3s ease;
//         }

//         /* Prevent scroll jump when drawer opens */
//         .ant-drawer-open .ant-drawer-content {
//           overflow-y: auto;
//         }

//         /* Sticky profile section styling - only for mobile drawer */
//         .mobile-menu {
//           /* Mobile specific menu styling */
//         }
//       `}</style>
//     </>
//   );
// };

// export default Sidebar;
