import axios from 'axios';

const API_KEY = 'b7e2a93dd815c83eb49c60c0960d9732';

const baseURL = 'https://api.openweathermap.org/data/2.5/';

const http = axios.create({
  baseURL,
});

export const fetchWeather = (searchTerm, selectedUnit) => {
  return http.get(`${baseURL}weather`, {
    params: {
      q: searchTerm,
      appid: API_KEY,
      units: selectedUnit,
    },
  });
};

export const fetchForecast = (searchTerm, selectedUnit) => {
  return http.get(`${baseURL}forecast`, {
    params: {
      q: searchTerm,
      appid: API_KEY,
      units: selectedUnit,
    },
  });
};
