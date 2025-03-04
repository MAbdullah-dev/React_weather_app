import React from 'react'

const MainWeatherCard = () => {
    return (
        <>
            <div className="weather-card">
                <div className="weather-header">
                    <span className="location">📍 pakistan</span>
                    <div className="temp-toggle">
                        <button className="active">F</button>
                        <button>C</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainWeatherCard