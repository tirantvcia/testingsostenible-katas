export function sum(numbers: number[]): number {
    return numbers.reduce(((previous, current) => previous + current), 0);
}

export function average(numbers: number[]): number {
    return sum(numbers) / numbers.length;
}