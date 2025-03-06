import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HourlyCard = () => {
    return (
        <div className="col">
            <div className='h-cards text-center rounded-4'>
                <span className='d-block'>1pm</span>
                <FontAwesomeIcon icon={faSun} />
                <span className='d-block'>26°</span>
            </div>
        </div>
    )
}

export default HourlyCard