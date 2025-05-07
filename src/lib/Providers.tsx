"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "@ant-design/v5-patch-for-react-19";
import i18n from "@/app/i18n";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { I18nextProvider } from "react-i18next";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getGoogleClientId } from "@/helpers/config/envConfig";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId={getGoogleClientId()}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AntdRegistry>{children}</AntdRegistry>
        </I18nextProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default Providers;
