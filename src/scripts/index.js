import { getGeolocation } from './geolocationApi.js';
import { fetchApi } from './fetchApi.js';

getGeolocation();

document.querySelector('.main').addEventListener('click', e => {
    if (e.target.classList.contains('button-geolocation')) {
        getGeolocation();
    }

    if (e.target.classList.contains('button-history')) {
        document.querySelector('.modal').classList.toggle('visible');
    }
});

document.querySelector('.modal').addEventListener('click', e => {
    if (e.target.classList.contains('modal__delete')) {
        document.querySelector('.modal__content').innerText = '';
        localStorage.removeItem('weatherHistory');
    }

    if (e.target.classList.contains('modal__close')) {
        document.querySelector('.modal').classList.toggle('visible');
    }
});

document.querySelector('.header__search').addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        const citySearchInput = document.querySelector('.header__search');
        const city = citySearchInput.value;
        fetchApi(city);
    }
});

document.querySelector('.button-search').addEventListener('click', () => {
    const citySearchInput = document.querySelector('.header__search');
    const city = citySearchInput.value;
    citySearchInput.value = '';
    fetchApi(city);
});
