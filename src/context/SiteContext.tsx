import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('rg-language') || 'fr');

  useEffect(() => {
    window.localStorage.setItem('rg-language', language);
    document.documentElement.lang = language;
    document.documentElement.style.colorScheme = 'dark';
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isEnglish: language === 'en',
    }),
    [language],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error('useSite must be used inside SiteProvider');
  }

  return context;
}
