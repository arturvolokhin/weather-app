const getWeatherData = (data) => ({
    geolocation: `${data.location.country}, ${data.location.region}, ${data.location.name}`,
    temperature: `${data.current.temperature}&#8451;`,
    time: `Time: ${data.location.localtime.slice(11, 16)}`,
    feelsLike: `Feels like: ${data.current.feelslike}`,
    today: `Today is ${data.current.weather_descriptions}`,
    wind: `Wind: ${data.current.wind_dir}`,
    windSpeed: `Speed: ${data.current.wind_speed}`,
    plessure: `Plessure: ${data.current.pressure}`,
    cloudcover: `Cloudcover: ${data.current.cloudcover}`,
    icon: `${data.current.weather_icons}`,
});

export { getWeatherData };
