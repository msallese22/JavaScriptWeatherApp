export { getCookieValue };

function getCookieValue(name)
{
    return document.cookie.split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1];
}