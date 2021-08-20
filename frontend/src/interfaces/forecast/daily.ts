import BasicWeatherData from './basicWeatherData';

export interface TemperatureThroughDay {
    morn: number,
    day: number,
    eve: number,
    night: number
}

export interface TemperatureThroughDayWithMinMax extends TemperatureThroughDay{
    min: number,
    max: number,
}

export interface Daily extends Omit<BasicWeatherData, 'temp' | 'feels_like' | 'rain' | 'snow'> {
    sunrise: number,
    sunset: number,
    moonrise: number,
    moonset: number,
    moon_phase: number,
    temp: TemperatureThroughDayWithMinMax,
    feels_like: TemperatureThroughDay,
    pop: number,
    rain?: number,
    snow?: number,
}
