import { useState, useEffect } from 'react';
import sunclocud from "../assets/svg/suncloud.svg"
import { getMultipleCitiesWeather } from '../api/weatherApi';

const CityCard = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cities = ["Lahore", "Faisalabad", "Karachi", "Rawalpindi"];

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const data = await getMultipleCitiesWeather(cities);
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();

    }, []);
    // console.log(weatherData);
    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            {weatherData.map((city, index) => (
                <div key={index} className="col-md-6">
                    <div className="city-card rounded-5 p-4">
                        <p className="m-0">
                            {city.current.temp_c}° <span>H{city.forecast.forecastday[0].day.maxtemp_c}° L{city.forecast.forecastday[0].day.mintemp_c}°</span>
                        </p>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-8 city-name">
                                <span>{city.location.name}</span>
                            </div>
                            <div className="col-4">
                                <img src={city.current.condition.icon} alt={city.current.condition.text} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

}

export default CityCard