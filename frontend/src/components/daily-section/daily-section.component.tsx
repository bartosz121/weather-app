import React from 'react'
import { ReactSkycon } from 'react-skycons-extended';

import Section from '../section/section.component';
import { Card } from '../card/card.component';

import { mapIconToSkycon, unixToStringShortWeekDay2Digit } from '../forecast/forecast.utils';
import { Daily } from '../../interfaces/forecast/daily';

interface DailySectionProps {
    daily: Daily[],
    timezone: string,
}

const DailySection = ({ daily, timezone }: DailySectionProps) => {
    return (
        <Section className='section section-daily' title='Daily' >
            <div className='gallery'>
                {
                    daily.map((day, index) => (
                        <Card key={`day${index}`} className={`card day${index}`}>
                            <span className='card-dt'>{unixToStringShortWeekDay2Digit(day.dt, timezone)}</span>
                            <div className='card-icon'>
                                <ReactSkycon icon={mapIconToSkycon(day.weather[0].icon)} color='white' size={64}/>
                            </div>
                            <span className='card-description'>{day.weather[0].description}</span>
                            <span className='card-temp'>{day.temp.day}&#176;C</span>
                            <span className='card-feels-like'>{day.feels_like.day}&#176;C</span>
                        </Card>
                    ))
                }
            </div>
        </Section>
    )
}

export default DailySection;
