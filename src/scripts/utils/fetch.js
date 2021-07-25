import { appInit } from '../appInit.js';

const getCityData = city => {
    if (city.match(/[a-zA-Z0-9]/)) {
        fetch(`http://api.weatherstack.com/current?access_key=22bd7d9900887631bf79a1626d92c1a2&query=${city}`)
            .then(cityData => cityData.json())
            .then(cityData => appInit(cityData))
            .catch(alert);
    } else alert('Вы ввели не корректное значение');
};

export { getCityData };
