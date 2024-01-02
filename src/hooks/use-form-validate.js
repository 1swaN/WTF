import React from "react";
import { useEffect, useState } from "react";

export const useValidation = (value, validators) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validators) {
            switch(validation){
                case 'minLength':
                    value.length < validators[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if(isEmpty || emailError || minLengthError){
            setInputValid(false)
        }else{
            setInputValid(true)
        }
    }, [isEmpty, emailError, minLengthError])

    return{
        isEmpty,
        minLengthError,
        emailError,
        inputValid,
    }
}
export const useInput = (initialValue, validators) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false) //состояние показывает то, был ли выход из инпута или нет
    const valid = useValidation(value, validators)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () =>{
        setDirty(true)
    }

    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid,
    }
}
