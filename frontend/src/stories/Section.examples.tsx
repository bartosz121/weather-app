import { ReactSkycon, SkyconType } from "react-skycons-extended"
import { GiWaterDrop } from 'react-icons/gi';

import { unixToStringFullDateTimeTZ } from '../components/forecast/forecast.utils';

import { Card } from "../components/card/card.component"

// File contains children for 'Section' component stories

export const sectionAlert: React.ReactNode = 
    <div className='alert-wrapper'>
        <div className="alert-event">Yellow Thunderstorm warning</div>
        <div className="alert-sender">IMGW-PIB Biuro Prognoz Meteorologicznych w Krakowie</div>
        <div className="alert-time">
        {unixToStringFullDateTimeTZ(1629108000, 'Europe/Warsaw')} to {unixToStringFullDateTimeTZ(1629140400, 'Europe/Warsaw')}
        </div>
        <div className="alert-description">Thunderstorms are forecasted acompanied by the precipitation amount 20 mm to 30 mm and wind gusts up to 90 km/h. Hail in places.</div>
    </div>

export const sectionGalleryExample1: React.ReactNode = 
    <Card>
        <span className='card-dt'>Wed 18</span>
        <div className='card-icon'>
            <ReactSkycon icon={SkyconType.PARTLY_CLOUDY_DAY} color='white' size={64}/>
        </div>
        <span className='card-description'>few clouds</span>
        <span className='card-temp'>21.23&#176;C</span>
        <span className='card-feels-like'>20.7&#176;C</span>
    </Card>

export const sectionGalleryExample2: React.ReactNode = 
<Card>
    <span className='card-dt'>Wed 18</span>
    <div className='card-icon'>
        <ReactSkycon icon={SkyconType.RAIN} color='white' size={64}/>
    </div>
    <span className='card-description'>heavy intensity rain</span>
    <span className='card-temp'>18.49&#176;C</span>
    <span className='card-feels-like'>18.64&#176;C</span>
</Card>

export const sectionGalleryExample3: React.ReactNode = 
<Card>
    <span className='card-dt'>16:00</span>
    <div className='card-icon'>
        <ReactSkycon icon={SkyconType.CLOUDY} color='white' size={64}/>
    </div>
    <span className='card-description'>overcast clouds</span>
    <span className='card-temp'>20.1&#176;C</span>
    <span className='card-pop'><GiWaterDrop />7%</span>
</Card>