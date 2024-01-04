import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "./Modal/Modal";
import { useValidation, useInput } from "../hooks/use-form-validate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleCheck } from "@fortawesome/free-solid-svg-icons";

const sign = <FontAwesomeIcon icon={faPersonCircleCheck} size="2x" marginRight="10px"/>

function Form() {
  const [modalActive, setModalActive] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузка страницы)

    // Ваши данные для отправки на сервер
    const formData = {
      name: name.value,
      surname: surname.value,
      email: email.value,
      text: text.value,
    };

    try {
      const response = await fetch("path/to/your/server-script.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Server response:", data);
        // Здесь вы можете обработать успешный ответ от сервера, если нужно
        setModalActive(true);
      } else {
        console.error("Server response error:", response.status, response.statusText);
        // Здесь вы можете обработать ошибку от сервера, если нужно
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // Здесь вы можете обработать ошибку fetch, если нужно
    }
  };

  // form validation
  const { t, i18n } = useTranslation();
  const email = useInput("", { isEmpty: true, minLength: 5, isEmail: true });
  const name = useInput("", { isEmpty: true, minLength: 2 });
  const surname = useInput("", { isEmpty: true, minLength: 2 });
  const text = useInput("", { isEmpty: true, minLength: 2 });

 

  return (
    <form className="contact__form" action="../database/send.php" method="post">
      {name.isDirty && name.isEmpty && (
        <div className="form__error">The input can't be empty</div>
      )}
      {name.isDirty && name.minLengthError && (
        <div className="form__error">Incorrect length</div>
      )}
      <input
        onBlur={(e) => name.onBlur(e)}
        value={name.value}
        onChange={(e) => name.onChange(e)}
        className="name__input input form__control element-animation"
        type="text"
        placeholder={t("contact.name")}
        name="name"
        required
      />

      {surname.isDirty && surname.isEmpty && (
        <div className="form__error">The input can't be empty</div>
      )}
      {surname.isDirty && surname.minLengthError && (
        <div className="form__error">Incorrect length</div>
      )}
      <input
        onBlur={(e) => surname.onBlur(e)}
        value={surname.value}
        onChange={(e) => surname.onChange(e)}
        className="surname__input input form__control element-animation"
        type="text"
        placeholder={t("contact.surname")}
        name="surname"
        required
      />

      {email.isDirty && email.emailError && (
        <div className="form__error">Incorrect e-mail format</div>
      )}
      {email.isDirty && email.isEmpty && (
        <div className="form__error">The input can't be empty</div>
      )}
      {email.isDirty && email.minLengthError && (
        <div className="form__error">Incorrect length</div>
      )}
      <input
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
        onChange={(e) => email.onChange(e)}
        className="email__input input form__control element-animation"
        type="email"
        placeholder={t("contact.email")}
        name="email"
        required
      />

      {text.isDirty && text.isEmpty && (
        <div className="form__error">The input can't be empty</div>
      )}
      {text.isDirty && text.minLengthError && (
        <div className="form__error">Incorrect length</div>
      )}
      <textarea
        onBlur={(e) => text.onBlur(e)}
        value={text.value}
        onChange={(e) => text.onChange(e)}
        className="form__textarea form__control element-animation"
        name="text"
        id="text"
        placeholder={t("contact.text")}
      ></textarea>
      <button onSubmit={handleSubmit}
        disabled={
          !name.inputValid ||
          !surname.inputValid ||
          !email.inputValid ||
          !text.inputValid
        }
        onClick={() => setModalActive(true)}
        className="form__btn form__control element-animation"
        type="submit"
        name="submit"
      >
        {t("contact.button")}
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        {sign}
        <p>
          Thank you!<br></br>Your request is successfully sended!
        </p>
      </Modal>
    </form>
  );
}

export default Form;
