import {getCookieValue, logoutBro, updateGUI} from "../utils.mjs";

const form = document.getElementById('login-form');
document.addEventListener('DOMContentLoaded', () =>
{
    console.log(getCookieValue('darkmode'));
    getLogin();
    updateGUI(getCookieValue('darkmode'));
    logoutBro();
});


function getLogin()
{
    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = localStorage.getItem('userData');
        console.log(formData);
        console.log(userData);
        if(userData.email === formData.get('email') && userData.password === formData.get('password'))
        {
            document.cookie= `email=${formData.get('email')}`;
            document.cookie= `userData=${JSON.stringify(formData)}`;//has the whole thing, not just crumbs. and don't
            window.location.href='index.html';
        }
        else
        {
           const message = document.createElement('p');
           message.textContent = "Oopsies! Your credentials aren't right! Double check your email and password, or make an account to continue."
            form.appendChild(message);
        }
    });
}
//doesn't get the data out of the form, but it gets it from the saved  userData and lfie is hard. can't do login validation checks because of it.
//yikes forever.


