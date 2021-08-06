import fetch from 'node-fetch';

const fetchForecast = async (url: string) => {
  const response = await fetch(url);

  if (!response.status) {
    return Promise.reject(response);
  }

  const forecast = await response.json();
  return {
    message: 'ok',
    status: response.status,
    forecastData: forecast,
  };
};

export default fetchForecast;
