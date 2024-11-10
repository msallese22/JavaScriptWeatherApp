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

        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);

        document.cookie= `userData=${JSON.stringify(formData)}; expires=${date.toUTCString()}`;//has the whole thing, not just crumbs. and don't
        document.cookie = `email=${formData.get('email')}`

        document.location.href='../index/index.html';
    });
}


