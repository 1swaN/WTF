import React from "react";

const Backdev = () => {
    return(
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
    )
}


export default Backdev