import { appInit } from './appInit.js';

const getCityData = city => {
    if (city.match(/[a-zA-Z0-9]/)) {
        fetch(`http://api.weatherstack.com/current?access_key=ebbaa9ab25eb3adf59decd9306482a08&query=${city}`)
            .then(cityData => cityData.json())
            .then(cityData => appInit(cityData))
            .catch(alert);
    } 
};

export { getCityData };
