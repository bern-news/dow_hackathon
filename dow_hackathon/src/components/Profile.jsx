

import React from 'react';
import './profile.css'

class Profile extends React.Component {

    constructor(props) {
        super(props);
      }
    
  render() {
    return (
<div className="w3-bar">
 
<i class="material-icons mdl-list__item-icon w3-bar-item w3-circle w3-hide-small w3-bar-item w3-circle">person</i>
  {/* <img src="img_avatar2.png" className="" /> */}
  <div className="w3-bar-item">
    <span className="w3-large">{this.props.name}</span><br/>
    <span>Web Designer</span>
  </div>
</div>
    );
  }
}

export default Profile;