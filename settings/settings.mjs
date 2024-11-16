import {getCookieValue, logoutBro, updateGUI} from "../utils.mjs";

const form = document.getElementById('settings-form');

document.addEventListener('DOMContentLoaded', () =>
{
    submitSettings();
    updateGUI(getCookieValue('darkmode'));
    logoutBro();
    if(getCookieValue('email') === undefined)
    {
        location.href='login.html';
    }
});

function submitSettings()
{
    form.addEventListener('submit', (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        document.cookie = `darkmode = ${formData.get('dark-mode')}`;
        updateGUI(formData.get('dark-mode'));
        const userData = JSON.parse(localStorage.getItem('userData'));
        const currentUser = userData.find(user => user.email === getCookieValue('email'));
        currentUser.zipcode = formData.get('change-zip');

        localStorage.setItem('userData', JSON.stringify(userData));
    });
}

