import ClearDay from '../../assets/bg/clear_day.jpg';
import ClearNight from '../../assets/bg/clear_night.jpg';
import CloudyDay from '../../assets/bg/cloudy_day.jpg';
import CloudyNight from '../../assets/bg/cloudy_night.jpg';
import FogDay from '../../assets/bg/fog_day.jpg';
import FogNight from '../../assets/bg/fog_night.jpg';
import PartlyCloudyDay from '../../assets/bg/partly_cloudy_day.jpg';
import PartlyCloudyNight from '../../assets/bg/partly_cloudy_night.jpg';
import RainDay from '../../assets/bg/rain_day.jpg';
import RainNight from '../../assets/bg/rain_night.jpg';
import SnowDay from '../../assets/bg/snow_day.jpg';
import SnowNight from '../../assets/bg/snow_night.jpg';
import ThunderDay from '../../assets/bg/thunder_day.jpg';
import ThunderNight from '../../assets/bg/thunder_night.jpg';

const mapIconToBackground: Map<string, string> = new Map([
    ['01d', ClearDay],
    ['01n', ClearNight],
    ['02d', PartlyCloudyDay],
    ['02n', PartlyCloudyNight],
    ['03d', PartlyCloudyDay],
    ['03n', PartlyCloudyNight],
    ['04d', CloudyDay],
    ['04n', CloudyNight],
    ['09d', RainDay],
    ['09n', RainNight],
    ['10d', RainDay],
    ['10n', RainNight],
    ['11d', ThunderDay],
    ['11n', ThunderNight],
    ['13d', SnowDay],
    ['13n', SnowNight],
    ['50d', FogDay],
    ['50n', FogNight],
])

export const getBackgroundImage = (icon: string): string => {
    const image = mapIconToBackground.get(icon);
    if(!image){
        return ClearDay;
    }
    return image;
}