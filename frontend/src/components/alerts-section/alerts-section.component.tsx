import React from 'react'

import Section from '../section/section.component';

import { unixToStringFullDateTimeTZ } from '../forecast/forecast.utils';
import Alerts from '../../interfaces/forecast/alerts';

interface AlertsSectionProps {
    alerts: Alerts[],
    timezone: string
}

const AlertsSection = ({ alerts, timezone }: AlertsSectionProps) => {
    return (
        <Section className='section section-alerts' title='Alerts' >
            {alerts.map((alert, index) => (
                <div key={`alert${index}`} className='alert-wrapper'>
                    <div className='alert-event'>{alert.event}</div>
                    <div className='alert-sender'>{alert.sender_name}</div>
                    <div className='alert-time'>
                    {unixToStringFullDateTimeTZ(alert.start, timezone)} to {unixToStringFullDateTimeTZ(alert.end, timezone)}
                    </div>
                    <div className='alert-description'>{alert.description}</div>
                </div>
            ))}
        </Section> 
    )
}

export default AlertsSection
