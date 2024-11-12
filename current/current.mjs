import {getCookieValue} from "../utils.mjs";

const url = "https://openweathermap.org/current?zip";

document.addEventListener('DOMContentLoaded', async () =>
{
    const data = await findWeatherData();
    addWeatherToPage(data);

})



async function findWeatherData()
{
    try
    {
        const zipcode = JSON.parse(getCookieValue('userData')).zipcode;
        const results = await fetch(`${url}=${zipcode}&appId=9607101263e6ad088432f64060e2adac`);

        if(results.ok===false)
        {
            throw new Error(results.status.Text);
        }

        const data = await results.json();
        console.log(data);
        return data;
    }
    catch(err)
    {
        console.log(err);
        throw new Error(err.message);
    }
}


function addWeatherToPage(data)
{
    const temp = document.getElementById('temperature');
    const wind = document.getElementById('windspeed');
    const feels = document.getElementById('feels-like');
    const description = document.getElementById('description');

    const thermometer = document.getElementById('thermometer');
    const windy = document.getElementById('windy');

    thermometer.classList.remove('hidden');
    windy.classList.remove('hidden');

    document.title = `Weather in ${data.name}`;
    temp.textContent = `Temperature: ${data.current_weather.temperature}°F`;

    feels.textContent = `Feels Like: ${data.current_weather.realfeel}°F`;

    wind.textContent = `Wind Speed ${data.current_weather.windspeed} MPH`;

    description.textContent= `Current weather is: ${data.current_weather.description}`



//setinterval30seconds :)
}