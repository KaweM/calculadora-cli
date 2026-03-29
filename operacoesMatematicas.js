export function soma (num1, num2) {
    return num1 + num2
}
export function subtracao (num1, num2) {
    return num1 - num2
}
export function multiplicacao (num1,num2) {
    return num1 * num2
}
export function divisao (num1, num2) {
    if (num2 === 0) {
        throw new Error('Não é possível dividir por zero!');
    }
    return num1 / num2
}
export function potencia (num1, num2) {
    return num1 ** num2
}
export function modulo (num1, num2) {
    return num1 % num2
}
export function porcentagem (num1, num2) {
    return (num1 * num2) / 100;
}
