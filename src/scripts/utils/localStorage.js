const setElementInLocalStorage = (key, element) => {
    localStorage.setItem(key, JSON.stringify(element));
}

const getElementInLocalStorage = (key) => {
    !localStorage.getItem(key) &&
        setElementInLocalStorage(key, []);
    return JSON.parse(localStorage.getItem(key));
}

export { setElementInLocalStorage, getElementInLocalStorage };
