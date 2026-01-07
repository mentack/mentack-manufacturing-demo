'use client';

import { useContext } from 'react';
import { LanguageContext, type LanguageContextType } from '@/context/LanguageProvider';
import { translations } from '@/lib/translations';

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }

  const { language, setLanguage } = context;
  
  const t = (key: keyof typeof translations.en, replacements?: Record<string, string>) => {
    let translation = translations[language]?.[key] || translations['en'][key];
    if (replacements) {
      Object.keys(replacements).forEach(rKey => {
        translation = translation.replace(`{{${rKey}}}`, replacements[rKey]);
      })
    }
    return translation;
  };

  return { t, language, setLanguage };
};
