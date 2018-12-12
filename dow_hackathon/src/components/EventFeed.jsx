import React from 'react';
import './eventfeed.css'

class EventFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="event-feed">
                <div className="headingTable">
                    <h3>Upcoming events</h3>
                </div>
                <div>
                    <ul class="demo-list-two mdl-list">
                        <li class="mdl-list__item mdl-list__item--two-line">
                            <span class="mdl-list__item-primary-content">
                                
                            <img src="images/course.svg" type="image/svg+xml"/>
                                <span>Machine Learning for dummies</span>
                                <span class="mdl-list__item-sub-title">Want to know what machine learning is? Sign up for a beginner masterclass...</span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                                    <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input"  />
                                </label>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--two-line">
                            <span class="mdl-list__item-primary-content">
                            <img src="images/drink.svg" type="image/svg+xml"/>
                                <span>Christmas drinks</span>
                                <span class="mdl-list__item-sub-title">London office festive get-together</span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-2">
                                    <input type="checkbox" id="list-checkbox-2" class="mdl-checkbox__input"  />
                                </label>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--two-line">
                            <span class="mdl-list__item-primary-content">
                            <img src="images/drink.svg" type="image/svg+xml"/>
                                <span>Times Wine Club</span>
                                <span class="mdl-list__item-sub-title">Join us on 17 for a special Times wine club tasting event. This will include wines from 10 countires offered at a special discount</span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-3">
                                    <input type="checkbox" id="list-checkbox-3" class="mdl-checkbox__input"  />
                                </label>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--two-line">
                        <span class="mdl-list__item-primary-content">
                        <img src="images/christmas.svg" type="image/svg+xml"/>
                            <span>Christmas day</span>
                            <span class="mdl-list__item-sub-title">UK / USA- Public holiday</span>
                        </span>
                         <span class="mdl-list__item-secondary-content">
                         <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-3">
                                    <input type="checkbox" id="list-checkbox-3" class="mdl-checkbox__input"  />
                                </label>
                        </span>
                    </li>
                    <li class="mdl-list__item mdl-list__item--two-line">
                        <span class="mdl-list__item-primary-content">
                        <img src="images/christmas.svg" type="image/svg+xml"/>
                           <span>Boxing day</span>
                           <span class="mdl-list__item-sub-title">UK only - Public holiday</span>
                       </span>
                        <span class="mdl-list__item-secondary-content">
                        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-3">
                                    <input type="checkbox" id="list-checkbox-3" class="mdl-checkbox__input"  />
                                </label>
                       </span>
                   </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default EventFeed;
