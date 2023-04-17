export function wordWrap(cadenaOriginal: string, numeroCaracteresLinea: number) {

    if (esLongitudLineaMenorQueCero(numeroCaracteresLinea)) {
        throw new Error('Error longitud de tamaño linea');
    }
    if (esCadenaNula(cadenaOriginal)) {
        return '';
    }

    return partirCadena(cadenaOriginal, numeroCaracteresLinea);

}
function esLongitudLineaMenorQueCero(numeroCaracteresLinea: number) {
    return numeroCaracteresLinea < 0;
}

function esCadenaNula(cadenaOriginal: string) {
    return cadenaOriginal === null;
}

function partirCadenaPorNumeroCaracteres(cadena: string, numeroCaracteresLinea: number) {
    if(cadena.length <= numeroCaracteresLinea) {
        return cadena;
    }
    const posInicialSubCadena = 0;
    let cadenaPartida = cadena.substring(posInicialSubCadena, numeroCaracteresLinea) + '\n';
    cadenaPartida = cadenaPartida.concat(partirCadenaPorNumeroCaracteres(cadena.substring(numeroCaracteresLinea), numeroCaracteresLinea));
    return cadenaPartida;
}

function partirCadena(cadenaOriginal: string, numeroCaracteresLinea: number) {
    const partesCadena: string[] = cadenaOriginal.split(" ");
    return partesCadena.map(function (val, index) {
        return partirCadenaPorNumeroCaracteres(val, numeroCaracteresLinea);
    }).join("\n");
}



