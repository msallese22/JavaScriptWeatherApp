import {getCookieValue, updateGUI, logoutBro} from "../utils.mjs";

document.addEventListener('DOMContentLoaded', () =>
{
    updateGUI(getCookieValue('darkmode'));
    logoutBro();
    if(getCookieValue('email') === undefined)
    {
       location.href='login.html';
    }
});
async function findWeatherData()
{
    try
    {
        const userData = JSON.parse(localStorage.getItem('userData'));
        const zipcode = userData.find(user => user.email === getCookieValue('email')).zipcode;
        const results = await fetch(`${url}units=imperial&zip=${zipcode},us&appId=9607101263e6ad088432f64060e2adac`);

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

const url = 'https://api.openweathermap.org/data/2.5/weather?';

document.addEventListener('DOMContentLoaded', async () =>
{
    const data = await findWeatherData();
    addWeatherToPage(data);

    setInterval(async()=>
    {
        const data = await findWeatherData();
        addWeatherToPage(data);
        //console.log('30 seconds!'); this works!
    },30000);
});


function addWeatherToPage(data)
{
    const temp = document.getElementById('temperature');
    const wind = document.getElementById('windspeed');
    const feels = document.getElementById('feels-like');
    const description = document.getElementById('description');
    const location = document.getElementById('location');

    const thermometer = document.getElementById('thermometer');
    const windy = document.getElementById('windy');

    thermometer.classList.remove('hidden');
    windy.classList.remove('hidden');

    document.title = `Weather in ${data.name}`;

    location.textContent = `Your Weather in ${data.name}`;

    temp.textContent = `Temperature: ${Math.round(data.main.temp)} °F`;

    feels.textContent = `Feels Like: ${Math.round(data.main.feels_like)} °F`;

    wind.textContent = `Wind Speed: ${Math.round(data.wind.speed)} MPH`;

    description.textContent= `Current weather is: ${data.weather[0].description}`;
}
