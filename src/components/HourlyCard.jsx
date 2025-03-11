import React from 'react';

const HourlyCard = ({ hour }) => {
    return (
        <div className="col">
            <div className='h-cards text-center rounded-4'>
                <span className='d-block'>{new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                <img src={hour.condition.icon} alt={hour.condition.text} />
                <span className='d-block'>{hour.temp_c}°</span>
            </div>
        </div>
    );
};

export default HourlyCard;