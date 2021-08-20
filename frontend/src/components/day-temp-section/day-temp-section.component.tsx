import React from 'react'

import Section from '../section/section.component';

import { TemperatureThroughDayWithMinMax } from '../../interfaces/forecast/daily';

interface DayTempSectionProps {
    temp: TemperatureThroughDayWithMinMax,
    weatherDesc: string,
}

const DayTempSection = ({ temp, weatherDesc }: DayTempSectionProps) => {
    return (
        <Section className='section day-details day-details-temp' title=''>
            <h3>
                {weatherDesc}
            </h3>
            <div className='day-details-temp-day'>
                <div className='day-details-info'>
                    <span className='small-title'>Morning </span>
                    <span className='temp-text'>{temp.morn}&#176;C</span>
                </div>
                <div className='day-details-info'>
                    <span className='small-title'>Day </span>
                    <span className='temp-text'>{temp.day}&#176;C</span>
                </div>
                <div className='day-details-info'>
                    <span className='small-title'>Evening </span>
                    <span className='temp-text'>{temp.eve}&#176;C</span>
                </div>
                <div className='day-details-info'>
                    <span className='small-title'>Night </span>
                    <span className='temp-text'>{temp.night}&#176;C</span>
                </div>
            </div>
        </Section>
    )
}

export default DayTempSection
