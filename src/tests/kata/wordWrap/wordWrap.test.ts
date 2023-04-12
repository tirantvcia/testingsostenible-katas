/*
    wordWrap('',5) ⇒ ''
    wordWrap('hello',5) ⇒ 'hello'
    wordWrap('longword',4) ⇒ 'long\nword'
    wordWrap('reallylongword',4) ⇒ 'real\nlylo\nngwo\nrd'
    wordWrap('abc def',4) ⇒ 'abc\ndef' 
    wordWrap('abc def ghi',4) ⇒ 'abc\ndef\nghi'
    wordWrap(' abcdf',4) ⇒ '\nabcd\nf'
    wordWrap(null,5) ⇒ ''
    wordWrap('hello',-5) ⇒ throw exception
*/
describe("WordWrap functionallity", () => {
    it("Cadena original vacia, devuelve vacio", () => {
        const result = wordWrap('', 5);
        expect(result).toBe('');
    })
    it("Cadena original de longitud igual o menor al tamaño maximo linea, devuelve cadena", () => {
        expect(wordWrap('hell', 5)).toBe('hell');
        expect(wordWrap('hello', 5)).toBe('hello');
    })
    it("Cadena original de longitud mayor al tamaño maximo linea, devuelve cadena partida", () => {
        expect(wordWrap('longword', 4)).toBe('long\nword');
    })
    it("Cadena original de longitud mucho mayor al tamaño maximo linea, devuelve varias cadenas partidas", () => {
        expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd');
    })
});

function wordWrap(cadenaOriginal: string, numeroCaracteresLinea: number) {
    if (cadenaOriginal.length > numeroCaracteresLinea) {
        return partirCadena(cadenaOriginal, numeroCaracteresLinea);
    }
    return cadenaOriginal;
}
function partirCadena(cadenaOriginal: string, numeroCaracteresLinea: number) {
    return cadenaOriginal.substring(0, numeroCaracteresLinea) + '\n' + cadenaOriginal.substring(numeroCaracteresLinea);
}

