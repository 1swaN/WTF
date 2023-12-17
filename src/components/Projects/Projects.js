import React from "react";
import WorkCard from "./WorkCard";

const Projects = () => {
  return (
    <div>
      <section className="page__section work-section work__subtitle">
        <h2 className="page__subtitle element-animation">
          <span className="highlight link-hl">02.</span>What have we done?
        </h2>
        <WorkCard />
      </section>
    </div>
  );
};

export default Projects;
