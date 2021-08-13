import BasicWeatherData from './basicWeatherData';

interface Hourly extends BasicWeatherData{
    pop: number,
    visibility: number,
}

export default Hourly;