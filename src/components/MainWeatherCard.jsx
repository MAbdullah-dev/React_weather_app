import { faCloudSun, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const MainWeatherCard = () => {
    return (
        <>
            <div className="weather-card p-4 rounded-4 pt-5">
                {/* Header: Location & Temperature Toggle */}
                <div className="header d-flex justify-content-between align-items-center">
                    <span className="badge px-3 py-2 rounded-4"><FontAwesomeIcon icon={faLocationDot} /> pakistan</span>
                    <div className="btn-group">
                        <button className="card-btn left-btn border-0">F</button>
                        <button className="card-btn right-btn border-0 bg-light text-dark">C</button>
                    </div>
                </div>

                {/* Weather Info */}
                <div className="row mt-3">
                    <div className="col-7">
                        <h2 className="mb-1 fs-2">Monday</h2>
                        <p className="text-secondary small">5 March, 2025</p>
                        <h1 className="display-4">26°C</h1>
                        <p>High: 27 Low: 10</p>
                        <p className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faCloudSun} className="text-warning me-2" size="2x" />
                            Cloudy
                        </p>
                        
                    </div>
                    {/* Weather Icon */}
                    <div className="col-5 d-flex justify-content-center align-items-center gap-2 flex-column">
                        <FontAwesomeIcon icon={faCloudSun} className="text-warning" size="6x" />
                        <p className='fs-2 fw-bold'>Cloudy</p>
                        <p className='fs-5 fw-normal'>Feels Like 26°C</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainWeatherCard