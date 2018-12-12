import React from 'react';
import './footer.css'
import Profile from "./Profile"

class Footer extends React.Component {

    render() {
        return (
            <div className="mdl-grid footer-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet  footer-grid-coloumn"> 
            <Profile  name='Clancy' imageSrc='http://localhost:3000/images/clancy_bw.png'/>
           </div>
           <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet  footer-grid-coloumn"> 
           <Profile name='Paul' imageSrc='http://localhost:3000/images/paul_bw.png'/>
           </div>
           <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet  footer-grid-coloumn"> 
           <Profile name='Phillipa' imageSrc='http://localhost:3000/images/phillipa_bw.png'/>
           </div>
           </div>
        );
    }
}

export default Footer;
