import React from 'react';
import './footer.css'
import Profile from "./Profile"

class Footer extends React.Component {

    render() {
        return (
            <div className="mdl-grid footer-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-tablet footer-grid-coloumn"> 
            
            
            <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet footer-grid-profile-column "> 
            
            <Profile  name='Clancy' imageSrc='http://localhost:3000/images/clancy_bw.png'/>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet footer-grid-profile-column"> 
            <Profile name='Paul' imageSrc='http://localhost:3000/images/paul_bw.png'/>
            </div>

            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-cell--4-col-tablet footer-grid-profile-column"> 
            <Profile name='Phillipa' imageSrc='http://localhost:3000/images/phillipa_bw.png'/>
            </div>

            </div>



            </div>
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-tablet"> </div>
           
            </div>
        );
    }
}

export default Footer;
