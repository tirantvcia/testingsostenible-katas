function wordWrapOld(cadenaOriginal: string, numeroCaracteresLinea: number) {

    if (esLongitudLineaMenorQueCero(numeroCaracteresLinea)) {
        throw new Error('Error longitud de tamaño linea');
    }
    if (esCadenaNula(cadenaOriginal)) {
        return '';
    }
    return partirCadenaOld(cadenaOriginal, numeroCaracteresLinea);
}

function partirCadenaOld(cadenaOriginal: string, numeroCaracteresLinea: number) {
}

function esLongitudLineaMenorQueCero(numeroCaracteresLinea: number) {
    return numeroCaracteresLinea < 0;
}

function esCadenaNula(texto: string) {
    return texto === null;
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
        return this.valor().length <= numeroCaracteresLinea.valor(); 
    }
    partirCadenaPorEspaciosEnBlanco() {
        return this.valor().split(" ");
    }
    partirPorIndices(posInicial: number, posFinal:number) {
        return this.valor().substring(posInicial, posFinal);
    }
    partirDesdeIndice(posInicial: number) {
        return this.valor().substring(posInicial);
    }
}

function wordWrapNoPrimitive(cadenaOriginal: Cadena, numeroCaracteresLinea: NumeroCaracteresLinea) {
       return partirCadena(cadenaOriginal, numeroCaracteresLinea);
}



function partirCadena(cadenaOriginal: Cadena, numeroCaracteresLinea: NumeroCaracteresLinea) {
    const partesCadena: string[] = cadenaOriginal.partirCadenaPorEspaciosEnBlanco();
    return partesCadena.map(function (val, index) {
        const subCadena = Cadena.crear(val);
        return partirCadenaPorNumeroCaracteres(subCadena, numeroCaracteresLinea);
    }).join("\n");
}



function partirCadenaPorNumeroCaracteres(cadena: Cadena, numeroCaracteresLinea: NumeroCaracteresLinea) {
    if(cadena.esLongitudCadenaMenorIgualQue(numeroCaracteresLinea)) {
        return cadena.valor();
    }
    const cadenaPartida = cadena.partirPorIndices(0, numeroCaracteresLinea.valor()) + '\n';
    const restoSubCadena = Cadena.crear(cadena.partirDesdeIndice(numeroCaracteresLinea.valor()));
    return cadenaPartida.concat(partirCadenaPorNumeroCaracteres(restoSubCadena, numeroCaracteresLinea));
}

