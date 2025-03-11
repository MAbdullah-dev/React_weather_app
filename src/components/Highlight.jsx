import React from 'react';
import graphgif from '../assets/images/graphgif.gif';
import uvindex from "../assets/images/uvindex.gif";
import windstatus from "../assets/images/windstatus.gif";
import humidity from "../assets/images/humidity.gif";

const Highlight = ({ highlights }) => {
    return (
        <div className="highlight rounded-4">
            <h5 className="title mt-2 mb-3">Today Highlight</h5>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="highlight-card rounded-3">
                        <h6>Chance of Rain</h6>
                        <img src={graphgif} alt="Chance of Rain" className="icon" />
                        <p>{highlights.chanceOfRain}%</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="highlight-card rounded-3">
                        <h6>UV Index</h6>
                        <img src={uvindex} alt="UV Index" className="icon" />
                        <p>{highlights.uvIndex}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="highlight-card rounded-3">
                        <h6>Wind Status</h6>
                        <img src={windstatus} alt="Wind Status" className="icon" />
                        <p>{highlights.windStatus} km/h</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="highlight-card rounded-3">
                        <h6>Humidity</h6>
                        <img src={humidity} alt="Humidity" className="icon" />
                        <p>{highlights.humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Highlight;