import { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import LoadingScreen from '../loading-screen/loading-screen.component';
import ForecastHeader from '../forecast-header/forecast-header.component';
import AlertsSection from '../alerts-section/alerts-section.component';
import DailySection from '../daily-section/daily-section.component';
import HourlySection from '../hourly-section/hourly-section.component';
import DayDetailsSection from '../day-details-section/day-details-section.component';
import Footer from '../footer/footer.component';

import { getLocationName } from './forecast.utils';
import { ForecastContainer } from './forecast.styles';
import { ForecastResponse } from '../../interfaces/forecast/forecastResponse';

const EXPRESS_PORT = process.env.REACT_APP_EXPRESS_PORT;

interface ForecastProps extends RouteComponentProps {
    lat: number,
    lng: number,
}

const Forecast = ({ lat, lng, history }: ForecastProps) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [forecast, setForecast] = useState<ForecastResponse>();
    const [location, setLocation] = useState<string>("");
    const [selectedDay, setSelectedDay] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const forecastURL = `http://localhost:${EXPRESS_PORT}/api/forecast?lat=${lat}&lon=${lng}`
            const locationURL = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${lng}&addressdetails=0&format=jsonv2`

            // Forecast
            await fetch(forecastURL)
                .then(response => response.json())
                .then(forecastRes => {
                    setForecast(forecastRes);
                    console.log(forecastRes);
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
        <div>
            {loading
                ?
                <LoadingScreen />
                :
                <ForecastContainer>
                        {/* Header */}
                        <ForecastHeader className='forecast-header' locationName={location} current={forecast!.forecastData.current} timezone={forecast!.forecastData.timezone} />

                        {/* Alerts */}
                        {forecast?.forecastData.alerts ?
                            <AlertsSection alerts={forecast.forecastData.alerts} timezone={forecast.forecastData.timezone} />
                            : null}

                        {/* Daily */}
                        <DailySection daily={forecast!.forecastData.daily} timezone={forecast!.forecastData.timezone}
                            selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

                        {/* Hourly */}
                        <HourlySection hourly={forecast!.forecastData.hourly} timezone={forecast!.forecastData.timezone} />

                        {/* Day Details Section */}
                        <DayDetailsSection dayDetails={forecast!.forecastData.daily[selectedDay]} timezone={forecast!.forecastData.timezone} />

                        {/* Footer */}
                        <Footer />
                </ForecastContainer>
            }
        </div>
    )
}

export default withRouter(Forecast);