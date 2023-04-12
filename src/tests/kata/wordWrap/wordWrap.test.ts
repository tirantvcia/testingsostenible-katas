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
        const result = wordWrap('hello', 5);
        expect(result).toBe('hello');
    })
});

function wordWrap(cadenaOriginal: string, numeroCaracteresLinea: number) {
    return '';
}
