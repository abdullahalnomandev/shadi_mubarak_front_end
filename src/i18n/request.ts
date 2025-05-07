/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRequestConfig } from "next-intl/server";
import { cookies } from 'next/headers';
import { languageKey } from "@/constants/storageKey";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const language = (await cookieStore).get(languageKey)?.value;
  const locale = language || "en";
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
