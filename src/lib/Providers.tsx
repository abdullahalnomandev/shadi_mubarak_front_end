"use client";
import i18n from "@/app/i18n";
import {
  getFingerprintJsApiKey,
  getGoogleClientId,
} from "@/helpers/config/envConfig";
import { store } from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId={getGoogleClientId()}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <FpjsProvider
            loadOptions={{
              apiKey: getFingerprintJsApiKey(),
              region: "ap",
            }}>
            <AntdRegistry>{children}</AntdRegistry>
          </FpjsProvider>
        </I18nextProvider>
      </Provider>
    </GoogleOAuthProvider>
  );
};

export default Providers;

// <GoogleOAuthProvider clientId={getGoogleClientId()}>
//   <Provider store={store}>
//     <I18nextProvider i18n={i18n}>
//       <FpjsProvider
//         loadOptions={{
//           apiKey: getFingerprintJsApiKey(),
//           region: "ap",
//         }}>
//         <AntdRegistry>{children}</AntdRegistry>
//       </FpjsProvider>
//     </I18nextProvider>
//   </Provider>
// </GoogleOAuthProvider>
