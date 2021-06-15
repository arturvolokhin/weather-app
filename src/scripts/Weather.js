class Weather {
    constructor(data) {
        this.geolocation = `${data.location.country}, ${data.location.region}, ${data.location.name}`;
        this.temperature = `${data.current.temperature}&#8451;`;
        this.time = `Time: ${data.location.localtime.slice(11, 16)}`;
        this.feelsLike = `Feels like: ${data.current.feelslike}`;
        this.today = `Today is ${data.current.weather_descriptions}`;
        this.wind = `Wind: ${data.current.wind_dir}`;
        this.windSpeed = `Speed: ${data.current.wind_speed}`;
        this.plessure = `Plessure: ${data.current.pressure}`;
        this.cloudcover = `Cloudcover: ${data.current.cloudcover}`;
        this.icon = `${data.current.weather_icons}`;
    }
}

export { Weather };
