export function wordWrap(cadenaOriginal: string, numeroCaracteresLinea: number) {
    if (cadenaOriginal.length > numeroCaracteresLinea) {
        return partirCadena(cadenaOriginal, numeroCaracteresLinea);
    }
    return cadenaOriginal;
}
function partirCadena(cadenaOriginal: string, numeroCaracteresLinea: number) {
    const longitudCadena = cadenaOriginal.length;
    let cadenaPartida = '';
    let posInicialSubCadena = 0;
    let posFinalSubCadena = posInicialSubCadena + numeroCaracteresLinea;
    while (posFinalSubCadena < longitudCadena) {
        cadenaPartida = cadenaPartida + cadenaOriginal.substring(posInicialSubCadena, posFinalSubCadena) + '\n';
        posInicialSubCadena = posFinalSubCadena;
        posFinalSubCadena = posFinalSubCadena + numeroCaracteresLinea;
    }
    return cadenaPartida + cadenaOriginal.substring(posInicialSubCadena);
}
