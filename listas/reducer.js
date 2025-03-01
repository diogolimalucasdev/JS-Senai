const numbers = [1, 2, 3, 4, 5]
let valorinicial = 20

// valor corrente é o valor que esta passando, no caso o 1,2,3,4,5
// o que eu fiz entao foi pegar um 
const soma = numbers.reduce((acumulador, valorCorrente) => 
    acumulador + valorCorrente, valorinicial)

console.log(soma)