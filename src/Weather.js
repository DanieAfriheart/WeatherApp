const KEY = '3e8176791d433276933265775ccb00e5'

const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${units}`;

    const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);
        
        // console.log(data);

    const { weather,
        main: { feels_like, pressure, humidity, temp_max, temp_min, temp },
        wind: { speed },
        sys: { country },
        name
    } = data;


    const { description, icon } = weather[0]

    return {
        description, iconURl: makeIconUrl(icon),
        feels_like, pressure,
        humidity, temp_max,
        temp_min, speed,
        country, name,
        temp
    }
}
export { getFormattedWeatherData };