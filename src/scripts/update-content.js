const paintWeatherGeolocation = data => `<p class="main__item main__item-time">${data.time}</p>
            <p class="main__item main__item-feels">${data.feelsLike}</p>
            <p class="main__item main__item-cloudy">${data.cloudcover}</p>
            <p class="main__item main__item-wind">${data.wind}</p>
            <p class="main__item main__item-speed">${data.windSpeed}</p>
            <p class="main__item main__item-plessure">${data.plessure}</p>`;

const paintWeatherHistoryItem = data => `<ul class="modal__list">
                <li class="modal__item">${data.geolocation}</li>
                <li class="modal__item">${data.temperature}</li>
                <li class="modal__item">${data.time}</li>
                <li class="modal__item">${data.wind}</li>
                <li class="modal__item">${data.windSpeed}</li>
                <li class="modal__item">${data.cloudcover}</li>
            </ul>`;

const updateWeatherHistory = data => {
    const weatherHistoryTable = document.querySelector('.modal__content');
    weatherHistoryTable.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        weatherHistoryTable.insertAdjacentHTML('afterbegin', paintWeatherHistoryItem(data[i]));
    }
};

const updateWeather = data => {
    const mainContent = document.querySelector('.main__data');
    mainContent.innerHTML = '';
    mainContent.insertAdjacentHTML('afterbegin', paintWeatherGeolocation(data));

    document.querySelector('.main__temperature').innerHTML = `${data.temperature}`;
    document.querySelector('.main__location').innerText = `${data.geolocation}`;
    document.querySelector('.main__today').innerText = `${data.today}`;
    document.querySelector('.main__icon').setAttribute('src', `${data.icon}`);
};

export { updateWeatherHistory, updateWeather };
