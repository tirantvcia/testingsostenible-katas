export function invoiceCsvFilter(invoiceLines: string[]) {

    if (invoiceLines.length === 0 || invoiceLines.length === 1) {
        return [];
    }

    let validInvoiceLines = filterIncorrectLines(invoiceLines);
    validInvoiceLines = filterRepeatedLines(validInvoiceLines);

    return validInvoiceLines;


}

function filterIncorrectLines(lines: string[]) {
    let validInvoiceLines = [lines[0]];

    lines.splice(0, 1);
    lines.filter(l => isInvoiceLineValid(l)).forEach(l => validInvoiceLines.push(l));
    return validInvoiceLines;
}

function isInvoiceLineValid(invoiceLine: string) {
    return !isNotValidInvoiceLine(invoiceLine);
}

function filterRepeatedLines(lines: string[]) {
    const header = lines[0];
    let map = new Map();
    lines.splice(0, 1);
    lines.forEach(l => {
        let splitedElms = l.split(",");
        const idInvoice = splitedElms[0];
        if (map.has(idInvoice)) {
            map.get(idInvoice).push(l);
        } else {
            map.set(idInvoice, [l]);
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

function isNotValidInvoiceLine(invoiceLine: string) {
    const invoiceSplited = invoiceLine.split(",");
    const ivaField = invoiceSplited[4];
    const igicField = invoiceSplited[5];
    const netoField = invoiceSplited[3];
    const brutoField = invoiceSplited[2];
    const cifField = invoiceSplited[7];
    const nifField = invoiceSplited[8];

    return (isNotValidLineIfBothVATAndIGICValuesAreIndicated(ivaField, igicField) ||
        (!isNumericTaxValue(ivaField) || !isNumericTaxValue(igicField)) ||
        (ivaField.length > 0 && !isNetValueCorrectInRelationToGross(ivaField, netoField, brutoField)) ||
        (igicField.length > 0 && !isNetValueCorrectInRelationToGross(igicField, netoField, brutoField)) ||
        isNotValidIfBothNIFAndCIFValuesAreIndicated(cifField, nifField));
}



function isNotValidLineIfBothVATAndIGICValuesAreIndicated(iva: string, igic: string) {
    return isBothArgumentsIndicated(iva, igic);
}
function isBothArgumentsIndicated(arg1: string, arg2: string) {
    return arg1.length > 0 && arg2.length > 0;
}

function isNotValidIfBothNIFAndCIFValuesAreIndicated(cif: string, nif: string) {
    return isBothArgumentsIndicated(cif, nif);
}
function isNetValueCorrectInRelationToGross(tax: string, netValue: string, grossValue: string) {
    if (tax.length > 0 && netValue.length > 0 && grossValue.length > 0) {
        const taxNumber = Number(tax);
        const netValueNumber = Number(netValue);
        const grossValueNumber = Number(grossValue);
        return (netValueNumber == grossValueNumber - (grossValueNumber * (taxNumber / 100)));
    } else {
        return false;
    }
}


function isNumericTaxValue(tax: string): boolean {
    if (tax.length == 0) {
        return true;
    }
    const parsedToken = Number(tax);
    return isNaN(parsedToken) ? false : true;
}

