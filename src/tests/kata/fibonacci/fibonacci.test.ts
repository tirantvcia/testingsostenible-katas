import { fibonacci } from "../../../core/kata/fibonacci/fibonacci";

describe("fibonacci number", () => {
    it("el valor cero de fibonacci devuelve 0", () => {
        const result = fibonacci(0);
        expect(result).toBe(0);
    });
    it("el valor 1 de fibonacci devuelve 1", () => {
        const result = fibonacci(1);
        expect(result).toBe(1);
    });
    it("el valor de fibonacci de un numero es la suma de fibonacci de sus dos anteriores", () => {
        [2, 3, 4, 5, 6].forEach(n => {
            expect(fibonacci(n)).toBe(fibonacci(n - 2) + fibonacci(n - 1));
        })

    });
});


