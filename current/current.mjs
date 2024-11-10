const url = "https://api.open-meteo.com/v1/forecast?latitude=40.79&longitude=-77.86&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&current_weather=true&timezone=EST"


document.addEventListener('DOMContentLoaded', async () =>
{
    const data = await findWeatherData();
    addWeatherToPage(data);
})

async function findWeatherData()
{
    try
    {
        const results = await fetch(url);

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
    let temp = document.getElementById('temperature');
    let wind = document.getElementById('windspeed');

    const thermometer = document.getElementById('thermometer');
    const windy = document.getElementById('windy');

    thermometer.classList.remove('hidden');
    windy.classList.remove('hidden');

    document.title = `Weather in ${data.name}`;
    tempP.textContent = `Temperature ${data.current_weather.temperature}°F`;
    temp.appendChild(thermometer);
    temp.appendChild(tempP);
    windP.textContent = `Wind Speed ${data.current_weather.windspeed} MPH`;
    wind.appendChild(windy);
    wind.appendChild(windP);
}