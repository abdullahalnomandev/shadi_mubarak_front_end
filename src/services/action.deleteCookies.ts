"use server";

import { cookies } from "next/headers";

export async function deleteCookies(keys: string[]) {
  const cookieStore = await cookies(); 

  for (const key of keys) {
    cookieStore.delete(key);
  }
}
