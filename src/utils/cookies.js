export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function setCookie(cname, value, expire) {
    const now = new Date();
    now.setTime(now.getTime() + (expire * 60 * 60 * 1000));
    let expires = "expires="+ now.toUTCString();
    document.cookie = cname + "=" + value + ";" + expires + ";path=/";
}