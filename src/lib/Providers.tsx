"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ConfigProvider } from "antd";
import '@ant-design/v5-patch-for-react-19';


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
        <ConfigProvider>
          {children}
        </ConfigProvider>
    </Provider>
  );
};

export default Providers;
