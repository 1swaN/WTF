import React from "react";

import { useTranslation } from 'react-i18next';



const Frontdev = () => {
  const {t, i18n} = useTranslation()

  return (
    <section className="page__section about-section">
      <div className="about-info">
        <h2 className="page__subtitle section-subtitle about-subtitle element-animation">
          <span className="highlight link-hl">01.</span>{t('about.title')}
        </h2>
        <div className="page__text about-info__txt">
          <h3 className="about-heading__role element-animation">
            {t('about.role')}
          </h3>
          <p className="element-animation">
            {t('about.specialisation')}
          </p>
          <p className="element-animation">
            {t('about.education')}
          </p>
          <div className="element-animation">
            {t('about.list')}
            <ul className="about__techlist element-animation">
              <li className="about__tech">JavaScript</li>
              <li className="about__tech">React</li>
              <li className="about__tech">C#</li>
              <li className="about__tech">Gulp</li>
              <li className="about__tech">Webpack</li>
              <li className="about__tech">BEM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page__img">
        <img
          className="about__img element-animation"
          src="https://placehold.co/300x300"
          alt="Dmitriy"
        />
      </div>
    </section>
  );
};

export default Frontdev;
