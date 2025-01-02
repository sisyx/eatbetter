import { useEffect } from 'react';
import i18n from 'i18next';

export const useLanguagePersistence = () => {
  useEffect(() => {
    // Load saved language on mount
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    // Listen for language changes
    const handleLanguageChange = (lng: "en" | "fa") => {
      localStorage.setItem('language', lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);
};