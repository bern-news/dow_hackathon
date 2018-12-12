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
                <h3>events</h3>
            </div>
        <div>
        <ul class="demo-list-two mdl-list">
            <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar">person</i>
                    <span>Machine Learning for dummies</span>
                    <span class="mdl-list__item-sub-title">Want to know what machine learning is? Sign up for a beginner masterclass...</span>
                </span>
                 <span class="mdl-list__item-secondary-content">
                    <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                </span>
            </li>
        <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>Christmas drinks</span>
        <span class="mdl-list__item-sub-title">London office festive get-together</span>
        </span>
        <span class="mdl-list__item-secondary-content">
        <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
        <span class="mdl-list__item-primary-content">
        <i class="material-icons mdl-list__item-avatar">person</i>
        <span>Times Wine Club</span>
        <span class="mdl-list__item-sub-title">Join us on 17 for a special Times wine club tasting event. This will include wines from 10 countires offered at a special discount</span>
        </span>
        <span class="mdl-list__item-secondary-content">
        <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
        </span>
        </li>
        <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar">person</i>
                    <span>Christmas day</span>
                    <span class="mdl-list__item-sub-title">UK / USA- Public holiday</span>
                </span>
                 <span class="mdl-list__item-secondary-content">
                    <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                </span>
            </li>
            <li class="mdl-list__item mdl-list__item--two-line">
                <span class="mdl-list__item-primary-content">
                    <i class="material-icons mdl-list__item-avatar">person</i>
                    <span>Boxing day</span>
                    <span class="mdl-list__item-sub-title">UK only - Public holiday</span>
                </span>
                 <span class="mdl-list__item-secondary-content">
                    <a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>
                </span>
            </li>
        </ul>
        </div>
        </section>
      );
  }
}

export default EventFeed;
