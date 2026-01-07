'use client';

import type { ReactNode } from 'react';
import { createContext, useState, useEffect, useCallback } from 'react';

export type Language = 'en' | 'tr';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem('mentack-lang') as Language | null;
      if (storedLanguage && ['en', 'tr'].includes(storedLanguage)) {
        setLanguageState(storedLanguage);
      }
    } catch (error) {
      console.warn('Could not access localStorage:', error);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    try {
      localStorage.setItem('mentack-lang', lang);
    } catch (error) {
       console.warn('Could not access localStorage:', error);
    }
    setLanguageState(lang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
