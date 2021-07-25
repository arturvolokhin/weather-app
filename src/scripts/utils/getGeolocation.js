import { getCityData } from './fetch';

const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        const geo = `${position.coords.latitude.toFixed(4)},
            ${position.coords.longitude.toFixed(4,)}`;   
        getCityData(geo);
    });
}

export { getGeolocation };
