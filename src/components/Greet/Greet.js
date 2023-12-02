import React from "react";

const Greet = () => {
  return (
    <div>
      <section className="page__section greet-section">
        <div className="greet-container">
          <p className="highlight heading-hl element-animation">
            Hello, world!
          </p>
          <h1 className="page__title element-animation">We are WTF!</h1>
          <h2 className="page__subtitle element-animation">
            Wow That's Fantastic!
          </h2>
          <div className="page__text element-animation">
            <p>
              We're a group of two young web-developers, who looks for new
              experience, projects and feelings. Glad to see your questions and
              wishes. Feedback is really important for us! See ya!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greet;
