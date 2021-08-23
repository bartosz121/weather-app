import React from 'react'
import { ReactSkycon } from 'react-skycons-extended';
import { GiWaterDrop } from 'react-icons/gi';

import Section from '../section/section.component';
import { Card } from '../card/card.component';

import { getSkycon, unixToStringHourMinute } from '../forecast/forecast.utils';
import Hourly from '../../interfaces/forecast/hourly';

interface HourlySectionProps {
    hourly: Hourly[],
    timezone: string,
}

const HourlySection = ({ hourly, timezone }: HourlySectionProps) => {
    return (
        <Section className='section section-hourly' title='Hourly'>
            <div className='gallery'>
                    {
                        hourly.map((hour, index) => (
                            <Card key={`hour${index}`} className={`card hour${index}`}>
                                <span className='card-dt'>{unixToStringHourMinute(hour.dt, timezone)}</span>
                                <div className='card-icon'>
                                    <ReactSkycon icon={getSkycon(hour.weather[0].icon)} color='white' size={64}/>
                                </div>
                                <span className='card-description'>{hour.weather[0].description}</span>
                                <span className='card-temp'>{hour.temp}&#176;C</span>
                                <span className='card-pop'><GiWaterDrop />{Math.round(hour.pop*100)}%</span>
                            </Card>
                        ))
                    }
                </div>
        </Section>
    )
}

export default HourlySection
