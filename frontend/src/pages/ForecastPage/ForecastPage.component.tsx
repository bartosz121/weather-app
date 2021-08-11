import React from 'react'
import { useParams } from 'react-router';

interface params {
    lat: string,
    lng: string
}

const ForecastPage = () => {
    const { lat, lng } = useParams<params>();
    return (
        <div>
            <p>lat: {lat}</p>
            <p>lon: {lng}</p>
        </div>
    )
}

export default ForecastPage
