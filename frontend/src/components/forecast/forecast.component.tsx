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
        const URL = `http://localhost:${EXPRESS_PORT}/api/forecast?lat=${lat}&lon=${lng}`
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            console.log(data);
        })
        .catch(error => {
            alert(`${error} Redirecting...`);
            history.push('/');
        })
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