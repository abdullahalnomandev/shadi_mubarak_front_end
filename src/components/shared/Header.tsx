"use client";
import logo from "@/assets/logo.png";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderUserActions from "../UI/HeaderUserActions";

const { Header: AntHeader } = Layout;

const Header = () => {
  const pathname = usePathname();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setIsDarkMode(initialTheme === "dark");
    applyTheme(initialTheme as "light" | "dark");
  }, []);

  const applyTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "/", label: <Link href='/'>Home</Link> },
    { key: "/about", label: <Link href='/about'>About</Link> },
    {
      key: "/how-it-works",
      label: <Link href='/how-it-works'>How it Works</Link>,
    },
    { key: "/pricing", label: <Link href='/pricing'>Pricing</Link> },
    { key: "/faq", label: <Link href='/faq'>FAQ</Link> },
    { key: "/contact", label: <Link href='/contact'>Contact</Link> },
  ];

  // Match closest route key
  const currentMenuKey =
    navItems.find((item) => pathname?.startsWith(item.key))?.key ?? "/";

  return (
    <AntHeader
      className={`!bg-white dark:!bg-slate-900 dark:!text-slate-300 sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}>
      <div className='flex justify-between items-center px-4 sm:px-8 h-full'>
        {/* Logo */}
        <div>
          <Link href='/'>
            <Image src={logo} alt='Shadi Mubarak' width={40} height={40} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center justify-center flex-1'>
          <div className='flex justify-center'>
            <Menu
              mode='horizontal'
              defaultSelectedKeys={[currentMenuKey]}
              items={navItems}
              disabledOverflow
              className='!bg-transparent !border-none'
              theme={isDarkMode ? "dark" : "light"}
            />
          </div>
        </div>

        {/* Theme Toggle Button */}
        <Button
          type='text'
          onClick={toggleDarkMode}
          className='flex items-center justify-center mr-4 !border-none'
          icon={
            isDarkMode ? (
              <SunOutlined className='!text-base !text-yellow-400' />
            ) : (
              <MoonOutlined className='!text-base !text-slate-700' />
            )
          }
        />

        <HeaderUserActions />

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          <Button
            type='text'
            icon={<MenuOutlined className='dark:!text-slate-50' />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <Image src={logo} alt='Shadi Mubarak' width={30} height={30} />
          }
          placement='right'
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className='dark:!bg-gray-900'>
          <Menu
            mode='vertical'
            selectedKeys={[currentMenuKey]}
            items={navItems}
            className='border-none dark:text-white'
          />
          <div className='mt-6 flex flex-col gap-3'>
            <Button
              type='link'
              href='/login'
              className='text-blue-800 dark:text-blue-400'>
              Login
            </Button>
            <Button
              type='primary'
              href='/register'
              className='bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'>
              Register
            </Button>
          </div>
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;
