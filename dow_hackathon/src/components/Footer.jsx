import React from 'react';
import './footer.css'
import Profile from "./Profile"

class Footer extends React.Component {

    render() {
        return (
            <section className="footer-grid-container">
            <h4 className="footer-grid-container-h1"> New Starters</h4>
            <div className="mdl-grid footer-grid">
            <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet  footer-grid-coloumn"> 
            <Profile  name='Clancy' imageSrc='http://localhost:3000/images/doug.png' title="VP, Consumer Engineering"/>
           </div>
           <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet  footer-grid-coloumn"> 
           <Profile name='Paul' imageSrc='http://localhost:3000/images/paul.png'  title="SVP, Engineering"/>
           </div>
           <div className="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet  footer-grid-coloumn"> 
           <Profile name='Phillipa' imageSrc='http://localhost:3000/images/phillipa.png' title="Sr Editorial Director"/>
           </div>
           </div>
            </section>
           
        );
    }
}

export default Footer;
