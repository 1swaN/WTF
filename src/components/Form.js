import React, { useState } from "react";

import { useTranslation } from 'react-i18next';




function Form(){
    const {t, i18n} = useTranslation()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [textDirty, setTextDirty] = useState(false)

    const [nameError, setNameError] = useState('The name field cannot be empty')
    const [surnameError, setSurnameError] = useState('The surname field cannot be empty')
    const [emailError, setEmailError] = useState('The e-mail field cannot be empty')
    const [textError, setTextError] = useState('The text field cannot be empty')


    const nameHandler = (e) =>{
        setName(e.target.value)
    }

    const emailHandler = (e) =>{
        setName(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Invalid e-mail. Try again')
        }else{
            setEmailError('')
        }
    }


    const blurHandler = (e) =>{
        switch(e.target.name){
            case 'name':
                setNameDirty(true)
                break
            case 'surname':
                setSurnameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'text':
                setTextDirty(true)
                break
        }
    }


    return(
        <form className="contact__form">
            {(nameDirty && nameError) && <div>{nameError}</div>}
          <input
            value={name} onBlur={e => blurHandler(e)} className="name__input input form__control element-animation"
            type="text"
            placeholder={t('contact.name')} name="name"
          />
          {(surnameDirty && surnameError) && <div>{surnameError}</div>}
          <input
            value={surname} onBlur={e => blurHandler(e)} className="surname__input input form__control element-animation"
            type="text"
            placeholder={t('contact.surname')} name="surname"
          />
          {(emailDirty && emailError) && <div>{emailError}</div>}
          <input
            onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="email__input input form__control element-animation"
            type="email"
            placeholder={t('contact.email')} name="email"
          />
          {(textDirty && textError) && <div>{textError}</div>}
          <textarea
            value={text} onBlur={e => blurHandler(e)} className="form__textarea form__control element-animation"
            name="text"
            id="text"
            placeholder={t('contact.text')}></textarea>
          <button
            className="form__btn form__control element-animation"
            type="submit" name="submit"
          >
            {t('contact.button')}
          </button>
        </form>
    )
}

export default Form