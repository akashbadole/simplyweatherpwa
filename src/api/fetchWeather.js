import axios from 'axios'
// import React from 'react'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '29a0e03d354cfa5dc9338a141fd981e8';
// const API_KEY = 'f33a484cf794d08d0148764789aaba32';

 const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

export default fetchWeather;