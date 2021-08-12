import React from 'react'
import { useParams } from 'react-router';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { validateParams } from './ForecastPage.utils';

import Forecast from '../../components/forecast/forecast.component';

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
        <div className='forecast-page'>
            <Forecast lat={parseFloat(lat)} lng={parseFloat(lng)}/>
        </div>
    )
}

export default withRouter(ForecastPage)
