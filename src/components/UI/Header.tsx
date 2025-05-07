"use client";
import { MenuOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle initial theme setup
  useEffect(() => {
    // Check system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    // Set initial theme based on saved preference or system preference
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setIsDarkMode(initialTheme === "dark");
    applyTheme(initialTheme as "light" | "dark");
  }, []);

  // Apply theme changes
  const applyTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  // Toggle theme
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
    { key: "0", label: <Link href="/">Home</Link> },
    { key: "1", label: <Link href="/about">About</Link> },
    { key: "2", label: <Link href="/how-it-works">How it Works</Link> },
    { key: "3", label: <Link href="/pricing">Pricing</Link> },
    { key: "4", label: <Link href="/faq">FAQ</Link> },
    { key: "5", label: <Link href="/contact">Contact</Link> },
  ];

  return (
    <AntHeader
      className={`!bg-white dark:!bg-gray-900 sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 h-full">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Shadi Mubarak" width={40} height={40} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menu
            mode="horizontal"
            items={navItems}
            className="!border-none dark:!bg-gray-900 dark:text-white"
          />
        </div>

        {/* Theme Toggle Button */}
        <Button
          type="text"
          onClick={toggleDarkMode}
          className="flex items-center justify-center mr-4 !border-none"
          icon={
            isDarkMode ? (
              <SunOutlined className="text-xl text-yellow-400" />
            ) : (
              <MoonOutlined className="text-xl text-gray-600" />
            )
          }
        />

        {/* Desktop Buttons */}
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            type="text"
            icon={<MenuOutlined className="dark:text-white" />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title={
            <Image src={logo} alt="Shadi Mubarak" width={30} height={30} />
          }
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="dark:!bg-gray-900"
        >
          <Menu
            mode="vertical"
            items={navItems}
            className="border-none dark:!bg-gray-900 dark:text-white"
          />
          <div className="mt-6 flex flex-col gap-3">
            <Button
              type="link"
              href="/login"
              className="text-blue-800 dark:text-blue-400"
            >
              Login
            </Button>
            <Button
              type="primary"
              href="/register"
              className="bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Register
            </Button>
          </div>
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;
