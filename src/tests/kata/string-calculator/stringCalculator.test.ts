import { sumarCadenas } from '../../../core/kata/string-calculator/sumarCadenas';

/*
    En el caso de recibir null o una cadena vacía no se incrementa el total. Ej.: null ⇒ 0, "" ⇒ 0
    Convierte un número en formato string a un tipo numérico. Ej.: "1" ⇒ 1
    Suma todos los números separados por comas. Ej.: "1,2" ⇒ 3, "1,2,3" ⇒ 6
    No incrementa el total para valores no numéricos. Ej.: "a" ⇒ 0, "1,a" ⇒ 1, "1,a,2" ⇒ 3, "1a, 2" ⇒ 2
    Suma todos los números separados por un separador personalizado. Ej.: "//#/3#2" ⇒ 5, "//#/3,2" ⇒ 0, "//%/1%2%3" ⇒ 6
*/
describe("Calculadora de strings", () => {
    it("se recibe una cadena vacia no afecta al resultado", () => {

        expect(sumarCadenas("")).toBe(0);
        expect(sumarCadenas(null)).toBe(0);

    });
    it("se recibe un numero en string, devuelve el numero", () => {
        expect(sumarCadenas("1")).toBe(1);

    });
    it("se reciben dos numeros entre comas, devuelve la suma", () => {
        expect(sumarCadenas("1,2")).toBe(3);
        expect(sumarCadenas("1,2,3")).toBe(6);

    });
    it("No incrementa el total para valores no numéricos", () => {
        expect(sumarCadenas("a")).toBe(0);
        expect(sumarCadenas("1,a")).toBe(1);
        expect(sumarCadenas("1,a,2")).toBe(3);
        expect(sumarCadenas("1a, 2")).toBe(2);
    });
    it("Suma todos los números separados por un separador personalizado", () => {
        expect(sumarCadenas("//#/3#2")).toBe(5);
        expect(sumarCadenas("//#/3,2")).toBe(0);
        expect(sumarCadenas("//%/1%2%3")).toBe(6);
    });


})


