import React from 'react'
import { WiSunrise, WiSunset } from 'react-icons/wi';

import Section from '../section/section.component';

import { unixToStringHourMinute } from '../forecast/forecast.utils';

interface SunSectionProps {
    sunData: {
        sunrise: number,
        sunset: number,
    },
    timezone: string,
}

const SunSection = ({ sunData, timezone }: SunSectionProps) => {
    return (
        <Section className='section day-details day-details-sun' title=''>
            <div className='sunrise'>
                <div className='small-title'>Sunrise</div>
                <div className='icon-with-text'><WiSunrise className='icon' /><span>{unixToStringHourMinute(sunData.sunrise, timezone)}</span></div>
            </div>
            <div className='sunset'>
            <div className='small-title'>Sunset</div>
                <div className='icon-with-text'><WiSunset className='icon' /><span>{unixToStringHourMinute(sunData.sunset, timezone)}</span></div>
            </div>
        </Section>
    )
}

export default SunSection
