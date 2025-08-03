"use client";
import logo from "@/assets/logo.png";
import { languageKey } from "@/constants/storageKey";
import {
  GlobalOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Dropdown, Layout, Menu } from "antd";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderUserActions from "../UI/HeaderUserActions";

const { Header: AntHeader } = Layout;

const setCookie = (name: string, value: string) => {
  const farFuture = new Date(2100, 0, 1);
  document.cookie = `${name}=${value};expires=${farFuture.toUTCString()};path=/`;
};

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
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

  const changeLanguage = (newLocale: string) => {
    setCookie(languageKey, newLocale);
    router.refresh();
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

  const languageItems = [
    {
      key: "bn",
      label: (
        <div
          className='flex items-center gap-2 py-1 px-2'
          onClick={() => changeLanguage("bn")}>
          <span className='text-sm font-medium'>বাংলা (BN)</span>
        </div>
      ),
    },
    {
      key: "en",
      label: (
        <div
          className='flex items-center gap-2 py-1 px-2'
          onClick={() => changeLanguage("en")}>
          <span className='text-sm font-medium'>English (EN)</span>
        </div>
      ),
    },
  ];

  const currentLanguageDisplay = (
    <span className='text-sm font-medium'>
      {locale === "bn" ? "বাংলা (BN)" : "English (EN)"}
    </span>
  );

  const currentMenuKey =
    navItems.find((item) => pathname?.startsWith(item.key))?.key ?? "/";

  return (
    <AntHeader
      className={`!bg-white dark:!bg-slate-900 dark:!text-slate-300 sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}>
      <div className='flex justify-between items-center px-4 sm:px-8 h-full max-w-7xl m-auto'>
        <div>
          <Link href='/'>
            <Image src={logo} alt='Shadi Mubarak' width={40} height={40} />
          </Link>
        </div>

        <div className='hidden md:flex items-center justify-center flex-1'>
          <Menu
            mode='horizontal'
            defaultSelectedKeys={[currentMenuKey]}
            items={navItems}
            disabledOverflow
            className='!bg-transparent !border-none'
            theme={isDarkMode ? "dark" : "light"}
          />
        </div>

        <div className='flex items-center gap-2'>
          <Dropdown
            menu={{
              items: languageItems,
              selectedKeys: [locale],
            }}
            trigger={["click"]}
            placement='bottomRight'
            className='cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200'>
            <Button
              type='text'
              className='flex items-center gap-2 !border-none hover:!bg-transparent'
              icon={
                <GlobalOutlined className='!text-lg dark:!text-slate-300' />
              }
              suffix={
                <span className='ml-1 inline-block transition-transform duration-200 group-hover:rotate-180'>
                  ▼
                </span>
              }>
              {currentLanguageDisplay}
            </Button>
          </Dropdown>

          <Button
            type='text'
            onClick={toggleDarkMode}
            className='flex items-center justify-center !border-none hover:!bg-gray-100 dark:hover:!bg-slate-800'
            icon={
              isDarkMode ? (
                <SunOutlined className='!text-base !text-yellow-400' />
              ) : (
                <MoonOutlined className='!text-base !text-slate-700 dark:!text-slate-300' />
              )
            }
          />

          <HeaderUserActions />

          <div className='md:hidden'>
            <Button
              type='text'
              icon={<MenuOutlined className='dark:!text-slate-50' />}
              onClick={() => setDrawerVisible(true)}
              className='!border-none hover:!bg-gray-100 dark:hover:!bg-slate-800'
            />
          </div>
        </div>

        <Drawer
          title={
            <div className='flex items-center justify-between'>
              <Image src={logo} alt='Shadi Mubarak' width={30} height={30} />
              <Dropdown
                menu={{
                  items: languageItems,
                  selectedKeys: [locale],
                }}
                trigger={["click"]}
                placement='bottomRight'>
                <Button
                  type='text'
                  size='small'
                  className='flex items-center gap-1 !border-none'>
                  <GlobalOutlined className='!text-sm' />
                  {locale === "bn" ? "বাংলা (BN)" : "English (EN)"}
                </Button>
              </Dropdown>
            </div>
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
