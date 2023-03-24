/*
    2 ⇒ [2]
    2 * 2 ⇒ [2,2]
    2 * 2 * 2 ⇒ [2,2,2]
    3 ⇒ [3]
    3 * 3 ⇒ [3,3]
    3 * 2 ⇒ [2,3]
    5 * 5 ⇒ [5,5]
    5 * 7 * 11 * 3 ⇒ [3,5,7,11]
    */

describe("Descomposición factores primos", () => {
    it("Un número primo devuelve el mismo número", () => {
        var result = primeFactors(2);
        expect(result).toMatchObject([2]);
    });
});

function primeFactors(numero: number) {
    var descomp: number[] = [];
    descomp.push(2);
    console.log(descomp);
    return descomp;
}
