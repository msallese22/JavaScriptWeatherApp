import {getCookieValue} from "../utils.mjs";

const form = document.getElementById('reg-form');



document.addEventListener('DOMContentLoaded', () =>
{
    getLogin();
});

function getLogin()
{
    form.addEventListener('submit', (event) =>
    {
        console.log("submit");
        event.preventDefault();
        const formData = new FormData(event.target);

        const userInformation =
            {
                email: formData.get('email'),
                zipcode: parseInt(formData.get('zipcode').toString()),
                password: formData.get('password')
            };

        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);

        document.cookie= `userData=${JSON.stringify(userInformation)}; expires=${date.toUTCString()}`;//has the whole thing, not just crumbs. and don't
        document.cookie = `email=${formData.get('email')}`;
        window.location.href='index.html';
    });
}


