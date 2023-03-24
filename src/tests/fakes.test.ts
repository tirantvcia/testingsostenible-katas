describe('ToBe or not ToBe should', () => {
    it('1 + 2 ToBe 3 as true', () => {
        expect(1 + 2).toBe(3);
    });
    it('2 + 2 ToBe 3 as not true', () => {
        expect(1 + 2).not.toBe(4);
    });
    it('ToBeFalsy is not true', () => {
        expect(1 + 2 == 4).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(undefined).toBeFalsy();
    });
});
describe("ToEqual should be", () => {
    it("Same object string is equal", () => {
        const hola = "holaCocaCola";
        expect(hola).toEqual(hola);
    });
    it("Same objects string is equal", () => {
        expect({ holaC: 'holaCocaCola' }).toEqual({ holaC: 'holaCocaCola' });
    });
    it("Different object string are equal", () => {
        const hola = "holaCocaCola";
        const holaCocaCola = "holaCocaCola";
        expect(hola).toEqual(holaCocaCola);
    });
    it("Be Truthly that Different object string with same values are equal", () => {
        const hola = "holaCocaCola";
        const holaCocaCola = "holaCocaCola";
        expect(hola === holaCocaCola).toBeTruthy();
    });
});
describe("Numbers should be", () => {
    it("Two different numbers, 9999 greater than 8888", () => {
        expect(9999).toBeGreaterThan(8888);
    })
    it("Two different numbers, 7777 not greater than 8888", () => {
        expect(7777).not.toBeGreaterThan(8888);
    })

});
describe("ToMatch expression should be", () => {
    it("an string is correct email address", () => {
        expect("jopagima@gmail.com").toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    })
    it("an string with two @@ is not email address", () => {
        expect("jopagima@@gmail.com").not.toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    })

});
describe("ToContain expression should be", () => {
    it("an array of numbers contains a specific number", () => {
        expect([1, 2, 3, 4, 5, 6]).toContain(3)
    })
    it("an array of numbers contains a subArray of numbers", () => {
        expect([{ foo: 'foo', bar: 'bar' }, { foo: 'foo', bar: 'foo' }])
            .toContainEqual({ foo: 'foo', bar: 'foo' })
    })

});

describe("ToThrow expression should be", () => {
    it("captured by ", () => {
        const tothrow = () => {
            throw new Error("something wrong");
        }
        expect(tothrow).toThrow();
        expect(tothrow).toThrow(Error);
        expect(tothrow).toThrow("wrong");
        expect(tothrow).toThrow(/wrong/);
    })


});

