import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="container-fluid sticky">
      
      <nav style={{backgroundColor: '#eee'}} 
        className="navbar navbar-expand-sm navbar-light text-white"
      >
  
        <button className="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarTogglerDemo02" 
          aria-controls="navbarTogglerDemo02" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
          
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">BLOG <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" aria-disabled="true">ABOUT</a>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  )
}

export default Header;

