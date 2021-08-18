import { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ReactSkycon } from 'react-skycons-extended';
import { GiWaterDrop } from 'react-icons/gi';

import { getLocationName, mapIconToSkycon, unixToStringShort2Digit, unixToStringHourMinute } from './forecast.utils';
import { ForecastContainer } from './forecast.styles';
import ForecastHeader from '../forecast-header/forecast-header.component';
import Section from '../section/section.component';
import { Card } from '../card/card.component';

import { ForecastResponse } from '../../interfaces/forecast/forecastResponse';

const EXPRESS_PORT = process.env.REACT_APP_EXPRESS_PORT;

interface ForecastProps extends RouteComponentProps{
    lat: number,
    lng: number,
}

const Forecast = ({ lat, lng, history }: ForecastProps) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [forecast, setForecast] = useState<ForecastResponse>();
    const [location, setLocation] = useState<string>("");

    useEffect(() => {
        (async () => {
            const forecastURL = `http://localhost:${EXPRESS_PORT}/api/forecast?lat=${lat}&lon=${lng}`
            const locationURL = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&addressdetails=0&format=jsonv2`
    
            // Forecast
            await fetch(forecastURL)
            .then(response => response.json())
            .then(forecastData => {
                setForecast(forecastData);
                console.log(forecastData)
            })
            .catch(error => {
                alert(`${error} Redirecting...`);
                history.push('/');
            })
    
            // Location
            await fetch(locationURL)
            .then(response => response.json())
            .then(locationData => {
                setLocation(getLocationName(locationData));
                console.log(locationData);
            })
            .catch(error => {
                alert(`${error} Redirecting...`);
                history.push('/');
            })

            setLoading(false);
        })()
    }, [])

    return (
        <ForecastContainer>
            {loading 
            ? 
            <h1>loading</h1> 
            :
            <div>
                <ForecastHeader className='forecast-header' locationName={location} current={forecast!.forecastData.current}/>
                <Section className='section section-daily' title='Daily' >
                    <div className="gallery">
                        {
                            forecast?.forecastData.daily.map((day, index) => (
                                <Card key={`day${index}`} className={`card day${index}`}>
                                    <span className='card-dt'>{unixToStringShort2Digit(day.dt, forecast.forecastData.timezone)}</span>
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
                <Section className='section section-hourly' title='Hourly'>
                <div className="gallery">
                        {
                            forecast?.forecastData.hourly.map((hour, index) => (
                                <Card key={`hour${index}`} className={`card hour${index}`}>
                                    <span className='card-dt'>{unixToStringHourMinute(hour.dt, forecast.forecastData.timezone)}</span>
                                    <div className='card-icon'>
                                        <ReactSkycon icon={mapIconToSkycon(hour.weather[0].icon)} color='white' size={64}/>
                                    </div>
                                    <span className='card-description'>{hour.weather[0].description}</span>
                                    <span className='card-temp'>{hour.temp}&#176;C</span>
                                    <span className='card-pop'><GiWaterDrop />{Math.round(hour.pop*100)}%</span>
                                </Card>
                            ))
                        }
                    </div>
                </Section>
            </div>
            }
        </ForecastContainer>
    )
}

export default withRouter(Forecast);