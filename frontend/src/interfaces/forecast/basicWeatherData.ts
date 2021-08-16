import CurrentWeather from './currentWeather';

interface BasicWeatherData {
    dt: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    dew_point: number,
    clouds: number,
    uvi: number,
    wind_speed: number,
    wind_gust?: number,
    wind_deg: number,
    rain?: { '1h': number},
    snow?: { '1h': number},
    weather: Array<CurrentWeather>,
}

export default BasicWeatherData;