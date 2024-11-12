const expiration = 'Thu. 01 Jan 1970 00:00:00 GMT';

const form = document.getElementById('form');
document.addEventListener('DOMContentLoaded', () =>
{

    console.log('loaded');
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
        document.cookie= `userData=${JSON.stringify(formData)}`;//has the whole thing, not just crumbs. and don't

        window.location.href='index.html';

        console.log('login');

    });
}
function loadCookies()
{

}