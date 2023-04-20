export function wordWrap(texto: string, numeroCaracteresLinea: number) {
  return wordWrapNoPrimitive(
    Cadena.crear(texto),
    NumeroCaracteresLinea.crear(numeroCaracteresLinea)
  );
}

class NumeroCaracteresLinea {
  private constructor(private readonly longitud: number) {}
  static esLongitudLineaMenorQueCero(longitud: number) {
    return longitud < 0;
  }

  static crear(longitud: number) {
    if (NumeroCaracteresLinea.esLongitudLineaMenorQueCero(longitud)) {
      throw new Error("Error longitud de tamaño linea");
    }
    return new NumeroCaracteresLinea(longitud);
  }

  valor() {
    return this.longitud;
  }
}

class Cadena {
  private constructor(private readonly texto: string) {}
  static crear(texto: string) {
    if (texto == null) {
      return new Cadena("");
    }
    return new Cadena(texto);
  }
  valor() {
    return this.texto;
  }
  esLongitudCadenaMenorIgualQue(numeroCaracteresLinea: NumeroCaracteresLinea) {
    return this.valor().length <= numeroCaracteresLinea.valor();
  }
  partirCadenaPorEspaciosEnBlanco() {
    return this.valor().split(" ");
  }
  partirPorIndices(posInicial: number, posFinal: number) {
    return this.valor().substring(posInicial, posFinal) + "\n";
  }
  partirDesdeIndice(posInicial: number) {
    return this.valor().substring(posInicial);
  }

  partirCadenaPorNumeroCaracteres(
    numeroCaracteresLinea: NumeroCaracteresLinea
  ) {
    if (this.esLongitudCadenaMenorIgualQue(numeroCaracteresLinea)) {
      return this.valor();
    }
    const cadenaPartida = this.partirPorIndices(
      0,
      numeroCaracteresLinea.valor()
    );
    const restoSubCadena = Cadena.crear(
      this.partirDesdeIndice(numeroCaracteresLinea.valor())
    );
    return cadenaPartida.concat(
      restoSubCadena.partirCadenaPorNumeroCaracteres(numeroCaracteresLinea)
    );
  }
}

function wordWrapNoPrimitive(
  cadenaOriginal: Cadena,
  numeroCaracteresLinea: NumeroCaracteresLinea
) {
  return partirCadena(cadenaOriginal, numeroCaracteresLinea);
}

function partirCadena(
  cadenaOriginal: Cadena,
  numeroCaracteresLinea: NumeroCaracteresLinea
) {
  const partesCadena: string[] =
    cadenaOriginal.partirCadenaPorEspaciosEnBlanco();
  return partesCadena
    .map(function (val, index) {
      const subCadena = Cadena.crear(val);
      return subCadena.partirCadenaPorNumeroCaracteres(numeroCaracteresLinea);
    })
    .join("\n");
}
