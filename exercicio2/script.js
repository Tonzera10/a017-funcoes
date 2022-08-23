function soma(num1, num2) {
    return num1 + num2
}
console.log(`A soma dos dois numeros é ${soma(5, 7)}`)
console.log("===========================================")

function maiorOuIgual(num1, num2) {
    if(num1>=num2){
        return true
    }else {
        return false
    }
}
console.log(maiorOuIgual(3,5)) // retornara false pois 3 não é maior nem igual a 5
console.log(maiorOuIgual(5,5)) // retornará true pois 5 é igual a 5
console.log(maiorOuIgual(9,5)) //retornará true pois 9 é maior que 5
console.log("===========================================")

function parOuImpar(num) {
    if(num % 2 === 0){
        console.log(`${num} é par`)
    }else {
        console.log(`${num} é impar`)
    }
}
parOuImpar(44)
parOuImpar(233)
parOuImpar(348)
parOuImpar(39)
console.log("===========================================")
function mensagem(string) {
    console.log(string.length)
    console.log(string.toLowerCase())
}
mensagem("Dias de Luta e dias de Glória")
mensagem("Até apé nós iremos, para o que der e vier!")