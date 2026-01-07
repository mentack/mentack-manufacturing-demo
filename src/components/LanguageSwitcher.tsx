'use client';

import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-semibold text-sm tracking-widest"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
    >
      {language === 'en' ? 'TR' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
