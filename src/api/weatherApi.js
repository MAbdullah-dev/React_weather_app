import axios from "axios";

const API_KEY = "ed24f8510af54c63930180513250703"; // Ensure this is kept secure
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

// Function to fetch weather by city name
export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY, // Corrected from 'appid' to 'key'
                q: city,
                aqi: "no", // Optional: set 'yes' if you need air quality info
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

// Function to fetch weather for multiple cities
export const getMultipleCitiesWeather = async (cities) => {
    try {
        const weatherData = await Promise.all(
            cities.map((city) => getWeatherByCity(city))
        );
        return weatherData;
    } catch (error) {
        console.error("Error fetching multiple cities' weather:", error);
        throw error;
    }
};
