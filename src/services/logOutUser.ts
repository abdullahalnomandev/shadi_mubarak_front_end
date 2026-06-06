import { authKey } from "@/constants/storageKey";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { removedUserInfo } from "./auth.service";
import { deleteCookies } from "./action.deleteCookies";

export const logOutUser = (router: AppRouterInstance) => {
  removedUserInfo(authKey);
  deleteCookies([authKey, "refreshToken"]);
  router.refresh();
  router.push("/");
};
