import * as statsAsync from "../statsAsync";

describe("Stats Should (async)", () => {
    it("calcula la suma de tots els elements d'un array (async)", async () => {
        const result = await statsAsync.sum([1, 2, 3]);
        const expected = 6;
        expect(expected).toBe(result);
    });


    it("calcula la mitjana de tots el elements d'un array (async)", async () => {
        const result = await statsAsync.average([1, 2, 3]);
        const expected = 2;
        expect(expected).toBe(result);
    });
});