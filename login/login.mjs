import {getCookieValue, logoutBro, updateGUI} from "../utils.mjs";

const form = document.getElementById('login-form');
document.addEventListener('DOMContentLoaded', () =>
{
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
        const userData = JSON.parse(localStorage.getItem('userData'));
        if(userData === null)
        {
            const message = document.createElement('p');
            message.textContent = "There is no account with this email address! Please go make an account to proceed."
            form.appendChild(message);
        }
        else
        {
            const currentUser = userData.find(user => user.email === formData.get('email'));

            if (currentUser)
            {
                if (currentUser.password === formData.get('password'))
                {
                    document.cookie = `email=${formData.get('email')}`;
                    document.cookie = `userData=${JSON.stringify(formData)}`;//has the whole thing, not just crumbs. and don't
                    window.location.href = 'index.html';
                }
                else
                {
                    const message = document.createElement('p');
                    message.textContent = "Oopsies! Your credentials aren't right! Double check your email and password, or make an account to continue."
                    form.appendChild(message);
                }
            }
            else
            {
                const message = document.createElement('p');
                message.textContent = "There is no account with this email address! Please go make an account to proceed."
                form.appendChild(message);
            }
        }
    });
}

//yikes forever.


