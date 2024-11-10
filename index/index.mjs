import {getCookieValue} from "../utils.mjs";

document.addEventListener('DOMContentLoaded', () =>
{
    getGreeting();
});

function getGreeting()
{
    let greeting = document.getElementById('greeting');
    greeting.innerHTML=`Hello, ${getCookieValue('email')}`;
}//do basic stuff, then maybe 'good morning' , 'good afternoon', 'good evening'