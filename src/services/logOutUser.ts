import { authKey } from "@/constants/storageKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import deleteCookies from "./action.deleteCookies";
import { removedUserInfo } from "./auth.service";

export const logOutUser = (router: AppRouterInstance) => {
  removedUserInfo(authKey);
  deleteCookies([authKey, "refreshToken"]);
  router.refresh();
  router.push("/");
};
