// src/components/Navbar.js
import React from 'react';
import { BsFillSunFill, BsFillMoonStarsFill, BsThreeDots  } from 'react-icons/bs';

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="/">
          CountNumber
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <BsThreeDots />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={toggleTheme}>
                {isDarkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />} 
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
