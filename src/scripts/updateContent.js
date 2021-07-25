import { getWeatherData } from './weatherData.js';
import { setElementInLocalStorage, getElementInLocalStorage } from './utils/localStorage.js';

const paintDataEnteredCity = data => `<p class="main__item main__item-time">${data.time}</p>
            <p class="main__item main__item-feels">${data.feelsLike}</p>
            <p class="main__item main__item-cloudy">${data.cloudcover}</p>
            <p class="main__item main__item-wind">${data.wind}</p>
            <p class="main__item main__item-speed">${data.windSpeed}</p>
            <p class="main__item main__item-plessure">${data.plessure}</p>`;

const paintDataHistoryItem = data => `<ul class="modal__list">
            <li class="modal__item">${data.geolocation}</li>
            <li class="modal__item">${data.temperature}</li>
            <li class="modal__item">${data.time}</li>
            <li class="modal__item">${data.wind}</li>
            <li class="modal__item">${data.windSpeed}</li>
            <li class="modal__item">${data.cloudcover}</li>
            </ul>`;

                

const updateLocalStorageData = (data) => {
    const enteredCity = getWeatherData(data);
    const historyList = getElementInLocalStorage('historyList');

    historyList.forEach(city => {
        if (city.geolocation ===  enteredCity.geolocation) {
            const index = historyList.indexOf(city, 0)
            historyList.splice(`${index}`, 1);
        } 
    })

    historyList.push(enteredCity); 
    setElementInLocalStorage('enteredCity', enteredCity);
    setElementInLocalStorage('historyList', historyList);
}


const updateWeatherHistory = () => {
    const historyList =  getElementInLocalStorage('historyList');
    const historyModal = document.querySelector('.modal__content');
    historyModal.innerHTML = '';

    historyList.forEach(city => {
        historyModal.insertAdjacentHTML('afterbegin',
            paintDataHistoryItem(city));
    })
};


const updateDisplay = (data) => {
    const mainContent = document.querySelector('.main__data');
    const enteredCity = getWeatherData(data);
    mainContent.innerHTML = '';
    mainContent.insertAdjacentHTML('afterbegin', paintDataEnteredCity(enteredCity));

    document.querySelector('.main__temperature').innerHTML = `${enteredCity.temperature}`;
    document.querySelector('.main__location').innerText = `${enteredCity.geolocation}`;
    document.querySelector('.main__today').innerText = `${enteredCity.today}`;
    document.querySelector('.main__icon').setAttribute('src', `${enteredCity.icon}`);
};

export { updateLocalStorageData, updateWeatherHistory, updateDisplay };
