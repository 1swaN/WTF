import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/Menu.js';

const logo = <FontAwesomeIcon icon={faCode} color='#64ffda' size='2x' />;

const Header = () => {
  useEffect(() => {
    function myHeader() {
      var prevScrollPos = window.scrollY;
      window.onscroll = function () {
        let header = document.querySelector(".header");

        var currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
          header.style.top = "0";

          header.style.transition = "all .7s ease-out";
        } else {
          document.querySelector(".header").style.top = "-100px";
        }
        prevScrollPos = currentScrollPos;
      };
    }

    myHeader();

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header__container">
          <a href="#" className="header__logo">{logo}</a>
          <Menu />
        </div>
      </header>
    </div>
  );
};

export default Header;





// import React from 'react';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCode } from '@fortawesome/free-solid-svg-icons'
// import { useEffect } from 'react';
// const logo = <FontAwesomeIcon icon={faCode} color='#64ffda' size='2x'/>
// import Menu from '../Menu/Menu.js';


// const Header = () => {
//     useEffect(() => {
//       function myHeader() {
//         var prevScrollPos = window.scrollY;
//         window.onscroll = function () {
//           let header = document.querySelector(".header");
  
//           var currentScrollPos = window.scrollY;
//           if (prevScrollPos > currentScrollPos) {
//             header.style.top = "0";
            
//             header.style.transition = "all .7s ease-out";
//           } else {
//             document.querySelector(".header").style.top = "-100px";
//           }
//           prevScrollPos = currentScrollPos;
//         };
//       }
  
//       myHeader();
  
      
//       return () => {
//         window.onscroll = null;
//       };
//     }, []); 

//     return (
//         <div>
//             <header className="header">
//                 <div className="header__container">
//                     <a href="#" className="header__logo">{logo}</a>


                    {/* <div className="header__menu menu">
                        <div className="menu__icon">
                            <span></span>
                        </div>
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li><a data-goto=".about-section" href="#" className="menu__link"><span className="highlight link-hl">01.</span>About</a></li>
                                <li><a data-goto=".work-section" href="#" className="menu__link"><span className="highlight link-hl">02.</span>Work</a></li>
                                <li><a data-goto=".contact-section" href="#" className="menu__link"><span className="highlight link-hl">03.</span>Contact</a></li>
                            </ul>
                        </nav>
                    </div> */}
                  {/* <Menu />


                </div>
             </header>
        </div>
    );
};

export default Header; */}