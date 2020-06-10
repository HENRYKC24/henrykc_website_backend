import React, { Component } from 'react';

class ProfilePic extends Component {
  render() {
    return (
      <div className="container">
        <div style={{margin: 'auto'}} className="row">
          <img 
            className="col-lg-4 profile-pic" 
            src="images/profilePic3.jpg" 
            alt="My profile picture"
          />
        </div>
      </div>
    )
  }
}

export default ProfilePic;