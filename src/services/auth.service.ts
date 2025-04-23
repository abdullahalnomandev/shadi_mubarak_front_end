import { authKey } from "@/constants/storageKey";
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