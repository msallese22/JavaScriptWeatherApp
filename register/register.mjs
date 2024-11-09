const form = document.getElementById('reg-form');



document.addEventListener('DOMContentLoaded', () =>
{
    getLogin();
});

function getLogin()
{
    form.addEventListener('submit', (e) =>
    {
        e.preventDefault();
        const formData = new FormData(e.target);

        document.cookie= `userData=${JSON.stringify(formData)}`;//has the whole thing, not just crumbs. and don't
        document.cookie = `email=${formData.get('email')}`

        location.href='../index/index.html';
    });
}

