"use client";
import logo from "@/assets/logo.png";
import { languageKey } from "@/constants/storageKey";
import {
  GlobalOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Select } from "antd";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderUserActions from "../UI/HeaderUserActions";
const { Header: AntHeader } = Layout;
import CustomButton from "../UI/Button";

const setCookie = (name: string, value: string) => {
  const farFuture = new Date(2100, 0, 1);
  document.cookie = `${name}=${value};expires=${farFuture.toUTCString()};path=/`;
};

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations();
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
    { key: "/", label: <Link href="/">{t("header.home")}</Link> },
    { key: "/about", label: <Link href="/about">{t("header.about")}</Link> },
    {
      key: "/how-it-works",
      label: <Link href="/how-it-works">{t("header.how_it_works")}</Link>,
    },
    { key: "/blog", label: <Link href="/blog">{t("header.blog")}</Link> },
    { key: "/faq", label: <Link href="/faq">{t("header.faq")}</Link> },
    {
      key: "/contact",
      label: <Link href="/contact">{t("header.contact")}</Link>,
    },
  ];

  const languageOptions = [
    {
      value: "bn",
      label: (
        <div className="flex items-center gap-3 py-1">
          <span className="text-sm font-medium">বাংলা</span>
        </div>
      ),
    },
    {
      value: "en",
      label: (
        <div className="flex items-center gap-3 py-1">
          <span className="text-sm font-medium">English</span>
        </div>
      ),
    },
  ];

  const handleLanguageChange = (value: string) => {
    changeLanguage(value);
  };

  // Only select menu item if we're exactly on that page or on a sub-page (but not home by default)
  const getCurrentMenuKey = () => {
    // If we're on the exact home page, don't select anything initially
    if (pathname === "/") return null;

    // Check for exact matches first
    const exactMatch = navItems.find((item) => pathname === item.key);
    if (exactMatch) return exactMatch.key;

    // Check for sub-pages (but exclude home page from this logic)
    const startsWithMatch = navItems.find(
      (item) => item.key !== "/" && pathname?.startsWith(item.key)
    );
    return startsWithMatch?.key || null;
  };

  const currentMenuKey = getCurrentMenuKey();
  const selectedKeys = currentMenuKey ? [currentMenuKey] : [];

  return (
    <>
      <AntHeader
        className={`!bg-white dark:!bg-slate-900 dark:!text-slate-300 sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-8 h-full max-w-7xl m-auto">
          <div>
            <Link href="/">
              <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                বিয়ের ঠিকানা
              </h2>
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <Menu
              mode="horizontal"
              items={navItems}
              selectedKeys={selectedKeys}
              disabledOverflow
              className="!bg-transparent !border-none"
              theme={isDarkMode ? "dark" : "light"}
            />
          </div>

          <div className="flex items-center gap-2">
            <Select
              value={locale}
              onChange={handleLanguageChange}
              options={languageOptions}
              size="middle"
              prefix={
                <GlobalOutlined className="!text-gray-500 dark:!text-gray-400" />
              }
              classNames={{
                popup: {
                  root: "language-dropdown", // replaces popupClassName
                },
              }}
              variant="borderless"
            />

            <Button
              type="text"
              onClick={toggleDarkMode}
              className="flex items-center justify-center !border-none hover:!bg-gray-100 dark:hover:!bg-slate-800"
              icon={
                isDarkMode ? (
                  <SunOutlined className="!text-base !text-yellow-400" />
                ) : (
                  <MoonOutlined className="!text-base !text-slate-700 dark:!text-slate-300" />
                )
              }
            />

            <HeaderUserActions />

            <div className="md:hidden">
              <Button
                type="text"
                icon={<MenuOutlined className="dark:!text-slate-50" />}
                onClick={() => setDrawerVisible(true)}
                className="!border-none hover:!bg-gray-100 dark:hover:!bg-slate-800"
              />
            </div>
          </div>

          <Drawer
            title={
              <div className="flex items-center justify-between">
                <Image src={logo} alt="Shadi Mubarak" width={30} height={30} />
                <div className="flex items-center gap-2">
                  <Select
                    value={locale}
                    onChange={handleLanguageChange}
                    options={languageOptions}
                    className="language-select-mobile"
                    style={{ width: 100 }}
                    size="small"
                    suffixIcon={<GlobalOutlined className="!text-gray-500" />}
                    variant="borderless"
                  />
                  <Button
                    type="text"
                    size="small"
                    onClick={toggleDarkMode}
                    className="!border-none"
                    icon={
                      isDarkMode ? (
                        <SunOutlined className="!text-sm !text-yellow-400" />
                      ) : (
                        <MoonOutlined className="!text-sm" />
                      )
                    }
                  />
                </div>
              </div>
            }
            placement="right"
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            className="dark:!bg-gray-900"
          >
            <Menu
              mode="vertical"
              selectedKeys={selectedKeys}
              items={navItems}
              className="border-none dark:text-white"
            />
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/login">
                <CustomButton
                  variant="outline"
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105 border-pink-500 text-pink-500 hover:border-pink-500 hover:text-pink-500 !w-full !focus:ring-pink-500"
                >
                  {t("header.login")}
                </CustomButton>
              </Link>
              <Link href="/register">
                <CustomButton
                  variant="cta"
                  className="flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105 !w-full !focus:ring-pink-500"
                >
                  {t("header.register")}
                </CustomButton>
              </Link>
            </div>
          </Drawer>
        </div>
      </AntHeader>
    </>
  );
};

export default Header;
