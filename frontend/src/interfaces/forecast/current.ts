import BasicWeatherData from './basicWeatherData';

interface Current extends BasicWeatherData {
    sunrise: number,
    sunset: number,
    visibility: number,
}

export default Current;