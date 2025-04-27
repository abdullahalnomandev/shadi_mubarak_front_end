/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type TranslationReturn = {
  t: (key: string) => string;
  i18n: any;
};

export const useTranslate = (): TranslationReturn => {
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    t: mounted ? t : () => "",
    i18n: mounted ? i18n : { changeLanguage: () => Promise.resolve() }
  };
};