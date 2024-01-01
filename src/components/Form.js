import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import axios from "axios";

function Form(){

    // form validation
    const {t, i18n} = useTranslation()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [textDirty, setTextDirty] = useState(false)

    const [nameError, setNameError] = useState('This field cannot be empty')
    const [surnameError, setSurnameError] = useState('This field cannot be empty')
    const [emailError, setEmailError] = useState('This field cannot be empty')
    const [textError, setTextError] = useState('This field cannot be empty')

    const [formValid, setFormValid] = useState(false)


    useEffect(() =>{
        if(nameError || surnameError || emailError || textError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
    }, [nameError, surnameError, emailError, textError])


    const nameHandler = (e) =>{
        setName(e.target.value)
        if(e.target.value.length < 2){
            setNameError('The length of the name should be more than 2 symbols')
            if(!e.target.value){
                setNameError('This field cannot be empty')
            }
        }else{
            setNameError('')
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const surnameHandler = (e) =>{
        setSurname(e.target.value)
        if(e.target.value.length < 2){
            setSurnameError('The length of the surname should be more than 2 symbols')
            if(!e.target.value){
                setSurnameError('This field cannot be empty')
            }
        }else{
            setSurnameError('')
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Invalid e-mail. Try again')
        }else{
            setEmailError('')
            setData({ ...data, [e.target.name]: e.target.value });
        }
    }

    const textHandler = (e) =>{
        setText(e.target.value)
        if(e.target.value.length < 2){
            setTextError('The length of your text wishes should be longer')
            if(!e.target.value){
                setTextError('This field cannot be empty')
            }
        }else{
            setTextError('')
            setData({ ...data, [e.target.name]: e.target.value });
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
    // end of validation


    // data POST
    const [data, setData] = useState({ name: "", email: "" });
    const [response, setResponse] = useState("");
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post("https://jsonplaceholder.typicode.com/users", data)
        .then((response) => {
          setResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return(
        <form className="contact__form" onSubmit={handleSubmit} action="../database/send.php" method="post">
            {(nameDirty && nameError) && <div>{nameError}</div>}
          <input
            onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className="name__input input form__control element-animation"
            type="text"
            placeholder={t('contact.name')} name="name" required
          />
          {(surnameDirty && surnameError) && <div>{surnameError}</div>}
          <input
            onChange={e => surnameHandler(e)} value={surname} onBlur={e => blurHandler(e)} className="surname__input input form__control element-animation"
            type="text"
            placeholder={t('contact.surname')} name="surname" required
          />
          {(emailDirty && emailError) && <div>{emailError}</div>}
          <input
            onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="email__input input form__control element-animation"
            type="email"
            placeholder={t('contact.email')} name="email" required
          />
          {(textDirty && textError) && <div>{textError}</div>}
          <textarea
            onChange={e => textHandler(e)} value={text} onBlur={e => blurHandler(e)} className="form__textarea form__control element-animation"
            name="text"
            id="text"
            placeholder={t('contact.text')}></textarea>
          <button
            disabled={!formValid} className="form__btn form__control element-animation"
            type="submit" name="submit"
          >
            {t('contact.button')}
          </button>
        </form>
    )
}

export default Form