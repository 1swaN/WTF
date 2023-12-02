import React from 'react'; //подключение реакта
import ReactDOM from 'react-dom/client'; //подключение компонента DOM
import App from './App'; //подключение файла приложения
import './components/Fontlib'  
import reportWebVitals from './reportWebVitals'; //подключение доп библиотеки для повышения производительности приложения

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <script type="text/babel" src='./scripts/appereance.js'></script>
    <script type="text/babel" src='./scripts/header.js'></script>
    <script type="text/babel" src='./scripts/script.js'></script>
    <script type="text/babel" src='./scripts/simplebar.js'></script>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
