import React from "react";

import { useTranslation } from 'react-i18next';

const Greet = () => {

  const {t, i18n} = useTranslation()

  return (
    <div>
      <section className="page__section greet-section">
        <div className="greet-container">
          <p className="highlight heading-hl element-animation">
            {t('greet.hello')}
          </p>
          <h1 className="page__title element-animation"></h1>
          <h2 className="page__subtitle element-animation">
            {t('greet.slogan')}
          </h2>
          <div className="page__text element-animation">
            <p>
             {t('greet.description')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greet;
