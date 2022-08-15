const KEY = '3e8176791d433276933265775ccb00e5'
const getFormattedWeatherData = async (city, units = 'metric') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=${units}`;

    const data = await fetch(url)
        .then((res) => res.json())
        .then((data) => data);

    console.log(data);
}
export { getFormattedWeatherData };