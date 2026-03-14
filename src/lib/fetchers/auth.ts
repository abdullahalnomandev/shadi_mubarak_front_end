"use client";
import { getBaseUrl } from "@/helpers/config/envConfig";


 export const verifyUser = async (verificationToken: string) => {
  const res = await fetch(`${getBaseUrl()}/auth/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ verificationToken }),
  });

  if (!res.ok) {
    throw new Error("Failed to verify user");
  }

  return res.json();
}
