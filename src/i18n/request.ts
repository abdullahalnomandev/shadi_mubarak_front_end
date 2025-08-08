/* eslint-disable @typescript-eslint/no-unused-vars */
import { languageKey } from "@/constants/storageKey";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const language = (await cookieStore).get(languageKey)?.value;
  const locale = language || "bn";
  try {
    const messages = await import(`../../locales/${locale}/translation.json`);
    return {
      locale,
      messages: messages.default,
    };
  } catch (error) {
    const fallbackMessages = await import(`../../locales/bn/translation.json`);
    return {
      locale: "bn",
      messages: fallbackMessages.default,
    };
  }
});
