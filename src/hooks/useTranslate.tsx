import { useEffect, useState } from 'react';
import { useTranslation, UseTranslationResponse } from 'react-i18next';

type TranslationReturn = {
  t: (key: string) => string;
  i18n: UseTranslationResponse<any, any>['i18n'];
};

export const useTranslate = (): TranslationReturn => {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return {
    t: isClient ? t : () => '',
    i18n: isClient ? i18n : ({} as UseTranslationResponse<any, any>['i18n']),
  };
};
