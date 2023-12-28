import React from "react";
import { useTranslation } from 'react-i18next';
import Form from "../Form";

const Contacts = () => {
  const {t, i18n} = useTranslation()
  return (
    <div>
      <section className="page__section contact-section">
        <h2 className="page__subtitle section-subtitle contact-subtitle element-animation">
          <span className="highlight link-hl">03.</span>{t('contact.title')}
        </h2>
        <Form />
      </section>
    </div>
  );
};

export default Contacts;
