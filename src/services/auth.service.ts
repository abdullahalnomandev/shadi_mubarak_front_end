import { authKey } from "@/constants/storageKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/logal-storage";
export const storeUserInfo = ({accessToken}: {accessToken:string}) => {
   return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = ( ) => {
  const authLocalStorageData = getFromLocalStorage(authKey);
  if(authLocalStorageData) {
    return decodeToken(authLocalStorageData) ?? "";
  }
};

export const isUserLoggedIn = () => {
  return !!getFromLocalStorage(authKey);
}

export const removedUserInfo = (key:string) => {
    return localStorage.removeItem(key);
}

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
}