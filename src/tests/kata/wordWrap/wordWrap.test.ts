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
import {
  TextToWrap,
  NumCharsPerLine,
} from "../../../core/kata/wordWrap/wordWrap";

describe("WordWrap functionallity", () => {
  it("Cadena vacia, devuelve vacio", () => {
    const result = TextToWrap.create("").wrap(NumCharsPerLine.create(5));
    expect(result).toEqual(TextToWrap.create(""));
  });
  it("Cadena de longitud igual o menor al tamaño maximo linea, devuelve cadena", () => {
    expect(TextToWrap.create("hell").wrap(NumCharsPerLine.create(5))).toEqual(
      TextToWrap.create("hell")
    );
    expect(TextToWrap.create("hello").wrap(NumCharsPerLine.create(5))).toEqual(
      TextToWrap.create("hello")
    );
  });
  it("Cadena de longitud mayor al tamaño maximo linea, devuelve cadena partida", () => {
    expect(
      TextToWrap.create("longword").wrap(NumCharsPerLine.create(4))
    ).toEqual(TextToWrap.create("long\nword"));
  });
  it("Cadena de longitud mucho mayor al tamaño maximo linea, devuelve varias cadenas partidas", () => {
    expect(
      TextToWrap.create("reallylongword").wrap(NumCharsPerLine.create(4))
    ).toEqual(TextToWrap.create("real\nlylo\nngwo\nrd"));
  });
  it("Cadena con espacios en blanco, devuelve cadenas partidas por el espacio en blanco", () => {
    expect(
      TextToWrap.create("abc def").wrap(NumCharsPerLine.create(4))
    ).toEqual(TextToWrap.create("abc\ndef"));
    expect(
      TextToWrap.create("abc def ghi").wrap(NumCharsPerLine.create(4))
    ).toEqual(TextToWrap.create("abc\ndef\nghi"));
  });
  it("Cadena con espacios en blanco y mayor al tamaño máximo, cadena partida por espacios y tamaños", () => {
    expect(TextToWrap.create(" abcdf").wrap(NumCharsPerLine.create(4))).toEqual(
      TextToWrap.create("\nabcd\nf")
    );
  });
  it("Null, devuelve cadena vacia", () => {
    expect(TextToWrap.create(null).wrap(NumCharsPerLine.create(4))).toEqual(
      TextToWrap.create("")
    );
  });
  it("tamaño linea menor que 0, error", () => {
    expect(() =>
      TextToWrap.create("hello").wrap(NumCharsPerLine.create(-5))
    ).toThrow();
  });
});
