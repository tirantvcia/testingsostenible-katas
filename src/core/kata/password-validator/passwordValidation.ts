export function passwordValidation(password: string) {

    return validarLongitudMayorIgualSeisCaracteres(password) &&
        validarContenerNumero(password) &&
        validarContenerMayuscula(password) &&
        validarContenerMinuscula(password) &&
        validarGuionBajo(password);
}
function validarLongitudMayorIgualSeisCaracteres(password: string) {
    return password.length >= 6;
}

function validarContenerMayuscula(password: string) {
    const regEx: RegExp = /.*[A-Z].*/;
    return password.match(regEx);
}
function validarContenerNumero(password: string) {
    const regEx: RegExp = /.*[0-9].*/;
    return password.match(regEx);
}
function validarContenerMinuscula(password: string) {
    const regEx: RegExp = /.*[a-z].*/;
    return regEx.test(password);
}
function validarGuionBajo(password: string) {
    const regEx: RegExp = /.*_.*/;
    return password.match(regEx);
}

