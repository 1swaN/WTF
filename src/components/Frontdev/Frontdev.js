import React from "react";

const Frontdev = () => {
  return (
    <section className="page__section about-section">
      <div className="about-info">
        <h2 className="page__subtitle section-subtitle about-subtitle element-animation">
          <span className="highlight link-hl">01.</span>About Us
        </h2>
        <div className="page__text about-info__txt">
          <h3 className="about-heading__role element-animation">
            Frontend Developer - Dmitriy Kuznetsov
          </h3>
          <p className="element-animation">
            I specialize in frontend development. Working with layout, CSS and
            JavaScript is what I enjoy and allows me to move forward. I will be
            glad to help you realize your ideas.
          </p>
          <p className="element-animation">
            My education is an engineer, as well as I have completed frontend
            development courses at MSTU. While studying at the university I and
            a team of scientists patented a program to calculate the physical
            parameters of grinding complex surfaces.
          </p>
          <div className="element-animation">
            The list of technologies and languages I work with:
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
