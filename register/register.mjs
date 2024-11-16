import {getCookieValue, logoutBro, updateGUI} from "../utils.mjs";

const form = document.getElementById('reg-form');



document.addEventListener('DOMContentLoaded', () =>
{
    getLogin();
    updateGUI(getCookieValue('darkmode'));
    logoutBro();
});

function getLogin()
{
    let usedEmail = false;

    form.addEventListener('submit', (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const userData = localStorage.getItem('userData');
        if(userData !== null)
        {
            const usersArr = JSON.parse(userData);
            usersArr.forEach(user =>
            {
                if(user.email === formData.get('email'))
                {
                    usedEmail = true;
                    const message = document.createElement('p');
                    message.textContent = "Oopsies! Your  email is already being used for an account. Please login or use a different email."
                    form.appendChild(message);
                }
                else
                {
                    usedEmail = false;
                }
            });
        }
        if(!usedEmail)
        {
            let userInformation = [];
            userInformation.push(
                {
                    email: formData.get('email'),
                    zipcode: parseInt(formData.get('zipcode').toString()),
                    password: formData.get('password')
                });


            const date = new Date();
            date.setFullYear(date.getFullYear() + 1);

            localStorage.setItem('userData', JSON.stringify(userInformation));//has the whole thing, not just crumbs. and don't
            document.cookie = `email=${formData.get('email')}`;
            window.location.href = 'index.html';
        }
    });
}


