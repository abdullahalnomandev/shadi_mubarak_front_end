import { authKey } from "@/constants/storageKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/logal-storage";
import axios from "axios";
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authLocalStorageData = getFromLocalStorage(authKey);
  if (authLocalStorageData) {
    return decodeToken(authLocalStorageData) ?? "";
  }
};

export const isUserLoggedIn = () => {
  return !!getFromLocalStorage(authKey);
};

export const removedUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

// export const setAccessToken = async (token: string, options: any) => {
//   try {
//     const res = await axios.post(`${getBaseUrl()}/api/auth/set-cookie`, {
//       token,
//     });
//     if (options && options?.redirect && res?.data?.success) {
//       window.location.href = options?.redirect;
//     }
//     return { success: true };
//   } catch (error) {
//     console.error("Error setting cookie:", error);
//     return {
//       success: false,
//       error: "Failed to set cookie",
//       status: 500,
//     };
//   }
// };

export const getUserInfoWithToken = async (accessToken: string) => {
  return await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
