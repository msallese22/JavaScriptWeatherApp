import {getCookieValue, logoutBro, updateGUI} from "../utils.mjs";

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

const url = 'https://api.openweathermap.org/data/2.5/forecast?';

document.addEventListener('DOMContentLoaded', async () =>
{
    const data = await findWeatherData();
    const location = document.getElementById('location');
    document.title = `Weather in ${data.city.name}`;
    location.textContent = `Your Weather in ${data.city.name}`;

    for(let i= 0; i < 5; i++)
    {
        addWeatherToPage(data.list[i],i);
    }
    setInterval(async()=>
    {

        const data = await findWeatherData();
        for(let i= 0; i < 5; i++)
        {
            addWeatherToPage(data.list[i], i);
        }
        //console.log('30 seconds!'); //this works!
    },30000);
});



function addWeatherToPage(data, index)
{
    const temp = document.getElementById(`temperature${index+1}`);
    const wind = document.getElementById(`windspeed${index+1}`);
    const feels = document.getElementById(`feels-like${index+1}`);
    const description = document.getElementById(`description${index+1}`);

    const thermometer = document.getElementById(`thermometer${index+1}`);
    const windy = document.getElementById(`windy${index+1}`);

    thermometer.classList.remove('hidden');
    windy.classList.remove('hidden');


    temp.textContent = `Temperature: ${Math.round(data.main.temp)} °F`;

    feels.textContent = `Feels Like: ${Math.round(data.main.feels_like)} °F`;

    wind.textContent = `Wind Speed: ${Math.round(data.wind.speed)} MPH`;

    description.textContent= `Weather type is: ${data.weather[0].description}`;

    const title = document.getElementById(`title${index+1}`);
    title.textContent = `Day ${index+1}`;
}
