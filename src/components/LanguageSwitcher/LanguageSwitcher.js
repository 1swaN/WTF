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
      <a
        href="#"
        className={`menu__link ${i18n.language === 'ru' ? 'active' : ''}`}
        onClick={() => handleLanguageChange(i18n.language === 'ru' ? 'en' : 'ru')}
      >
        <span className="highlight link-hl">04.</span>
        {t(i18n.language === 'ru' ? 'EN' : 'RU')}
      </a>
    </li>
  );
};

export default LanguageSwitcher;
