import Current from "./current";
import Hourly from "./hourly";
import Daily from "./daily";
import Alerts from "./alerts";

export interface ForecastResponse {
    status: number,
    forecastData: ForecastData
}

interface ForecastData {
    lat: number,
    lon: number,
    timezone: string,
    timezone_offset: number,
    current: Current,
    minutely: {}, // Excluded in API call
    hourly: Array<Hourly>,
    daily: Array<Daily>,
    alerts?: Array<Alerts>
}



