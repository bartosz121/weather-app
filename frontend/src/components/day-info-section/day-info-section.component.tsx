import React from 'react'

import Section from '../section/section.component';

import { Daily } from '../../interfaces/forecast/daily';

interface DayInfoSectionProps {
    day: Daily,
    weatherDesc: string,
}

const DayInfoSection = ({ day, weatherDesc }: DayInfoSectionProps) => {
    return (
        <Section className='section day-details day-details-info' title=''>
            <h3>
                {weatherDesc}
            </h3>
            <div className='day-details-info-day'>
                { day.rain ? 
                    <div className='day-details-info'>
                        <span className='small-title'><abbr title='Precipitation volume'>Rain</abbr></span>
                        <span className='info-text'> {day.rain.toFixed(2)} mm</span>
                    </div>
                : null}
                { day.snow ? 
                    <div className='day-details-info'>
                        <span className='small-title'><abbr title='Snow volume'>Snow</abbr></span>
                        <span className='info-text'> {day.snow.toFixed(2)} mm</span>
                    </div>
                : null}
                <div className='day-details-info'>
                    <span className='small-title'>Morning </span>
                    <span className='info-text'>{day.temp.morn}&#176;C</span>
                </div>
                <div className='day-details-info'>
                    <span className='small-title'>Day </span>
                    <span className='info-text'>{day.temp.day}&#176;C</span>
                </div>
                <div className='day-details-info'>
                    <span className='small-title'>Evening </span>
                    <span className='info-text'>{day.temp.eve}&#176;C</span>
                </div>
                <div className='day-details-info'>
                    <span className='small-title'>Night </span>
                    <span className='info-text'>{day.temp.night}&#176;C</span>
                </div>
            </div>
        </Section>
    )
}

export default DayInfoSection
