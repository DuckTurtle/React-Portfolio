const capFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const checkEmail = (email) => {
    var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regex.test(String(email).toLowerCase());
}

moodule.exports = [capFirst, checkEmail]