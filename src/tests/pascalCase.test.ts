import { upperCamelCase } from "../pascalCase";

describe("Upper Camel Case Should", () => {
    it("Para una cadena vacía el resultado debe ser igual", () => {
        expect(upperCamelCase("")).toBe("");
    });
    it("Para una cadena con 1a letra en mayuscula el resultado debe ser igual", () => {
        expect(upperCamelCase("Jose")).toBe("Jose");
    });
    it("Para dos cadenas con 1a letra en mayuscula el resultado debe ser una cadena", () => {
        expect(upperCamelCase("Jose Pascual")).toBe("JosePascual");
    });
    it("Para cadenas con 1a letra en mayuscula separadas por guiones el resultado debe ser una cadena", () => {
        expect(upperCamelCase("Jose-Pascual_Gimeno")).toBe("JosePascualGimeno");
    });
    it("Para cadena con 1a letra en minuscula el resultado debe ser una cadena con la 1 letra mayuscula", () => {
        expect(upperCamelCase("jose")).toBe("Jose");
    });

    it("Para varias cadenas separads con blancos y guiones con 1a letra en minuscula el resultado debe ser una cadena con la 1 letra mayuscula para cada parte de la cadena", () => {
        expect(upperCamelCase("jose pascual-gimeno_mari")).toBe("JosePascualGimenoMari");
    });
});
