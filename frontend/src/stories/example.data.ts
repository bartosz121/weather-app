import { ForecastResponse } from '../interfaces/forecast/forecastResponse';

export const locationExample = 'Main Square, Szewska, Old Town, Stare Miasto, Old Town, Krakow, Lesser Poland Voivodeship, 31-009, Poland';

export const forecastExample: ForecastResponse = {
  "status": 200,
  "forecastData": {
    "lat": 50.0617,
    "lon": 19.9361,
    "timezone": "Europe/Warsaw",
    "timezone_offset": 7200,
    "current": {
      "dt": 1629110252,
      "sunrise": 1629084685,
      "sunset": 1629136675,
      "temp": 28.46,
      "feels_like": 30.02,
      "pressure": 1010,
      "humidity": 59,
      "dew_point": 19.67,
      "uvi": 5.46,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 3.6,
      "wind_deg": 210,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1629108000,
        "temp": 28.41,
        "feels_like": 29.82,
        "pressure": 1010,
        "humidity": 58,
        "dew_point": 19.35,
        "uvi": 5.32,
        "clouds": 27,
        "visibility": 10000,
        "wind_speed": 3.44,
        "wind_deg": 258,
        "wind_gust": 6,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1629111600,
        "temp": 28.46,
        "feels_like": 30.02,
        "pressure": 1010,
        "humidity": 59,
        "dew_point": 19.67,
        "uvi": 5.46,
        "clouds": 20,
        "visibility": 10000,
        "wind_speed": 4.45,
        "wind_deg": 262,
        "wind_gust": 6.74,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0.01
      },
      {
        "dt": 1629115200,
        "temp": 28.62,
        "feels_like": 30.01,
        "pressure": 1010,
        "humidity": 57,
        "dew_point": 19.27,
        "uvi": 4.9,
        "clouds": 28,
        "visibility": 10000,
        "wind_speed": 5.33,
        "wind_deg": 261,
        "wind_gust": 7.93,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629118800,
        "temp": 28.8,
        "feels_like": 30.01,
        "pressure": 1009,
        "humidity": 55,
        "dew_point": 18.86,
        "uvi": 3.81,
        "clouds": 42,
        "visibility": 10000,
        "wind_speed": 5.57,
        "wind_deg": 267,
        "wind_gust": 8.62,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629122400,
        "temp": 28.69,
        "feels_like": 30.11,
        "pressure": 1009,
        "humidity": 57,
        "dew_point": 19.33,
        "uvi": 2.49,
        "clouds": 39,
        "visibility": 10000,
        "wind_speed": 5.35,
        "wind_deg": 273,
        "wind_gust": 8.74,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629126000,
        "temp": 27.96,
        "feels_like": 29.39,
        "pressure": 1008,
        "humidity": 60,
        "dew_point": 19.48,
        "uvi": 1.33,
        "clouds": 42,
        "visibility": 10000,
        "wind_speed": 4.66,
        "wind_deg": 273,
        "wind_gust": 7.81,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629129600,
        "temp": 26.6,
        "feels_like": 26.6,
        "pressure": 1008,
        "humidity": 63,
        "dew_point": 18.73,
        "uvi": 0.55,
        "clouds": 61,
        "visibility": 10000,
        "wind_speed": 3.76,
        "wind_deg": 263,
        "wind_gust": 8.29,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629133200,
        "temp": 24.74,
        "feels_like": 25.07,
        "pressure": 1007,
        "humidity": 69,
        "dew_point": 18.33,
        "uvi": 0.15,
        "clouds": 69,
        "visibility": 10000,
        "wind_speed": 2.9,
        "wind_deg": 260,
        "wind_gust": 6.03,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629136800,
        "temp": 23.37,
        "feels_like": 23.56,
        "pressure": 1007,
        "humidity": 69,
        "dew_point": 17.12,
        "uvi": 0,
        "clouds": 74,
        "visibility": 10000,
        "wind_speed": 2.33,
        "wind_deg": 265,
        "wind_gust": 4.19,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629140400,
        "temp": 22.7,
        "feels_like": 22.85,
        "pressure": 1007,
        "humidity": 70,
        "dew_point": 16.7,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.21,
        "wind_deg": 240,
        "wind_gust": 2.12,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629144000,
        "temp": 22.61,
        "feels_like": 22.75,
        "pressure": 1007,
        "humidity": 70,
        "dew_point": 16.67,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.43,
        "wind_deg": 185,
        "wind_gust": 1.98,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.13
      },
      {
        "dt": 1629147600,
        "temp": 21.61,
        "feels_like": 21.84,
        "pressure": 1007,
        "humidity": 77,
        "dew_point": 17.05,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.14,
        "wind_deg": 264,
        "wind_gust": 5.39,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.61,
        "rain": {
          "1h": 0.46
        }
      },
      {
        "dt": 1629151200,
        "temp": 19.81,
        "feels_like": 20.14,
        "pressure": 1007,
        "humidity": 88,
        "dew_point": 17.56,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.28,
        "wind_deg": 254,
        "wind_gust": 3,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.96,
        "rain": {
          "1h": 0.94
        }
      },
      {
        "dt": 1629154800,
        "temp": 18.57,
        "feels_like": 18.91,
        "pressure": 1007,
        "humidity": 93,
        "dew_point": 17.16,
        "uvi": 0,
        "clouds": 100,
        "visibility": 5992,
        "wind_speed": 7.35,
        "wind_deg": 253,
        "wind_gust": 10.29,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 1.88
        }
      },
      {
        "dt": 1629158400,
        "temp": 16.45,
        "feels_like": 16.61,
        "pressure": 1009,
        "humidity": 94,
        "dew_point": 15.29,
        "uvi": 0,
        "clouds": 100,
        "visibility": 3555,
        "wind_speed": 9.56,
        "wind_deg": 284,
        "wind_gust": 16.29,
        "weather": [
          {
            "id": 503,
            "main": "Rain",
            "description": "very heavy rain",
            "icon": "10n"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 18.28
        }
      },
      {
        "dt": 1629162000,
        "temp": 16,
        "feels_like": 16.14,
        "pressure": 1009,
        "humidity": 95,
        "dew_point": 14.91,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.92,
        "wind_deg": 290,
        "wind_gust": 10.52,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
          }
        ],
        "pop": 0.87,
        "rain": {
          "1h": 2.53
        }
      },
      {
        "dt": 1629165600,
        "temp": 15.85,
        "feels_like": 15.95,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 14.63,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.33,
        "wind_deg": 288,
        "wind_gust": 8.92,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.74
      },
      {
        "dt": 1629169200,
        "temp": 15.86,
        "feels_like": 15.96,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 14.59,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.29,
        "wind_deg": 271,
        "wind_gust": 7.53,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0.77
      },
      {
        "dt": 1629172800,
        "temp": 15.95,
        "feels_like": 16.06,
        "pressure": 1010,
        "humidity": 94,
        "dew_point": 14.7,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.86,
        "wind_deg": 270,
        "wind_gust": 7.1,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.8
      },
      {
        "dt": 1629176400,
        "temp": 16,
        "feels_like": 16.08,
        "pressure": 1011,
        "humidity": 93,
        "dew_point": 14.64,
        "uvi": 0.17,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.44,
        "wind_deg": 259,
        "wind_gust": 7.13,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.8
      },
      {
        "dt": 1629180000,
        "temp": 15.95,
        "feels_like": 16,
        "pressure": 1011,
        "humidity": 92,
        "dew_point": 14.3,
        "uvi": 0.5,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.98,
        "wind_deg": 262,
        "wind_gust": 8.62,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.98,
        "rain": {
          "1h": 0.15
        }
      },
      {
        "dt": 1629183600,
        "temp": 15.12,
        "feels_like": 15.14,
        "pressure": 1012,
        "humidity": 94,
        "dew_point": 13.87,
        "uvi": 0.34,
        "clouds": 100,
        "visibility": 7243,
        "wind_speed": 5.42,
        "wind_deg": 270,
        "wind_gust": 10.23,
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "pop": 1,
        "rain": {
          "1h": 1.07
        }
      },
      {
        "dt": 1629187200,
        "temp": 14.28,
        "feels_like": 14.17,
        "pressure": 1013,
        "humidity": 92,
        "dew_point": 12.64,
        "uvi": 0.57,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.87,
        "wind_deg": 295,
        "wind_gust": 9.86,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "pop": 0.99,
        "rain": {
          "1h": 0.97
        }
      },
      {
        "dt": 1629190800,
        "temp": 13.46,
        "feels_like": 13.13,
        "pressure": 1015,
        "humidity": 87,
        "dew_point": 11.01,
        "uvi": 0.79,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.64,
        "wind_deg": 282,
        "wind_gust": 11.88,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.79
      },
      {
        "dt": 1629194400,
        "temp": 13.35,
        "feels_like": 12.93,
        "pressure": 1015,
        "humidity": 84,
        "dew_point": 10.52,
        "uvi": 3.93,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.8,
        "wind_deg": 276,
        "wind_gust": 11.28,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.78
      },
      {
        "dt": 1629198000,
        "temp": 15.58,
        "feels_like": 15.15,
        "pressure": 1015,
        "humidity": 75,
        "dew_point": 11.01,
        "uvi": 4.04,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.74,
        "wind_deg": 260,
        "wind_gust": 9.71,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.78
      },
      {
        "dt": 1629201600,
        "temp": 16.87,
        "feels_like": 16.47,
        "pressure": 1015,
        "humidity": 71,
        "dew_point": 11.27,
        "uvi": 3.62,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 5.44,
        "wind_deg": 256,
        "wind_gust": 8.43,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.78
      },
      {
        "dt": 1629205200,
        "temp": 18.24,
        "feels_like": 17.71,
        "pressure": 1015,
        "humidity": 61,
        "dew_point": 10.42,
        "uvi": 3.16,
        "clouds": 96,
        "visibility": 10000,
        "wind_speed": 5.81,
        "wind_deg": 274,
        "wind_gust": 8.28,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.22
      },
      {
        "dt": 1629208800,
        "temp": 17.44,
        "feels_like": 16.99,
        "pressure": 1015,
        "humidity": 67,
        "dew_point": 10.98,
        "uvi": 2.06,
        "clouds": 97,
        "visibility": 10000,
        "wind_speed": 5.57,
        "wind_deg": 267,
        "wind_gust": 7.84,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0.03
      },
      {
        "dt": 1629212400,
        "temp": 16.79,
        "feels_like": 16.33,
        "pressure": 1015,
        "humidity": 69,
        "dew_point": 10.84,
        "uvi": 1.1,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 4.53,
        "wind_deg": 269,
        "wind_gust": 7.25,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629216000,
        "temp": 16.83,
        "feels_like": 16.37,
        "pressure": 1015,
        "humidity": 69,
        "dew_point": 10.93,
        "uvi": 0.52,
        "clouds": 83,
        "visibility": 10000,
        "wind_speed": 4.46,
        "wind_deg": 262,
        "wind_gust": 7.49,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629219600,
        "temp": 15.74,
        "feels_like": 15.2,
        "pressure": 1016,
        "humidity": 70,
        "dew_point": 10.02,
        "uvi": 0.14,
        "clouds": 80,
        "visibility": 10000,
        "wind_speed": 4.39,
        "wind_deg": 261,
        "wind_gust": 8.73,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629223200,
        "temp": 15.11,
        "feels_like": 14.45,
        "pressure": 1016,
        "humidity": 68,
        "dew_point": 9.03,
        "uvi": 0,
        "clouds": 81,
        "visibility": 10000,
        "wind_speed": 4.37,
        "wind_deg": 253,
        "wind_gust": 9.48,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629226800,
        "temp": 13.66,
        "feels_like": 12.99,
        "pressure": 1016,
        "humidity": 73,
        "dew_point": 8.59,
        "uvi": 0,
        "clouds": 46,
        "visibility": 10000,
        "wind_speed": 3.58,
        "wind_deg": 247,
        "wind_gust": 9.06,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629230400,
        "temp": 12.5,
        "feels_like": 11.79,
        "pressure": 1016,
        "humidity": 76,
        "dew_point": 8.1,
        "uvi": 0,
        "clouds": 62,
        "visibility": 10000,
        "wind_speed": 2.79,
        "wind_deg": 236,
        "wind_gust": 5.34,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629234000,
        "temp": 12.2,
        "feels_like": 11.46,
        "pressure": 1016,
        "humidity": 76,
        "dew_point": 7.82,
        "uvi": 0,
        "clouds": 75,
        "visibility": 10000,
        "wind_speed": 2.76,
        "wind_deg": 226,
        "wind_gust": 4.75,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629237600,
        "temp": 12.16,
        "feels_like": 11.39,
        "pressure": 1016,
        "humidity": 75,
        "dew_point": 7.52,
        "uvi": 0,
        "clouds": 81,
        "visibility": 10000,
        "wind_speed": 2.71,
        "wind_deg": 231,
        "wind_gust": 5.34,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629241200,
        "temp": 11.79,
        "feels_like": 10.98,
        "pressure": 1016,
        "humidity": 75,
        "dew_point": 7.21,
        "uvi": 0,
        "clouds": 82,
        "visibility": 10000,
        "wind_speed": 2.6,
        "wind_deg": 231,
        "wind_gust": 5.47,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629244800,
        "temp": 11.36,
        "feels_like": 10.54,
        "pressure": 1016,
        "humidity": 76,
        "dew_point": 7.08,
        "uvi": 0,
        "clouds": 84,
        "visibility": 10000,
        "wind_speed": 2.28,
        "wind_deg": 237,
        "wind_gust": 4.64,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629248400,
        "temp": 10.98,
        "feels_like": 10.14,
        "pressure": 1016,
        "humidity": 77,
        "dew_point": 6.89,
        "uvi": 0,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 2.37,
        "wind_deg": 229,
        "wind_gust": 4.55,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629252000,
        "temp": 11.63,
        "feels_like": 10.78,
        "pressure": 1016,
        "humidity": 74,
        "dew_point": 6.9,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.29,
        "wind_deg": 239,
        "wind_gust": 4.4,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629255600,
        "temp": 11.62,
        "feels_like": 10.77,
        "pressure": 1016,
        "humidity": 74,
        "dew_point": 6.86,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.34,
        "wind_deg": 253,
        "wind_gust": 4.69,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629259200,
        "temp": 11.97,
        "feels_like": 11.15,
        "pressure": 1016,
        "humidity": 74,
        "dew_point": 7.3,
        "uvi": 0,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.23,
        "wind_deg": 230,
        "wind_gust": 4.13,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629262800,
        "temp": 12.76,
        "feels_like": 12.08,
        "pressure": 1016,
        "humidity": 76,
        "dew_point": 8.37,
        "uvi": 0.31,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.04,
        "wind_deg": 241,
        "wind_gust": 4.8,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629266400,
        "temp": 14.07,
        "feels_like": 13.41,
        "pressure": 1016,
        "humidity": 72,
        "dew_point": 8.88,
        "uvi": 0.9,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.06,
        "wind_deg": 254,
        "wind_gust": 6.02,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629270000,
        "temp": 15.39,
        "feels_like": 14.73,
        "pressure": 1016,
        "humidity": 67,
        "dew_point": 9.02,
        "uvi": 1.91,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.91,
        "wind_deg": 260,
        "wind_gust": 6.33,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629273600,
        "temp": 15.61,
        "feels_like": 14.95,
        "pressure": 1016,
        "humidity": 66,
        "dew_point": 9,
        "uvi": 3.16,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 4.56,
        "wind_deg": 264,
        "wind_gust": 6.07,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1629277200,
        "temp": 16.57,
        "feels_like": 15.93,
        "pressure": 1015,
        "humidity": 63,
        "dew_point": 9.15,
        "uvi": 4.37,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 4.53,
        "wind_deg": 266,
        "wind_gust": 5.42,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      }
    ],
    "daily": [
      {
        "dt": 1629108000,
        "sunrise": 1629084685,
        "sunset": 1629136675,
        "moonrise": 1629119220,
        "moonset": 1629149820,
        "moon_phase": 0.28,
        "temp": {
          "day": 28.41,
          "min": 19.5,
          "max": 28.8,
          "night": 21.61,
          "eve": 26.6,
          "morn": 19.64
        },
        "feels_like": {
          "day": 29.82,
          "night": 21.84,
          "eve": 26.6,
          "morn": 19.75
        },
        "pressure": 1010,
        "humidity": 58,
        "dew_point": 19.35,
        "wind_speed": 5.57,
        "wind_deg": 267,
        "wind_gust": 8.74,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 27,
        "pop": 0.61,
        "rain": 0.63,
        "uvi": 5.46
      },
      {
        "dt": 1629194400,
        "sunrise": 1629171175,
        "sunset": 1629222961,
        "moonrise": 1629210360,
        "moonset": 0,
        "moon_phase": 0.32,
        "temp": {
          "day": 13.35,
          "min": 12.2,
          "max": 19.81,
          "night": 12.2,
          "eve": 16.83,
          "morn": 15.95
        },
        "feels_like": {
          "day": 12.93,
          "night": 11.46,
          "eve": 16.37,
          "morn": 16.06
        },
        "pressure": 1015,
        "humidity": 84,
        "dew_point": 10.52,
        "wind_speed": 9.56,
        "wind_deg": 284,
        "wind_gust": 16.29,
        "weather": [
          {
            "id": 503,
            "main": "Rain",
            "description": "very heavy rain",
            "icon": "10d"
          }
        ],
        "clouds": 100,
        "pop": 1,
        "rain": 25.82,
        "uvi": 4.04
      },
      {
        "dt": 1629280800,
        "sunrise": 1629257665,
        "sunset": 1629309246,
        "moonrise": 1629301080,
        "moonset": 1629238680,
        "moon_phase": 0.35,
        "temp": {
          "day": 17.55,
          "min": 10.98,
          "max": 18.18,
          "night": 14.44,
          "eve": 16.79,
          "morn": 11.97
        },
        "feels_like": {
          "day": 16.9,
          "night": 13.92,
          "eve": 16.4,
          "morn": 11.15
        },
        "pressure": 1015,
        "humidity": 59,
        "dew_point": 9.18,
        "wind_speed": 6.48,
        "wind_deg": 263,
        "wind_gust": 8.59,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 92,
        "pop": 0.23,
        "rain": 0.23,
        "uvi": 5.12
      },
      {
        "dt": 1629367200,
        "sunrise": 1629344155,
        "sunset": 1629395530,
        "moonrise": 1629390960,
        "moonset": 1629328440,
        "moon_phase": 0.39,
        "temp": {
          "day": 19.86,
          "min": 12.17,
          "max": 22.26,
          "night": 16.53,
          "eve": 21.12,
          "morn": 12.41
        },
        "feels_like": {
          "day": 19.55,
          "night": 16.2,
          "eve": 21.01,
          "morn": 11.87
        },
        "pressure": 1015,
        "humidity": 63,
        "dew_point": 12.35,
        "wind_speed": 3.15,
        "wind_deg": 255,
        "wind_gust": 4.98,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 65,
        "pop": 0,
        "uvi": 5.93
      },
      {
        "dt": 1629453600,
        "sunrise": 1629430645,
        "sunset": 1629481812,
        "moonrise": 1629480060,
        "moonset": 1629418920,
        "moon_phase": 0.43,
        "temp": {
          "day": 20.14,
          "min": 15.52,
          "max": 22.42,
          "night": 15.52,
          "eve": 22.42,
          "morn": 16.78
        },
        "feels_like": {
          "day": 19.96,
          "night": 15.45,
          "eve": 22.13,
          "morn": 16.34
        },
        "pressure": 1015,
        "humidity": 67,
        "dew_point": 13.55,
        "wind_speed": 3.86,
        "wind_deg": 281,
        "wind_gust": 5.66,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 92,
        "pop": 0.78,
        "rain": 1.1,
        "uvi": 4.1
      },
      {
        "dt": 1629540000,
        "sunrise": 1629517136,
        "sunset": 1629568094,
        "moonrise": 1629568440,
        "moonset": 1629509940,
        "moon_phase": 0.46,
        "temp": {
          "day": 19.33,
          "min": 12.83,
          "max": 21.19,
          "night": 16.21,
          "eve": 21.19,
          "morn": 12.83
        },
        "feels_like": {
          "day": 19.04,
          "night": 15.84,
          "eve": 20.88,
          "morn": 12.7
        },
        "pressure": 1019,
        "humidity": 66,
        "dew_point": 12.64,
        "wind_speed": 3.61,
        "wind_deg": 293,
        "wind_gust": 6.84,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 13,
        "pop": 0.92,
        "rain": 0.59,
        "uvi": 5
      },
      {
        "dt": 1629626400,
        "sunrise": 1629603626,
        "sunset": 1629654375,
        "moonrise": 1629656280,
        "moonset": 1629601140,
        "moon_phase": 0.5,
        "temp": {
          "day": 20.95,
          "min": 13,
          "max": 23.54,
          "night": 16.12,
          "eve": 22.17,
          "morn": 13
        },
        "feels_like": {
          "day": 20.75,
          "night": 15.8,
          "eve": 22.11,
          "morn": 12.63
        },
        "pressure": 1019,
        "humidity": 63,
        "dew_point": 13.4,
        "wind_speed": 2.66,
        "wind_deg": 69,
        "wind_gust": 3.75,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": 21,
        "pop": 0,
        "uvi": 5
      },
      {
        "dt": 1629712800,
        "sunrise": 1629690116,
        "sunset": 1629740655,
        "moonrise": 1629743880,
        "moonset": 1629692280,
        "moon_phase": 0.53,
        "temp": {
          "day": 16.63,
          "min": 13.92,
          "max": 19.46,
          "night": 15.19,
          "eve": 19.46,
          "morn": 13.92
        },
        "feels_like": {
          "day": 16.41,
          "night": 15.27,
          "eve": 19.52,
          "morn": 13.48
        },
        "pressure": 1015,
        "humidity": 79,
        "dew_point": 12.76,
        "wind_speed": 4.95,
        "wind_deg": 48,
        "wind_gust": 8.16,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 99,
        "pop": 0.99,
        "rain": 1.75,
        "uvi": 5
      }
    ],
    "alerts": [
      {
        "sender_name": "IMGW-PIB Biuro Prognoz Meteorologicznych w Krakowie",
        "event": "Yellow Thunderstorm warning",
        "start": 1629108000,
        "end": 1629140400,
        "description": "Thunderstorms are forecasted acompanied by the precipitation amount 20 mm to 30 mm and wind gusts up to 90 km/h. Hail in places.",
        "tags": [
          "Thunderstorm"
        ]
      }
    ]
  }
}
