import { useState, useEffect } from 'react';
import sunclocud from "../assets/svg/suncloud.svg"
import { getMultipleCitiesWeather } from '../api/weatherApi';

const CityCard = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cities = ["London", "New York", "Tokyo", "Dubai"];

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
            {weatherData.map((city, index) =>)
                < div className="col-md-6">
            <div className="city-card rounded-5 p-4">
                <p className='m-0'>14°<span>H23° L10°</span></p>
                <div className="row align-items-center justify-content-center">
                    <div className="col-8 city-name">
                        <span>USA</span>
                    </div>
                    <div className="col-4">
                        <img src={sunclocud} alt="" />
                    </div>
                </div>
            </div>
        </ >
            }
        </>
    );
}

export default CityCard