export function invoiceCsvFilter(invoiceLines: ReadonlyArray<string>) {
    if (invoiceLines.length === 0 || invoiceLines.length === 1) {
        return [];
    }
    let validInvoiceLines = filterIncorrectLines(invoiceLines);
    validInvoiceLines = filterRepeatedLines(validInvoiceLines);
    return validInvoiceLines;
}

function filterIncorrectLines(readonlyInvoiceLines: ReadonlyArray<string>) {
    let validInvoiceLines = [readonlyInvoiceLines[0]];
    let copyInvoiceLines = [...readonlyInvoiceLines]; // create a copy of the readonly array
    copyInvoiceLines.splice(0, 1);
    copyInvoiceLines.filter(l => isInvoiceLineValid(l)).forEach(l => validInvoiceLines.push(l));
    return validInvoiceLines;
}

function isInvoiceLineValid(invoiceLine: string) {
    return !isNotValidInvoiceLine(invoiceLine);
}

function filterRepeatedLines(lines: string[]) {
    const header = lines[0];
    let map = new Map();
    lines.splice(0, 1);
    let filteredLines = [header.toString()];
    const idWithMoreThanOneAppereance = getIdInvoiceWithMoreThanOneAppeareance(lines);
    const linesNotRepeated = lines.filter(l => {
        let splitedElms = l.split(",");
        return idWithMoreThanOneAppereance.indexOf(splitedElms[0]) === -1;
    });

    linesNotRepeated.forEach(element => {
        filteredLines.push(element);
    });
    return filteredLines;
}

function getIdInvoiceWithMoreThanOneAppeareance(lines : string[]) {
    let idInvoicesCount = lines.map(l => {
        let splitedElms = l.split(",");
        return splitedElms[0];
    }).reduce((map, idInvoice) => {
        map[idInvoice] = (map[idInvoice] || 0) + 1;
        return map;
    }, {});
   return  Object.entries(idInvoicesCount).filter(([key, value]) => {
        return (value > 1);
    }).map(([key, value]) => key);

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

