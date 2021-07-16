import axios from 'axios';

const API_KEY = 'b7e2a93dd815c83eb49c60c0960d9732';

const baseURL = 'https://api.openweathermap.org/data/2.5/';

export const iconUrl = 'https://openweathermap.org/img/wn/';

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

export const fetchForecast = async (searchTerm, selectedUnit) => {
  const response = await http.get(`${baseURL}forecast`, {
    params: {
      q: searchTerm,
      appid: API_KEY,
      units: selectedUnit,
    },
  });

  return response;
};

export const groupByDay = (list) => {
  const key = 'dt_txt';

  const resultObject = [];

  list.forEach((currentElement) => {
    const day = new Date(currentElement[key]).getDate();

    if (!resultObject[day]) {
      resultObject[day] = [];
    }

    resultObject[day].push(currentElement);
  });

  return resultObject;
};
