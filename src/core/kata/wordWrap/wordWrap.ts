export function wordWrap(cadenaOriginal: string, numeroCaracteresLinea: number) {


    if (cadenaOriginal === null) {
        return '';
    }

    return partirCadenaPorEspaciosBlancos(cadenaOriginal, numeroCaracteresLinea);

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
function partirCadenaPorEspaciosBlancos(cadenaOriginal: string, numeroCaracteresLinea: number) {
    const partesCadena: string[] = cadenaOriginal.split(" ");

    return partesCadena.map(function (val, index) {
        return partirCadena(val, numeroCaracteresLinea);
    }).join("\n");


}

