// //função para chamar "Olá [Meu nome]"
// function meuNome() {
//     console.log("Olá, Everton!")
// }
// meuNome()
// console.log("======================================")
// // função para chamar a tabuada do 6
// function tabuadaDoSeis() {
//     const multiplicador = [1,2,3,4,5,6,7,8,9,10] 
//     for(numero of multiplicador){
//         console.log(`${numero} x 6 = ${numero*6}`)
//     }
// }
// tabuadaDoSeis()
// console.log("======================================")
//reescrevendo com arrow function
const meuNome = () => console.log("Olá, Everton!")
meuNome()

const tabuadaDoSeis = () => {
    const multiplicador = [1,2,3,4,5,6,7,8,9,10]
    for(numero of multiplicador) {
        console.log(`${numero} x 6 = ${numero*6}`)
    }
}
tabuadaDoSeis()