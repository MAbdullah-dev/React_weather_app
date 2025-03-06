import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import HourlyCard from './HourlyCard'
import cloudgif from '../assets/images/cloudgif.gif'

const featurecast = () => {
    return (
        <div className='featurecast rounded-4 p-4'>
            <h6 className="title mt-2 mb-3">Today</h6>
            <div className="row">
                <div className="col-9">
                    <div className='hourly-cards p-4 rounded-5'>
                        <div className="row g-2">
                            <HourlyCard />
                            <HourlyCard />
                            <HourlyCard />
                            <HourlyCard />
                            <HourlyCard />
                            <HourlyCard />
                            <HourlyCard />
                        </div>
                    </div>
                    <div className="tomorrow-weather p-4 rounded-5">
                        <div className="row">
                            <div className="col-9">
                                <ul className='d-flex align-items-center gap-4'>
                                    <li>
                                        <h6>Tomorrow</h6>
                                        <span>thunder strom</span>
                                    </li>
                                    <li>
                                        <p className='fs-1'>14°</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <img src={cloudgif} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="Daylight-info p-4 rounded-5">
                        <div className="row gap-1 text-center">
                            <div className="col-12">
                                <p className='fw-bolds fs-6'>Sunrise</p>
                                <p>6:45 <span>AM</span></p>
                            </div>
                            <div className="col-12">
                                <p className='fw-bolds fs-6'>Sunset</p>
                                <p>5:30 <span>PM</span></p>
                            </div>
                            <div className="col-12">
                                <p className='fw-bolds fs-6'>length of day</p>
                                <p>10h 23m</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default featurecast