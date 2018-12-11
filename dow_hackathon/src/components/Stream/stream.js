import React from 'react';
import TextLoop from 'react-text-loop';

require('./style.css');

const Stream = (props) => {
  return (
    <TextLoop>
        <div className="stream stream__container">
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary"> tempor incididunt ut labore et</span>
            </div>
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary"> tempor incididunt ut labore et</span>
            </div>
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary"> tempor incididunt ut labore et</span>
            </div>
        </div>
        <div className="stream stream__container">
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary"> tempor incididunt ut labore et</span>
            </div>
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary"> tempor incididunt ut labore et</span>
            </div>
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary">tempor incididunt ut labore et</span>
            </div>
        </div>
        <div className="stream stream__container">
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary">tempor incididunt ut labore et</span>
            </div>
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary">tempor incididunt ut labore et</span>
            </div>
            <div className="stream--item">
                <span className="stream--image">
                    <img src="/public/camera.svg" alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                <span className="stream--summary">tempor incididunt ut labore et</span>
            </div>
        </div>
    </TextLoop>
  )
};

export default Stream;