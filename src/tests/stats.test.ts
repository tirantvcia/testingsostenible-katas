import { sum } from "../stats";
import { average } from "../stats";



describe("Stats Should", () => {
    it("calcula la suma de tots els elements d'un array", () => {
        const result = sum([1, 2, 3]);
        const expected = 6;
        expect(expected).toBe(result);
    });


    it("calcula la mitjana de tots el elements d'un array", () => {
        const result = average([1, 2, 3]);
        const expected = 2;
        expect(expected).toBe(result);
    });

});

