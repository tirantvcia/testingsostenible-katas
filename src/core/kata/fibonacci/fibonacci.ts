export function fibonacci(numero: number) {
    if (numero === 0) return 0;
    if (numero === 1) return 1;
    return fibonacci(numero - 2) + fibonacci(numero - 1);
}
