import { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { ForecastContainer } from './forecast.styles'

const EXPRESS_PORT = process.env.REACT_APP_EXPRESS_PORT;

interface ForecastProps extends RouteComponentProps{
    lat: number,
    lng: number,
}

const Forecast = ({ lat, lng, history }: ForecastProps) => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const forecastURL = `http://localhost:${EXPRESS_PORT}/api/forecast?lat=${lat}&lon=${lng}`
            const locationURL = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&addressdetails=0&format=jsonv2`
    
            // Forecast
            await fetch(forecastURL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                alert(`${error} Redirecting...`);
                history.push('/');
            })
    
            // Location
            await fetch(locationURL)
            .then(response => response.json())
            .then(locationData => {console.log(locationData)})
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
        </ForecastContainer>
    )
}

export default withRouter(Forecast);