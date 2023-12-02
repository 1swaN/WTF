import React from "react";

const Contacts = () => {
  return (
    <div>
      <section className="page__section contact-section">
        <h2 className="page__subtitle section-subtitle contact-subtitle element-animation">
          <span className="highlight link-hl">03.</span>Do you wanna talk?
        </h2>
        <form className="contact__form">
          <input
            className="name__input input form__control element-animation"
            type="text"
            placeholder="Your name"
          />
          <input
            className="surname__input input form__control element-animation"
            type="text"
            placeholder="Your surname"
          />
          <input
            className="email__input input form__control element-animation"
            type="email"
            placeholder="Your e-mail"
          />
          <textarea
            className="form__textarea form__control element-animation"
            name="text"
            id="text"
            placeholder="Write your questions here"
          ></textarea>
          <button
            className="form__btn form__control element-animation"
            type="submit"
          >
            Say Hello!
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contacts;
