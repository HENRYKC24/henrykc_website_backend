import React from 'react';

class AboutMe extends React.Component {
  componentDidMount() {
    document.title = 'About-Henry KC';
  }
  render() {
    return (
      <div className="container">
        <h1>Full Name: Eze Henry Kelechukwu</h1>
        <p>I am a passionate computer software developer. I am a Nigerian and i currently live in Enugu state. 
          I started my coding journey few years ago and ever since i have been obssesed about computer programming. I 
          have been an instructor for application software for many years before discovering my calling in software 
          development.
        </p>
        <p>I opened a computer training centre in my home town, Orba Nsukka, in the year 2010. I operated for two years
           where i trained so many student in basic computer applications before proceeding for my one year National Youth Service Corps (NYSC).
        </p>
        <p>I am presently working with Federal Information Centre (FIC) Jos as the ICT Manager. The most loved aspect of my work is 
          training computer science students from University of Jos and other youths of Plateau State on Website Design and Development.
        </p>
        
      </div>
    )
  }
};

export default AboutMe;