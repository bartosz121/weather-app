import React from 'react'
import { useParams } from 'react-router';
import { RouteComponentProps, withRouter, Redirect } from 'react-router-dom';

import { validateParams } from './ForecastPage.utils';

interface params {
    lat: string,
    lng: string
}

const ForecastPage = ({ history }: RouteComponentProps) => {
    const { lat, lng } = useParams<params>();
    if (!validateParams(lat, lng)){
        history.push('/')
    }

    
    return (
        <div>
            <p>lat: {lat}</p>
            <p>lon: {lng}</p>
        </div>
    )
}

export default withRouter(ForecastPage)
