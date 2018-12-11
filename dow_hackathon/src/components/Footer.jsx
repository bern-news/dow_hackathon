import React from 'react';
import './footer.css'
import Profile from "./Profile"

class Footer extends React.Component {

    render() {
        return (
            <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-tablet"> 
            <section class="row">
                <div class="column">
                    <Profile name='John Doe' />
                </div>
                <div class="column">
                    <Profile name='Jane Doe'  />
                </div>
                <div class="column">
                    <Profile name='James Doe'  />
                </div>
                </section>
            
            </div>
            <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-tablet"> </div>
           
            </div>
        );
    }
}

export default Footer;
