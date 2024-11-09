const expiration = 'Thu. 01 Jan 1970 00:00:00 GMT';

const form = document.getElementById('form');
document.addEventListener('DOMContentLoaded', () =>
{

    getLogin()
    loadCookies();


});


function getLogin()
{
    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        const formData = new FormData(e.target);
        document.cookie= `email=${formData.get('email')}`;

    });
}
function loadCookies()
{

}