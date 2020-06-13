import React from 'react';
import ProfilePic from '../pages/home/ProfilePic';
import WithPoorChildren from '../pages/home/WithPoorChildren';
import Section1 from './Section1';
import IntroPics from './IntroPics';
import UdemyCert from '../pages/home/UdemyCert';

class Body extends React.Component {
  componentDidMount() {
    document.title = 'Home'
  }
  render() {
    return (
      <>
        <IntroPics />
        <ProfilePic />
        <WithPoorChildren />
        <UdemyCert />
        <Section1 />

      </>
    )
  }
}

export default Body;