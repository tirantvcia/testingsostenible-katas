import * as arithmetic from './arithmetic';

export function doAdd(a: number, b: number) {
    return arithmetic.add(a, b);
}

export function doSubstract(a: number, b: number) {
    return arithmetic.substract(a, b);
}

export function doMultiply(a: number, b: number) {
    return arithmetic.multiply(a, b);
}

export function doDivide(a: number, b: number) {
    return arithmetic.divide(a, b);
}