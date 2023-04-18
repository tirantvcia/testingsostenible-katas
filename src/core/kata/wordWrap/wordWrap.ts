function wordWrapOld(cadenaOriginal: string, numeroCaracteresLinea: number) {

    if (esLongitudLineaMenorQueCero(numeroCaracteresLinea)) {
        throw new Error('Error longitud de tamaño linea');
    }
    if (esCadenaNula(cadenaOriginal)) {
        return '';
    }
    return partirCadena(cadenaOriginal, numeroCaracteresLinea);
}

export function wordWrap(texto: string, numeroCaracteresLinea: number) {
    return wordWrapNoPrimitive(Cadena.crear(texto), NumeroCaracteresLinea.crear(numeroCaracteresLinea)) ;
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

class Cadena {
    private constructor(private readonly texto: string) {
    }
    static crear (texto: string){
        if (texto == null) {
            return new Cadena('');
        }
        return new Cadena(texto); 
    } 
    valor () {
        return this.texto;
    }
    esLongitudCadenaMenorIgualQue(numeroCaracteresLinea: NumeroCaracteresLinea){
        this.valor().length <= numeroCaracteresLinea.valor(); 
    }
}



function wordWrapNoPrimitive(cadenaOriginal: Cadena, numeroCaracteresLinea: NumeroCaracteresLinea) {
   


    return partirCadena(cadenaOriginal.valor(), numeroCaracteresLinea.valor());
}

function esLongitudLineaMenorQueCero(numeroCaracteresLinea: number) {
    return numeroCaracteresLinea < 0;
}

function esCadenaNula(texto: string) {
    return texto === null;
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