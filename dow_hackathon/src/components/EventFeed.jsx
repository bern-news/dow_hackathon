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
                                <i class="material-icons mdl-list__item-avatar">person</i>
                                <span>Bryan Cranston</span>
                                <span class="mdl-list__item-sub-title">62 Episodes</span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                                <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                                    <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input"  />
                                </label>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--two-line">
                            <span class="mdl-list__item-primary-content">
                                <i class="material-icons mdl-list__item-avatar">person</i>
                                <span>Aaron Paul</span>
                                <span class="mdl-list__item-sub-title">62 Episodes</span>
                            </span>
                            <span class="mdl-list__item-secondary-content">
                            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-2">
                                    <input type="checkbox" id="list-checkbox-2" class="mdl-checkbox__input"  />
                                </label>
                            </span>
                        </li>
                        <li class="mdl-list__item mdl-list__item--two-line">
                            <span class="mdl-list__item-primary-content">
                                <i class="material-icons mdl-list__item-avatar">person</i>
                                <span>Bob Odenkirk</span>
                                <span class="mdl-list__item-sub-title">62 Episodes</span>
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
