<?php
    //получение данных с формы 
    $name = $_POST['name']
    $surname = $_POST['surname']
    $email = $_POST['email']
    $text = $_POST['text']
    
    // обработка получаемых данных

    $name = htmlspecialchars($name)
    $surname = htmlspecialchars($surname)
    $email = htmlspecialchars($email)
    $text = htmlspecialchars($text)

    $name = urldecode($name)
    $surname = urldecode($surname)
    $email = urldecode($email)
    $text = urldecode($text)

    $name = trim($name)
    $surname = trim($surname)
    $email = trim($email)
    $text = trim($text)

    // отправка данных на почту

    if(mail("dmitriy31.kuznetsov@gmail.com",
        "Новое письмо с сайта-портфолио",
        "Имя заказчика:".$name."\n".
        "Фамилия заказчика:".$surname."\n".
        "Почта заказчика:".$email."\n".
        "Комментарий заказчика:".$text."\n".)
    ){
        print('your letter has been successfully sended')
    }
    else{
        print('ERROR! Check your data!')
    }

?>