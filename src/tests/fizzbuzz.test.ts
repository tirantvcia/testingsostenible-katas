import { fizzbuzz } from "../fizzbuzz";

describe("Fizzbuzz Should", () => {
    it("Para el número 1 el resultado debe ser '1'", () => {
        const result = fizzbuzz(1);
        const expected = "1";
        expect(expected).toBe(result);
    });

    it("Para el número 3 el resultado debe ser 'fizz'", () => {
        const result = fizzbuzz(3);
        const expected = "fizz";
        expect(expected).toBe(result);
    });
    it("Para el número 5 el resultado debe ser 'buzz'", () => {
        const result = fizzbuzz(5);
        const expected = "buzz";
        expect(expected).toBe(result);
    });

    it("Para el número 15 el resultado debe ser 'fizzbuzz'", () => {
        const result = fizzbuzz(15);
        const expected = "fizzbuzz";
        expect(expected).toBe(result);
    });

    it("Para cualquier número divisible entre 3 el resultado debe ser 'fizz'", () => {
        const result = fizzbuzz(4 * 3);
        const expected = "fizz";
        expect(expected).toBe(result);
    });

    it("Para cualquier número divisible entre 5 el resultado debe ser 'buzz'", () => {
        const result = fizzbuzz(5 * 4);
        const expected = "buzz";
        expect(expected).toBe(result);
    });

    it("Para cualquier número divisible entre 15 el resultado debe de ser 'fizzbuzz'", () => {
        const result = fizzbuzz(15 * 2);
        const expected = "fizzbuzz";
        expect(expected).toBe(result);
    });

    it("Para el resto de números el resultado debería ser el propio número recibido", () => {
        const result = fizzbuzz(2);
        const expected = "2";
        expect(expected).toBe(result);
    });

});



