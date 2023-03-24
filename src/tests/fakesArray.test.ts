test("an array of numbers are exactly other", () => {
    const expectArray = [1, 2, 3, 4, 5, 6];
    expectThatList(expectArray).isExactly(1, 2, 3, 4, 5, 6);
});

test("an array of numbers is sub array of other", () => {
    const expectArray = [2, 3, 4, 5, 6];
    expectThatList(expectArray).isSubArrayFrom(1, 2, 3, 4, 5, 6, 7, 8);
});

/**test("an array of numbers is not sub array of other", () => {
    const expectArray = [2, 5, 4, 5, 6];
    expectThatList(expectArray).isSubArrayFrom(1, 2, 3, 4, 5, 6, 7, 8);
});**/

function expectThatList<T>(list: T[]) {
    return listMatchers(list);
}

function listMatchers<T>(list: T[]) {
    return {
        isExactly(...items: T[]) {
            expect(items.length).toEqual(list.length);
            items.forEach((_, i) => {
                expect(items[i]).toBe(list[i]);
            });
        },
        isSubArrayFrom(...items: T[]) {
            expect(items.length).toBeGreaterThanOrEqual(list.length);
            const firstIndexSubArray = items.indexOf(list[0]);
            expect(firstIndexSubArray).toBeGreaterThanOrEqual(0);
            list.forEach((_, i) => {
                const indexArray = i + firstIndexSubArray;
                expect(items[indexArray]).toBe(list[i]);
            });

        },
    };
}
