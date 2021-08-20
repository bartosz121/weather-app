import React from 'react'
import { WiMoonrise, WiMoonset } from 'react-icons/wi';

import Section from '../section/section.component';

import { getMoonPhaseIcon } from './moon-section.utils';
import { unixToStringHourMinute } from '../forecast/forecast.utils';

interface MoonSectionProps {
    moonData: {
        moonrise: number,
        moonset: number,
        moonPhase: number,
    },
    timezone: string,
}

const MoonSection = ({ moonData, timezone }: MoonSectionProps) => {
    return (
        <Section className='section day-details day-details-moon' title=''>
            <div className='moonrise'>
            <div className='small-title'>Moonrise</div>
                <div className='icon-with-text'><WiMoonrise className='icon' /><span>{unixToStringHourMinute(moonData.moonrise, timezone)}</span></div>
            </div>
            <div className='moonset'>
            <div className='small-title'>Moonset</div>
                <div className='icon-with-text'><WiMoonset className='icon' /><span>{unixToStringHourMinute(moonData.moonset, timezone)}</span></div>
            </div>
            <div className='moonphase'>
            <div className='small-title'>Moon Phase</div>
                {getMoonPhaseIcon(moonData.moonPhase)}
            </div>
            
        </Section>
    )
}

export default MoonSection
