export { getCookieValue };

function getCookieValue(name)
{
    return document.cookie.split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1];
}

function logout()//or if email cookie
{
    //function that shows a toast for (you've been logged out, redirects you to homepage with "hello 'no-name'"
}