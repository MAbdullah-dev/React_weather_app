import React from 'react'
import sunclocud from "../assets/svg/suncloud.svg"
import { getMultipleCitiesWeather } from "../api/weatherApi";
import CityCard from './CityCard';

const Cities = () => {
    return (
        <div className="cities">
            <h5 className="title mt-2 mb-3">other cities</h5>
            <div className="row g-4">
                <CityCard />
            </div>
        </div>
    )
}

export default Cities