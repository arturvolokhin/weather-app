import { updateDisplay, updateLocalStorageData, updateWeatherHistory } from "./update-content";

const appInit = (city) => {
    updateDisplay(city);
    updateLocalStorageData(city);
    updateWeatherHistory();
}

export { appInit };