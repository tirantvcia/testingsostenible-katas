declare namespace jest {
    interface Matchers<R> {
        customToBe(value): CustomMatcherResult;
        isExactly<T>(...items: T[]): CustomMatcherResult;
        isSubArrayFrom<T>(...values: T[]): CustomMatcherResult;
    }
}
expect.extend({
    customToBe(expected, received) {
        return {
            pass: expected === received,
            message: () => `Expected: ${expected}\nReceived: ${received}`,
        };
    },
    isExactly<T>(expectedList: T[], ...values: T[]) {
        const haveTheSameLength = expectedList.length === values.length;
        const haveTheSameElements = () =>
            values.map((_, i) => expectedList[i] === values[i]).reduce((a, b) => a && b, true);
        return {
            pass: haveTheSameLength && haveTheSameElements(),
            message: () => `Expected: ${expectedList}\nReceived: ${values}`,
        }
    },
    isSubArrayFrom<T>(expectedList: T[], ...values: T[]) {
        const haveGreaterOrEqualLength = expectedList.length <= values.length;
        const firstIndexSubArray = values.indexOf(expectedList[0]);
        const firstElementIsInSubArray = firstIndexSubArray >= 0;
        const haveTheSameElements = () =>
            expectedList.map((_, i) => expectedList[i] === values[firstIndexSubArray + i]).reduce((a, b) => a && b, true);

        return {
            pass: haveGreaterOrEqualLength && firstElementIsInSubArray && haveTheSameElements(),
            message: () => `Expected: ${expectedList}\nReceived: ${values}`,
        }
    }
});

test('custom assertion (extending)', () => {
    const list = [10, 20, 30];
    expect(list.length).customToBe(3);
    expect(list).isExactly(10, 20, 30);
}),
    test('custom assertion isSubArrayFrom', () => {
        const list = [20, 30, 40];
        expect(list).isSubArrayFrom(10, 20, 30, 40);
    })