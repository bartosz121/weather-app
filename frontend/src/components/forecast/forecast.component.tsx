import { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { getLocationName } from './forecast.utils';
import { ForecastContainer } from './forecast.styles';

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
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
            {loading ? <h1>loading</h1> : <h1>fetched</h1>}
            { forecast ? <h1>{forecast.forecastData.current.weather[0].main}</h1> : null}
            { location ? <h1>{location}</h1> : null}
        </ForecastContainer>
    )
}

export default withRouter(Forecast);