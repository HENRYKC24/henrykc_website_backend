import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
      <>
      <HeaderBackground className='container-fluid'>
        <div className="row .header-text">
            <RoundImage src="images/preWed.png" alt="rounded profile"/>
          
            <SpanStyle 
              className="my-auto col-lg-4 col-md-4 col-sm-3 col-xs-2">
              Henry KCbf
            </SpanStyle>

            <SpanStyle2 
              className="my-auto col-lg-6 col-md-6 col-sm-6 d-flex flex-row-reverse">
              For the love of computer programming...
            </SpanStyle2>
        </div>
      </HeaderBackground>

      <div className="sticky">
        
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
              <li className="nav-item">
                <NavLink activeStyle={{borderBottom: '2px solid'}} exact className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
              </li>
            </ul>
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink activeStyle={{borderBottom: '2px solid'}} exact className="nav-link" to='/blog'>BLOG <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{borderBottom: '2px solid'}} exact className="nav-link" to='/contact'>CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{borderBottom: '2px solid'}} exact className="nav-link"to='/about' aria-disabled="true">ABOUT</NavLink>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
      </>
  )
}

export default Header;

const RoundImage = styled.img`
  width: 80px;
  height: 80px;
  border: 5px solid white;
  border-radius: 100%;
  margin: 5px;
`;

const HeaderBackground = styled.div`
  background-color: #333;
  ;
  background-repeat: no-repeat;
  color: #ccc;
`;

const SpanStyle = styled.span`
  display: block;
  width: auto;
  font-size: larger;
`;

const SpanStyle2 = styled.span`
  margin-left: auto;
  font-style: italic;
`;
