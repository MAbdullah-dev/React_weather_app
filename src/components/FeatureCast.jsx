import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import HourlyCard from './HourlyCard'
import cloudgif from '../assets/images/cloudgif.gif'
import { getWeatherByCity } from '../api/weatherApi'

const featurecast = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [next7Hours, setNext7Hours] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await getWeatherByCity(city, 1); // Fetch 1 day forecast
                setWeatherData(data);

                const now = new Date();
                const currentHour = now.getHours();

                // Calculate the next 7 hours from the current time
                const hours = data.forecast.forecastday[0].hour;
                const nextHours = [];
                for (let i = 0; i < 6; i++) {
                    const hour = (currentHour + i) % 24;
                    nextHours.push(hours[hour]);
                }
                setNext7Hours(nextHours);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();
    }, [city]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    const today = weatherData.forecast.forecastday[0];

    return (
        <div className='featurecast rounded-4 p-4'>
            <h6 className="title mt-2 mb-3">Next 7 Hours</h6>
            <div className="row">
                <div className="col-9">
                    <div className='hourly-cards p-4 rounded-5'>
                        <div className="row g-1">
                            {next7Hours.map((hour, index) => (
                                <HourlyCard key={index} hour={hour} />
                            ))}
                        </div>
                    </div>
                    <div className="tomorrow-weather p-4 rounded-5">
                        <div className="row">
                            <div className="col-9">
                                <ul className='d-flex align-items-center gap-4'>
                                    <li>
                                        <h6>Tomorrow</h6>
                                        <span>{today.day.condition.text}</span>
                                    </li>
                                    <li>
                                        <p className='fs-1'>{today.day.avgtemp_c}°</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <img src={today.day.condition.icon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="Daylight-info p-4 rounded-5">
                        <div className="row gap-1 text-center">
                            <div className="col-12">
                                <p className='fw-bolds fs- mt-3'>Sunrise</p>
                                <p>{today.astro.sunrise}</p>
                            </div>
                            <div className="col-12">
                                <p className='fw-bolds fs- mt-3'>Sunset</p>
                                <p>{today.astro.sunset}</p>
                            </div>
                            <div className="col-12">
                                <p className='fw-bolds fs- mt-3'>length of day</p>
                                <p>{calculateDayLength(today)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const calculateDayLength = (day) => {
    const [sunriseHour, sunriseMinute] = day.astro.sunrise.split(' ')[0].split(':');
    const [sunsetHour, sunsetMinute] = day.astro.sunset.split(' ')[0].split(':');
    const sunrise = new Date();
    sunrise.setHours(parseInt(sunriseHour));
    sunrise.setMinutes(parseInt(sunriseMinute));

    const sunset = new Date();
    sunset.setHours(parseInt(sunsetHour) + 12); // Adjust for 12-hour format
    sunset.setMinutes(parseInt(sunsetMinute));

    const length = new Date(sunset - sunrise);
    const hours = length.getUTCHours();
    const minutes = length.getUTCMinutes();

    return `${hours}h ${minutes}m`;
};

export default featurecast;