import React from 'react'
import { useParams } from 'react-router';

interface params {
    lat: string,
    lon: string
}

const ForecastPage = () => {
    const { lat, lon } = useParams<params>();
    return (
        <div>
            <p>lat: {lat}</p>
            <p>lon: {lon}</p>
        </div>
    )
}

export default ForecastPage
