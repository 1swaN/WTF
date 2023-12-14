import React, { useEffect } from 'react';
import Header from './components/header/Header'
import Page from './components/page/Page'


import './styles/appereance.css'
import './components/About/about-style.css'
import './components/Contacts/contacts-style.css'
import './styles/media.css'
import './components/header/header-style.css'
import './styles/settings.css'
import './styles/simplebar.css'
import './styles/style.css'
import './components/Projects/projects.css'


function App() {
  return (
    <div className="wrapper data-simplebar">
        <Header/>
        <Page/>
    </div>
  );
}


export default App;
