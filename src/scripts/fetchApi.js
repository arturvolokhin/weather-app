import { Weather } from './Weather.js';
import { setElementInLocalStorage, getElementInLocalStorage } from './localStorageApi.js';
import { updateWeather, updateWeatherHistory } from './update-content.js';

const fetchApi = city => {
    if (city.match(/[a-zA-Z0-9]/)) {
        fetch(
            `http://api.weatherstack.com/current?access_key=92c98517a0c5f48d90bff7b0aad64226&query=${city}`,
        )
            .then(data => data.json())
            .then(data => {
                const weather = new Weather(data);
                const weatherHistory = getElementInLocalStorage('weatherHistory');

                weatherHistory.forEach(item => {
                    if (item.geolocation === weather.geolocation) {
                        const index = weatherHistory.indexOf(item, 0)
                        weatherHistory.splice(`${index}`, 1);
                    } 
                })

                weatherHistory.push(weather); 

                setElementInLocalStorage('weather', weather);
                setElementInLocalStorage('weatherHistory', weatherHistory);
                updateWeather(weather);
                updateWeatherHistory(weatherHistory);
            });
    } else {
        alert('Вы ввели некорректные данные!');
    }
};

export { fetchApi };
