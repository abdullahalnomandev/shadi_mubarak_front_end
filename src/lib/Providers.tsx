"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { AntdRegistry } from "@ant-design/nextjs-registry";

interface IProps {
  children: React.ReactNode;
}
const Providers = ({ children }: IProps) => {
  return (
    <Provider store={store}>
      <AntdRegistry>{children}</AntdRegistry>
    </Provider>
  );
};

export default Providers;
