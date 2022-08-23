const soma = (num1, num2) => {
    return num1+num2
}
const subtracao = (num1, num2) => {
    return num1-num2
}
const multiplicacao = (num1, num2) => {
    return num1*num2
}
const divisao = (num1, num2) => {
    return num1/num2
}

const numero1 = Number(prompt("Digite um número aqui: "))
const numero2 = Number(prompt("Digite outro número aqui: "))
console.log(`O resultado da soma é ${soma(numero1,numero2)}`)
console.log(`O resultado da subtração é ${subtracao(numero1,numero2)}`)
console.log(`O resultado da multiplicação é ${multiplicacao(numero1,numero2)}`)
console.log(`O resultado da divisão é ${divisao(numero1,numero2)}`)