const BEGIN_CONFIG_CHARS = '//';
const END_CONFIG_CHAR = '/';
const DEFAULT_SEPARATOR = ",";
export function sumarCadenas(expression: string): Number {
    if (expression == null || expression.length == 0) {
        return 0;
    }

    let splitArg = DEFAULT_SEPARATOR;

    if (expression.startsWith(BEGIN_CONFIG_CHARS)) {
        splitArg = getSeparator(expression);
        expression = removeSplitConfig(expression);
    }

    var splitted = expression.split(splitArg);
    return splitted.map(str => getNumber(str)).reduce(sum(), 0);



}
function getSeparator(expression: string): string {
    return expression.substring(BEGIN_CONFIG_CHARS.length, expression.lastIndexOf(END_CONFIG_CHAR));
}

function removeSplitConfig(expression: string) {
    expression = expression.substring(expression.lastIndexOf(END_CONFIG_CHAR) + 1);
    return expression;
}

function sum(): (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number {
    return (previous, current) => previous + current;
}

function getNumber(token: string): number {
    const parsedToken = Number(token);
    return isNaN(parsedToken) ? 0 : parsedToken;
}

