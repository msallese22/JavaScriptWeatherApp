import {getCookieValue, logoutBro, updateGUI} from "../utils.mjs";

document.addEventListener('DOMContentLoaded', () =>
{
    getGreeting();
    updateGUI(getCookieValue('darkmode'));
    logoutBro();
    if(getCookieValue('email') === undefined)
    {
        location.href='login.html';
    }
});

function getGreeting()
{

    let greeting = document.getElementById('greeting');
    let currentBtn =document.getElementById('current-btn');
    let fiveBtn = document.getElementById('five-btn');
    {
        greeting.innerHTML = `Hello, ${getCookieValue('email')}`
        currentBtn.classList.remove('hidden');
        fiveBtn.classList.remove('hidden');
    }
}//do basic stuff, then maybe 'good morning' , 'good afternoon', 'good evening'