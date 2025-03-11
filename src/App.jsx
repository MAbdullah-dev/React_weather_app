import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Searchbar from './components/Searchbar';
import MainWeatherCard from './components/MainWeatherCard';
import Highlight from './components/Highlight';
import Featurecast from './components/FeatureCast';
import Cities from './components/Cities';
import axios from 'axios';
import { getWeatherByCity } from './api/weatherApi';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Islamabad'); // Default city

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherByCity(city);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="app-container">
      <Container>
        <Searchbar setCity={setCity} />
        <div className="main-component pt-4">
          <div className="row">
            <div className="col-12 col-xl-7">
              <MainWeatherCard weatherData={weatherData} />
            </div>
            <div className="col-12 col-xl-5">
              {weatherData && (
                <Highlight highlights={{
                  chanceOfRain: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
                  uvIndex: weatherData.current.uv,
                  windStatus: weatherData.current.wind_kph,
                  humidity: weatherData.current.humidity
                }} />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-7">
              <Featurecast city={city} />
            </div>
            <div className="col-12 col-xl-5">
              <Cities />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;