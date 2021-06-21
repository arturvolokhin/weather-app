import { getCityData } from './fetchApi.js';
import { getGeolocation } from './geolocationApi.js';
import '../sass/main.sass';
import '../fonts/stylesheet.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

getGeolocation();

const searchCity = () => {
    const searchCityField = document.querySelector('.search__field');
    const enteredCity = searchCityField.value;
    searchCityField.value = '';
    getCityData(enteredCity);
}

const toggleModal = () => {
    document.querySelector('.modal').classList.toggle('visible');
}


document.querySelector('.main').addEventListener('click', e => {
    if (e.target.classList.contains('button-geolocation')) {
        getGeolocation();
    }

    if (e.target.classList.contains('button-history')) {
        toggleModal();
    }
});

document.querySelector('.modal').addEventListener('click', e => {
    if (e.target.classList.contains('modal__delete')) {
        document.querySelector('.modal__content').innerText = '';
        localStorage.removeItem('historyList');
    }

    if (e.target.classList.contains('modal__close')) {
        toggleModal();
    }
});

document.querySelector('.search__field').addEventListener('keydown', e => {
    if (e.code === 'Enter') {
        searchCity();
    }
});

document.querySelector('.button-search').addEventListener('click', () => {
    searchCity();
});
