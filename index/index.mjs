import {getCookieValue} from "../utils.mjs";

document.addEventListener('DOMContentLoaded', () =>
{
    getGreeting();
});

function getGreeting()
{

    let greeting = document.getElementById('greeting');
    let currentBtn =document.getElementById('current-btn');
    let fiveBtn = document.getElementById('five-btn');
    if(getCookieValue('email') === undefined)
    {
        greeting.innerHTML = 'Hello! Please sign in to view your weather data!'
        currentBtn.classList.add('hidden');
        fiveBtn.classList.add('hidden');
    }
    else
    {
        greeting.innerHTML = `Hello, ${getCookieValue('email')}`
        currentBtn.classList.remove('hidden');
        fiveBtn.classList.remove('hidden');
    }
}//do basic stuff, then maybe 'good morning' , 'good afternoon', 'good evening'