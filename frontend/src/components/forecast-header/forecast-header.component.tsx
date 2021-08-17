import React from 'react';
import { ReactSkycon } from 'react-skycons-extended';

import ForecastHeaderContainer from './forecast-header.styles'
import { mapIconToSkycon } from './forecast-header.utils';

import Current from '../../interfaces/forecast/current'

export interface ForecastHeaderProps {
    locationName: string,
    current: Current,
}

const ForecastHeader = ({ locationName, current }: ForecastHeaderProps) => {

    const icon = current.weather[0].icon;
    const fetchTime = new Date(Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return(
        <ForecastHeaderContainer>
            <div className='location-name'>{locationName}</div>
            <div className="current-temp-container">
                <div className="current-icon">
                    <ReactSkycon icon={mapIconToSkycon(icon)} color={'white'} size={128}/>
                </div>
                <div className='current-temp'>
                    {current.temp}&#176;C
                </div>
            </div>
            <div className='current-description'>{current.weather[0].description}</div>
            <div className="when-fetched">
                Updated as of {fetchTime}
            </div>
            <div className="current-info-container">
                <span className='current-info feels-like'>Feels like {current.feels_like}&#176;C</span>
                <span className='current-info pressure'>Barometer {current.pressure}hPa</span>
                <span className='current-info humidity'>Humidity {current.humidity}%</span>
                <span className='current-info dew-point'>Dew point {current.dew_point}&#176;C</span>
                <span className='current-info clouds'>Clouds {current.clouds}%</span>
                <span className='current-info visibility'>Visibility {current.visibility}m</span>
                <span className='current-info wind'>Wind {current.wind_deg} {current.wind_speed}m/s</span>
            </div>
        </ForecastHeaderContainer>
    )
}

export default ForecastHeader;