export function fizzbuzz(n: number) {

    function isDivisibleBy(divisor: number) {
        return n % divisor === 0;
    }


    if (isDivisibleBy(15)) {
        return "fizzbuzz";
    }

    if (isDivisibleBy(3)) {
        return "fizz";
    }
    if (isDivisibleBy(5)) {
        return "buzz";
    }

    return n.toString();
}

