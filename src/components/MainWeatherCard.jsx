import { faCloudSun, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import sun from '../assets/svg/sun.svg'
import React from 'react'

const MainWeatherCard = () => {
    return (
        <>
            <div className="weather-card rounded-4 p-5">
                <div className="row">
                    <div className="col-6">
                        <span className="badge rounded-4 mb-3 p-2"><FontAwesomeIcon icon={faLocationDot} /> pakistan</span>
                    </div>
                    <div className="col-6">
                        <div className="buttons mb-3 d-flex justify-content-end">
                            <button className="card-btn left-btn border-0">F</button>
                            <button className="card-btn right-btn border-0 bg-light text-dark">C</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h2 className="mb-1 fs-2">Monday</h2>
                        <p className="text-secondary small">5 March, 2025</p>
                        <h1 className="display-4">26°C</h1>
                        <p>High: 27 Low: 10</p>
                    </div>
                    <div className="col-6">
                        <div className='d-flex flex-column align-items-end'>
                            <img src={sun} alt="sun" />
                            <p className='fs-2 fw-bold'>Cloudy</p>
                            <p className='fs-5 fw-normal'>Feels Like 26°C</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MainWeatherCard