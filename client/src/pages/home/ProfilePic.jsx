import React, { Component } from 'react';

class ProfilePic extends Component {
  render() {
    return (
      <div className="container">
        <div style={{margin: 'auto'}} className="row">
          <img 
            className="col-lg-6 col-md-6 profile-pic" 
            src="images/devC.jpg" 
            alt="My profile pic"
          />
          <div className="col-lg-6 col-md-6">
           <p> Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Deleniti asperiores repellendus rem facilis 
            quos tempore, modi eius impedit eligendi ducimus, cum
             voluptatum itaque delectus fugit maiores, totam 
             quia recusandae alias.
             Lorem, ipsum dolor sit amet consectetur adipisicing 
            elit. Deleniti asperiores repellendus rem facilis 
            quos tempore, modi eius impedit eligendi ducimus, cum
             voluptatum itaque delectus fugit maiores, totam 
             quia recusandae alias.</p>
          
          </div>
        </div>
      </div>
    )
  }
}

export default ProfilePic;