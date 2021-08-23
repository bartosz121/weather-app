import { SkyconType } from "react-skycons-extended"

interface LocationResponse {
    place_id: number,
    osm_type: string,
    osm_id: number,
    lat: string,
    lon: string,
    name: string,
    display_name: string,
    category: string,
    type: string,
    importance: number,
    place_rank: number,
    addresstype: string,
    licence: string,
    boundingbox: Array<string>,
    icon?: string,
    error?: string,
}

export const getLocationName = (locationData: LocationResponse): string => {
    if(locationData.error){
        return 'Location Unknown';
    } return locationData.display_name;
}

export const unixToStringShortWeekDay2Digit = (unix: number, timezone: string): string => {
    // Wed 20
    const date = new Date(unix * 1000);
    return new Intl.DateTimeFormat([], {weekday: 'short', day: '2-digit', timeZone: timezone}).format(date);
}

export const unixToStringLongWeekDay2Digit = (unix: number, timezone: string): string => {
    // Wednesday 20
    const date = new Date(unix * 1000);
    return new Intl.DateTimeFormat([], {weekday: 'long', day: '2-digit', timeZone: timezone}).format(date);
}

export const unixToStringHourMinute = (unix: number, timezone: string): string => {
    // 03:00
    const date = new Date(unix * 1000);
    return new Intl.DateTimeFormat([], {hour: '2-digit', minute: '2-digit', timeZone: timezone}).format(date);
}

export const unixToStringDateTimeTZ = (unix: number, timezone: string): string => {
    // 20/12/2020, 04:23 CET
    const date = new Date(unix * 1000);
    return new Intl.DateTimeFormat([], {day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName:'short', timeZone: timezone}).format(date);
}

export const unixToStringFullDateTimeTZ = (unix: number, timezone: string): string => {
    // Sunday, 20 December 2020 at 14:23:16 GMT+11
    const date = new Date(unix * 1000);
    return new Intl.DateTimeFormat([], {dateStyle: 'full', timeStyle: 'long', timeZone: timezone}).format(date);
}


// https://openweathermap.org/weather-conditions

// export const mapIconToSkycon = {
//     '01d': SkyconType.CLEAR_DAY,
//     '01n': SkyconType.CLEAR_NIGHT,
//     '02d': SkyconType.PARTLY_CLOUDY_DAY,
//     '02n': SkyconType.PARTLY_CLOUDY_NIGHT,
//     '03d': SkyconType.PARTLY_CLOUDY_DAY,
//     '03n': SkyconType.PARTLY_CLOUDY_NIGHT,
//     '04d': SkyconType.CLOUDY,
//     '04n': SkyconType.CLOUDY,
//     '09d': SkyconType.RAIN,
//     '09n': SkyconType.RAIN,
//     '10d': SkyconType.RAIN,
//     '10n': SkyconType.RAIN,
//     '11d': SkyconType.THUNDER_RAIN,
//     '11n': SkyconType.THUNDER_RAIN,
//     '13d': SkyconType.SNOW,
//     '13n': SkyconType.SNOW,
//     '50d': SkyconType.FOG,
//     '50n': SkyconType.FOG,
// }

export const mapIconToSkycon = (icon: string): SkyconType => {
    switch(icon){
        case '01d':
            return SkyconType.CLEAR_DAY;
        case '01n':
            return SkyconType.CLEAR_NIGHT;
        case '02d':
            return SkyconType.PARTLY_CLOUDY_DAY;
        case '02n':
            return SkyconType.PARTLY_CLOUDY_NIGHT;
        case '03d':
            return SkyconType.PARTLY_CLOUDY_DAY;
        case '03n':
            return SkyconType.PARTLY_CLOUDY_NIGHT;
        case '04d':
            return SkyconType.CLOUDY;
        case '04n':
            return SkyconType.CLOUDY;
        case '09d':
            return SkyconType.RAIN;
        case '09n':
            return SkyconType.RAIN;
        case '10d':
            return SkyconType.RAIN;
        case '10n':
            return SkyconType.RAIN;
        case '11d':
            return SkyconType.THUNDER_RAIN;
        case '11n':
            return SkyconType.THUNDER_RAIN;
        case '13d':
            return SkyconType.SNOW;
        case '13n':
            return SkyconType.SNOW;
        case '50d':
            return SkyconType.FOG;
        case '50n':
            return SkyconType.FOG;
        default:
            return SkyconType.CLEAR_DAY;
    }
}
