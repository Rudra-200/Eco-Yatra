import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
});

const pollutionApi = axios.create({
  baseURL: 'https://api.waqi.info/feed',
  params: {
    token: import.meta.env.VITE_AQICN_TOKEN,
  },
});

export const getWeatherData = async (lat: number, lon: number) => {
  const response = await weatherApi.get('/weather', {
    params: { lat, lon, units: 'metric' },
  });
  return response.data;
};

export const getPollutionData = async (lat: number, lon: number) => {
  const response = await pollutionApi.get(`/geo:${lat};${lon}/`);
  return response.data;
};