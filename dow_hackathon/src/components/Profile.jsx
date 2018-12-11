

import React from 'react';
import './profile.css'

class Profile extends React.Component {

    constructor(props) {
        super(props);
      }
    
  render() {
    return (
<div class="card">
<i class="material-icons mdl-list__item-icon">person</i>
  <h5>{this.props.name}</h5>
  <p class="title">CEO & Founder, Example</p>
  <p>Harvard University</p>
  <div class="card-div">
    <a href="#"><i class="fa fa-dribbble"></i></a> 
    <a href="#"><i class="fa fa-twitter"></i></a>  
    <a href="#"><i class="fa fa-linkedin"></i></a>  
    <a href="#"><i class="fa fa-facebook"></i></a> 
  </div>
  <p><button>Contact</button></p>
</div>
    );
  }
}

export default Profile;