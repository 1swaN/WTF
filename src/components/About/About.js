import React from "react";

const About = () => {
  return (
    <div>
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
              JavaScript is what I enjoy and allows me to move forward. I will
              be glad to help you realize your ideas.
            </p>
            <p className="element-animation">
              My education is an engineer, as well as I have completed frontend
              development courses at MSTU. While studying at the university I
              and a team of scientists patented a program to calculate the
              physical parameters of grinding complex surfaces.
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
      <section className="page__section about-section second-about">
        <div className="about-info">
          <div className="page__text about-info__txt element-animation">
            <h3 className="about-heading__role element-animation">
              Backend Developer - Alexander Truntov
            </h3>
            <p className="element-animation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              exercitationem voluptatem maiores sit, reiciendis non sapiente in
              quas accusantium necessitatibus, ullam doloremque aliquam nemo et
              dignissimos. Vel quas quasi possimus.
            </p>
            <p className="element-animation">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              saepe quisquam quod libero, obcaecati quo soluta et odit esse sit
              tempore nostrum, eveniet, debitis animi. Qui quae corrupti nostrum
              dignissimos.
            </p>
            <div className="element-animation">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <ol className="about__techlist element-animation">
                <li className="about__tech">JavaScript</li>
                <li className="about__tech">PHP</li>
                <li className="about__tech">C#</li>
                <li className="about__tech">Python</li>
                <li className="about__tech">WPF</li>
                <li className="about__tech">SQL</li>
              </ol>
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
    </div>
  );
};

export default About;
