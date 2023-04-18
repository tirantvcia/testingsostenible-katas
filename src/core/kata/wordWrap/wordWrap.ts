function wordWrapOld(cadenaOriginal: string, numeroCaracteresLinea: number) {

    if (esLongitudLineaMenorQueCero(numeroCaracteresLinea)) {
        throw new Error('Error longitud de tamaño linea');
    }
    if (esCadenaNula(cadenaOriginal)) {
        return '';
    }
    return partirCadena(cadenaOriginal, numeroCaracteresLinea);
}

class NumeroCaracteresLinea {
    private constructor(private readonly longitud: number) {
    }
    static crear (longitud: number){
        if (esLongitudLineaMenorQueCero(longitud)) {
            throw new Error('Error longitud de tamaño linea');
        }
        return new NumeroCaracteresLinea(longitud); 
    } 
    valor () {
        return this.longitud;
    }
}

export function wordWrap(cadenaOriginal: string, numeroCaracteresLinea: number) {
    return wordWrapNoPrimitive(cadenaOriginal, NumeroCaracteresLinea.crear(numeroCaracteresLinea)) ;
}

function wordWrapNoPrimitive(cadenaOriginal: string, numeroCaracteresLinea: NumeroCaracteresLinea) {

    if (esCadenaNula(cadenaOriginal)) {
        return '';
    }
    return partirCadena(cadenaOriginal, numeroCaracteresLinea.valor());
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
    const cadenaPartida = cadena.substring(0, numeroCaracteresLinea) + '\n';
    const restoSubCadena = cadena.substring(numeroCaracteresLinea);
    return cadenaPartida.concat(partirCadenaPorNumeroCaracteres(restoSubCadena, numeroCaracteresLinea));
}

function partirCadena(cadenaOriginal: string, numeroCaracteresLinea: number) {
    const partesCadena: string[] = partirCadenaPorEspaciosEnBlanco(cadenaOriginal);
    return partesCadena.map(function (val, index) {
        return partirCadenaPorNumeroCaracteres(val, numeroCaracteresLinea);
    }).join("\n");
}

function partirCadenaPorEspaciosEnBlanco(cadena: string) {
    return cadena.split(" ");
}