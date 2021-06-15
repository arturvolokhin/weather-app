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

                const check = weatherHistory.filter(
                    item => item.geolocation === weather.geolocation,
                );

                if (check.length === 0) {
                    weatherHistory.push(weather);
                }

                setElementInLocalStorage('weather', weather);
                setElementInLocalStorage('weatherHistory', weatherHistory);

                document.querySelector('.main__temperature').innerHTML = `${weather.temperature}`;
                document.querySelector('.main__location').innerText = `${weather.geolocation}`;
                document.querySelector('.main__today').innerText = `${weather.today}`;
                document.querySelector('.main__icon').setAttribute('src', `${weather.icon}`);

                updateWeather(weather);
                updateWeatherHistory(weatherHistory);
            });
    } else {
        alert('Вы ввели некорректные данные!');
    }
};

export { fetchApi };
