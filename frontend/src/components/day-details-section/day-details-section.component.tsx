import React from 'react';

import Section from '../section/section.component';
import DayTempSection from '../day-temp-section/day-temp-section.component';
import SunSection from '../sun-section/sun-section.component';
import MoonSection from '../moon-section/moon-section.component';
import ProgressbarSection from '../progressbar-section/progressbar-section.component';

import { unixToStringLongWeekDay2Digit } from '../forecast/forecast.utils';

import DayDetailsSectionContainer from './day-details-section.styles';
import { Daily } from '../../interfaces/forecast/daily';

interface DayDetailsSectionProps {
    dayDetails: Daily,
    timezone: string,
}

const DayDetailsSection = ({ dayDetails, timezone }: DayDetailsSectionProps) => {
    return (
        <DayDetailsSectionContainer>
            <Section className='section section-day-details' title={`Day Details - ${unixToStringLongWeekDay2Digit(dayDetails.dt, timezone)}`}>
                <div className='day-details-wrapper'>
                    <DayTempSection temp={dayDetails.temp} weatherDesc={dayDetails.weather[0].description} />
                    <SunSection sunData={{sunrise: dayDetails.sunrise, sunset: dayDetails.sunset}} timezone={timezone} />
                    <MoonSection moonData={{moonrise: dayDetails.moonrise, moonset: dayDetails.moonset, moonPhase: dayDetails.moon_phase}} timezone={timezone} />
                    <ProgressbarSection dayDetails={dayDetails}/>
                </div>
            </Section>
        </DayDetailsSectionContainer>
    )
}

export default DayDetailsSection
