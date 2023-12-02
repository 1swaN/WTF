import Header from './components/header/Header'
import Page from './components/page/Page'
import Menu from './scripts/script'


import './styles/appereance.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/media.css'
import './styles/nav.css'
import './styles/settings.css'
import './styles/simplebar.css'
import './styles/style.css'

function App() {
  return (
    <div className="wrapper data-simplebar">
        <Header/>
        <Page/>
    </div>
  );
}

export default App;
