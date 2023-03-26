export function invoiceCsvFilter(invoiceLines: string[]) {

    if (invoiceLines.length === 0 || invoiceLines.length === 1) {
        return [];
    }

    var lineasCorrectas = filtrarLineasIncorrectas(invoiceLines);
    lineasCorrectas = filtrarLineasRepetidas(lineasCorrectas);

    return lineasCorrectas;


}

function filtrarLineasIncorrectas(lines: string[]) {
    var facturaValida = [lines[0]];

    lines.splice(0, 1);
    lines.filter(l => isLineaFacturaValida(l)).forEach(l => facturaValida.push(l));
    return facturaValida;
}

function isLineaFacturaValida(lineaFactura: string) {
    return !isNotValidaLineaFactura(lineaFactura);
}

function filtrarLineasRepetidas(lines: string[]) {
    const header = lines[0];
    let map = new Map();
    lines.splice(0, 1);
    lines.forEach(l => {
        var splitedElms = l.split(",");
        const idFactura = splitedElms[0];
        if (map.has(idFactura)) {
            map.get(idFactura).push(l);
        } else {
            map.set(idFactura, [l]);
        }

    });
    let filteredLines = [header.toString()];
    for (let lines of map.values()) {
        if (lines.length == 1) {
            filteredLines.push(lines.toString());
        }
    }

    return filteredLines;
}

function isNotValidaLineaFactura(lineaFactura: string) {
    const invoiceSplited = lineaFactura.split(",");
    const ivaField = invoiceSplited[4];
    const igicField = invoiceSplited[5];
    const netoField = invoiceSplited[3];
    const brutoField = invoiceSplited[2];
    const cifField = invoiceSplited[7];
    const nifField = invoiceSplited[8];

    return (isNotValidSiAmbosValoresIVAIGICIndicados(ivaField, igicField) ||
        (!isValorImpuestoNumerico(ivaField) || !isValorImpuestoNumerico(igicField)) ||
        (ivaField.length > 0 && !isValorNetoCorrectoRespectoBruto(ivaField, netoField, brutoField)) ||
        (igicField.length > 0 && !isValorNetoCorrectoRespectoBruto(igicField, netoField, brutoField)) ||
        isNotValidSiAmbosValoresNifCifIndicados(cifField, nifField));
}



function isNotValidSiAmbosValoresIVAIGICIndicados(iva: string, igic: string) {
    return isArg1Arg2Informados(iva, igic);
}
function isArg1Arg2Informados(cadena1: string, cadena2: string) {
    return cadena1.length > 0 && cadena2.length > 0;
}

function isNotValidSiAmbosValoresNifCifIndicados(cif: string, nif: string) {
    return isArg1Arg2Informados(cif, nif);
}
function isValorNetoCorrectoRespectoBruto(impuesto: string, neto: string, bruto: string) {
    if (impuesto.length > 0 && neto.length > 0 && bruto.length > 0) {
        var taxN = Number(impuesto);
        var netoN = Number(neto);
        var brutoN = Number(bruto);
        return (netoN == brutoN - (brutoN * (taxN / 100)));
    } else {
        return false;
    }
}


function isValorImpuestoNumerico(tax: string): boolean {
    if (tax.length == 0) {
        return true;
    }
    const parsedToken = Number(tax);
    return isNaN(parsedToken) ? false : true;
}

