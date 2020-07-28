import React from 'react';
import styled from 'styled-components';

class IntroPics extends React.Component {
  render() {
    return (
      <ParentDiv className='container-fluid'>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <img className="col-lg-8 col-md-12 col-sm-8" src="images/trimed_profile3.png" alt="my profile avatar" />
          </div>
          <TextContainer  className="col-lg-6 col-md-6 my-auto">
            <PStyle>
              I am a passionate software developer. I build websites / blogs. I also teach computer programming.
            </PStyle>
          </TextContainer>

        </div>
      </ParentDiv>
    )
  }
}

export default IntroPics;

const ParentDiv = styled.div`
  background-image: url(images/intro-background-pic-gray.jpg);
`;

const PStyle = styled.p`
  color: #fff;
  text-shadow: 2px 2px #a00;
  font-size: 3rem;
`;

const TextContainer = styled.div`
  line-heigt: 100%;
`;
