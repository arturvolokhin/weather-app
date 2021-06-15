function setElementInLocalStorage(key, element) {
    return localStorage.setItem(key, JSON.stringify(element));
}

function getElementInLocalStorage(key) {
    if (!localStorage.weatherHistory) {
        const weatherHistory = [];
        setElementInLocalStorage('weatherHistory', weatherHistory);
        return weatherHistory;
    }
    return JSON.parse(localStorage.getItem(key));
}

export { setElementInLocalStorage, getElementInLocalStorage };
