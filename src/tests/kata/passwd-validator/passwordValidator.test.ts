import { passwordValidation } from '../../../core/kata/password-validator/passwordValidation';

/*
    Tener una longitud de al menos seis caracteres
    Contener algún número
    Contener alguna letra mayúscula
    Contener alguna letra minúscula
    Contener algún guion bajo
    */
describe("Validador de password", () => {
    it("Se cumplen todas las reglas", () => {
        expect(passwordValidation("Pepito6_")).toBeTruthy();
    })
    it("Falla por no Tener una longitud de al menos seis caracteres", () => {
        expect(passwordValidation("Pt6_")).toBeFalsy();
    });
    it("Falla por no Contener algún número", () => {
        expect(passwordValidation("Pepito_")).toBeFalsy();
    })
    it("Falla por no Contener alguna letra mayúscula", () => {
        expect(passwordValidation("pepito6_")).toBeFalsy();
    })
    it("Falla por no Contener alguna letra minuscula", () => {
        expect(passwordValidation("PEPITO6_")).toBeFalsy();
    })
    it("Falla por no Contener algún guion bajo", () => {

        expect(passwordValidation("Pepito6")).toBeFalsy();

    })


});



