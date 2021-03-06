import React, {Fragment} from 'react';
import TextLoop from 'react-text-loop';

require('./style.css');

const Stream = (props) => {
    return (
        <section className="streamer">
            <h3> Dj academy </h3>
            <TextLoop speed={5000}>
                <div className="stream stream__container">
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                        <div className="stream--item">
                            <span className="stream--image">
                                <img src="/camera.svg" alt="" width="15" height="15"/>
                            </span>
                            <span className="stream--title">DJ Springboard Presentation</span>
                            <span className="stream--summary"> Ended Nov 20th at 6.00PM GMT</span>
                        </div>
                    </a>
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                        <div className="stream--item">
                            <span className="stream--image">
                                <img src="/camera.svg" alt="" width="15" height="15"/>
                            </span>
                            <span className="stream--title">IGNITE Innovation & Insights</span>
                            <span className="stream--summary"> Starting Dec 23rd at 7.00PM GMT</span>
                        </div>
                        </a>
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                    <div className="stream--item">
                        <span className="stream--image">
                            <img src="/camera.svg" alt="" width="15" height="15"/>
                        </span>
                        <span className="stream--title">Wellness 360: Presents Patricia Walsh</span>
                        <span className="stream--summary"> Starting Dec 24th at 5.00PM GMT</span>
                    </div>
                    </a>
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                    <div className="stream--item">
                        <span className="stream--image">
                            <img src="/camera.svg" alt="" width="15" height="15"/>
                        </span>
                        <span className="stream--title">DJ Spotlight: First 100 Days with Josh Stinchcomb</span>
                        <span className="stream--summary"> Starting Dec 15th at 5.00PM GMT</span>
                    </div>
                    </a>
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                    <div className="stream--item">
                        <span className="stream--image">
                            <img src="/camera.svg" alt="" width="15" height="15"/>
                        </span>
                        <span className="stream--title">Design Sprint Book Talk</span>
                        <span className="stream--summary"> Starting Dec 15th at 5.00PM GMT</span>
                    </div>
                    </a>
                </div>
                <div className="stream stream__container">
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                    <div className="stream--item">
                    <span className="stream--image">
                        <img src="/camera.svg" alt="" width="15" height="15"/>
                    </span>
                        <span className="stream--title">DJ Spotlight: The Future Of... Series</span>
                        <span className="stream--summary"> Starting Dec 23rd at 7.00PM GMT</span>
                    </div>
                    </a>
                    <a href="https://newscorp.csod.com/catalog/CustomPage.aspx?id=20000624">
                    <div className="stream--item">
                    <span className="stream--image">
                        <img src="/camera.svg" alt="" width="15" height="15"/>
                    </span>
                        <span className="stream--title">Global Wellness Day: Senior Leader Panel Discussion</span>
                        <span className="stream--summary"> Starting Dec 24th at 5.00PM GMT</span>
                    </div>
                    </a>
                </div>
            </TextLoop>
        </section>
    )
};

export default Stream;