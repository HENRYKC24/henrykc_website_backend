import React from 'react';
import styled from 'styled-components';

class IntroPics extends React.Component {
  render() {
    return (

      <CustomStyle className="container-fluid">
        <div className="row container-fluid">
          <div className="col-lg-6 col-md-6">
            <img className="col-lg-12 col-md-12" src="images/trimed_profile3.png" alt="profile" />
          </div>
          <DivStyle className="col-lg-6 col-md-6 white-background">
            <PStyle>
              Henry Kelechukwu (KC) is my name. <br /><br />I am a 
              passionate software developer. I build websites / blogs.
            </PStyle>
          </DivStyle>
        </div>
      </CustomStyle>
    )
  }
};

export default IntroPics;


const CustomStyle = styled.div`
  background: url(images/intro-background-pic-gray.jpg);
`;

const DivStyle = styled.div`
  line-height: 5rem;
  color: rgb(20, 20, 20);
  text-shadow: 3px 3px #f95757;
  font-size: 3rem;
`;

const PStyle = styled.p`
  padding: 100px 0;
`;