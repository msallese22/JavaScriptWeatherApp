export { getCookieValue };
export { updateGUI };
export {logoutBro};

const expiration = 'Thu, 01 Jan 1970 00:00:00 GMT';

function getCookieValue(name)
{
    return document.cookie.split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1];
}

function logoutBro()//or if email cookie
{
    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) =>
    {
        e.preventDefault();
        document.cookie = `email=; expires= ${expiration};`;
        location.href='login.html';
    })
    //function that shows a toast for (you've been logged out, redirects you to homepage with "hello 'no-name'"
}

function updateGUI(darkMode)
{
    if (darkMode === 'dark')
    {
        document.querySelector('html')
            .setAttribute('data-bs-theme', 'dark');//
    }
    else
    {
        document.querySelector('html')
            .setAttribute('data-bs-theme', 'light');//
    }
}