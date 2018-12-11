import React, {Fragment} from 'react';
import TextLoop from 'react-text-loop';

require('./style.css');

const Stream = (props) => {
    return (
        <section className="streamer">
            <h3> DJ Academy </h3>
            <TextLoop>
                <div className="stream stream__container">
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        DJ Springboard Presentation
                        <span className="stream--summary"> Ended Nov 20th at 6.00PM GMT</span>
                    </div>
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        IGNITE Innovation & Insights
                        <span className="stream--summary"> Starting Dec 23rd at 7.00PM GMT</span>
                    </div>
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        Wellness 360: Presents Patricia Walsh
                        <span className="stream--summary"> Starting Dec 24th at 5.00PM GMT</span>
                    </div>
                </div>
                <div className="stream stream__container">
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        DJ Spotlight: First 100 Days with Josh Stinchcomb
                        <span className="stream--summary"> Starting Dec 15th at 5.00PM GMT</span>
                    </div>
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        Design Sprint Book Talk
                        <span className="stream--summary"> Starting Dec 15th at 5.00PM GMT</span>
                    </div>
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        DJ Spotlight: The Future Of... Series
                        <span className="stream--summary"> Starting Dec 23rd at 7.00PM GMT</span>
                    </div>
                </div>
                <div className="stream stream__container">
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        Global Wellness Day: Senior Leader Panel Discussion
                        <span className="stream--summary"> Starting Dec 24th at 5.00PM GMT</span>
                    </div>
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        Blockchain 101 PT1
                        <span className="stream--summary"> Starting Dec 24th at 5.00PM GMT</span>
                    </div>
                    <div className="stream--item">
                <span className="stream--image">
                    <img src="/camera.svg" alt="" width="15" height="15"/>
                </span>
                        Blockchain 101 PT2
                        <span className="stream--summary"> Starting Dec 25th at 5.00PM GMT</span>
                    </div>
                </div>
            </TextLoop>
        </section>
    )
};

export default Stream;