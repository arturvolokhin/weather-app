import { updateDisplay, updateLocalStorageData, updateWeatherHistory } from "./updateContent";

const appInit = (city) => {
    updateDisplay(city);
    updateLocalStorageData(city);
    updateWeatherHistory();
}

export { appInit };