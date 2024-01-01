import React from "react";
import { useTranslation } from 'react-i18next';

const locales = {
  en: { title: 'English' },
  ru: { title: 'Русский' },
};

const LanguageSwitcher = ({ i18n }) => {
  const { t } = useTranslation();

  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale);
  };

  return (
    <li>
      <button
        className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => handleLanguageChange(i18n.language === 'ru' ? 'en' : 'ru')}
      >
        {t(i18n.language === 'ru' ? 'EN' : 'RU')}
      </button>
    </li>
  );
};

export default LanguageSwitcher;
