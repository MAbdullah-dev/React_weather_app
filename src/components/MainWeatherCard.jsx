import { faCloudSun, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainWeatherCard = ({ weatherData }) => {
    if (!weatherData) return <div>Loading....</div>;
    const { location, current, forecastday } = weatherData;
    // console.log(weatherData);
    // Get the current date and format it
    const today = new Date();
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    console.log(formattedDate);


    return (
        <>
            <div className="weather-card rounded-4 p-5">
                <div className="row">
                    <div className="col-6">
                        <span className="badge rounded-4 mb-3 p-2"><FontAwesomeIcon icon={faLocationDot} /> {location.name}</span>
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
                        <h2 className="mb-1 fs-2">{today.toLocaleDateString(undefined, { weekday: 'long' })}</h2>
                        <p className="text-secondary small">{formattedDate}</p>
                        <h1 className="display-4">{current.temp_c}°C</h1>
                        <p>High: {current.temp_c + 2} Low: {current.temp_c - 2}</p>
                    </div>
                    <div className="col-6">
                        <div className='d-flex flex-column align-items-end gap-4 mt-4'>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={current.condition.icon} alt="sun" />
                                <p className='fs-3 fw-bold'>{current.condition.text}</p>
                            </div>
                            <p className='fs-5 fw-normal'>Feels Like {current.feelslike_c}°C</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default MainWeatherCard