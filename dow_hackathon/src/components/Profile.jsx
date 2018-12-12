

import React from 'react';
import './profile.css'

class Profile extends React.Component {

    constructor(props) {
        super(props);
      }
    
  render() {
    return (
<div className="w3-bar footer-grid-profile-column-profile">
{/*  
<i class="material-icons mdl-list__item-icon w3-bar-item w3-circle w3-hide-small w3-bar-item w3-circle">person</i> */}
  <img src={this.props.imageSrc} className="profilePic w3-bar-item w3-circle" />
  <div className="w3-bar-item footer-grid-profile-column-profile-div">
    <span className="w3-large profilePic-span1 ">{this.props.name}</span><br/>
    <span className="profilePic-span2">{this.props.title}</span>
  </div>
</div>
    );
  }
}

export default Profile;