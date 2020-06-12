import React, {Component} from 'react';
import Styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <SocialsStyle className="socials">
          <span><a href="https://web.facebook.com/ezehenryk"><i className="fab fa-facebook-square"></i></a></span>
          <span><a href="https://www.instagram.com/ezehenrykc/"><i className="fab fa-instagram"></i></a></span>
          <span><a href="https://www.linkedin.com/in/henry-kc-53207969/"><i className="fab fa-linkedin"></i></a></span>
          <span><a href="https://twitter.com/henrykc24"><i className="fab fa-twitter-square"></i></a></span>
        </SocialsStyle>
        <div className="copyright">Copyright &copy;2020 Henry KC. All rights reserved.</div>
      </FooterStyle>
    )
  } 
 
}

export default Footer;

const FooterStyle = Styled.footer`
  padding: 2%;
  background-color: #333;
  color: white;
  text-align: center;
`;

const SocialsStyle = Styled.div`
  margin: 2%;
`;