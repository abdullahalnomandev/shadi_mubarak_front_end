import { setToLocalStorage } from "@/utils/logal-storage";

export const storeUserInfo = ({accessToken}: {accessToken:string}) => {
    setToLocalStorage('accessToken', accessToken);
};