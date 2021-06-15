import { fetchApi } from './fetchApi.js';

function getGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
        const geo = `${position.coords.latitude.toFixed(2)},${position.coords.longitude.toFixed(
            2,
        )}`;
        fetchApi(geo);
    });
}

export { getGeolocation };
