import { authKey } from "@/constants/storageKey";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getUserInfoFromCookie = async () => {
  const accessToken = (await cookies()).get(authKey)?.value;
  const decoded = accessToken ? jwtDecode(accessToken) : null;

  return decoded;
};
