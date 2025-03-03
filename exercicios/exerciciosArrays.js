// ## 5. Exercícios Práticos

// ### Exercício 1: Manipulação de Arrays

// Use forEach para imprimir cada número no console.
console.log('---USANDO O FOR EACH------------')
let listaNumericas = [0,1,2,3,4,5,6,7,8,9,10]

listaNumericas.forEach((listaNumerica, i) => {
    console.log(`lista Numerica: ${listaNumerica}`)
})


console.log('---USANDO O MAP---------')
// Use map para criar um novo array contendo o dobro de cada número.
let num = listaNumericas.map((listaNumerica, i) =>{
    // return listaNumerica * 2
    console.log(listaNumerica * 2)
})


console.log('--------USANDO O FILTER-------')

let listaPar = listaNumericas.filter((listaNumerica) => {
    if(listaNumerica % 2 == 0) {
        console.log(`Esse numero é par: ${listaNumerica}`)
    }
})


console.log('----USANDO O REDUCE')


let valorInicial = 0

let somaListaNumerica = listaNumericas.reduce((acumulador, valorCorrente) => 
    acumulador + valorCorrente, valorInicial)


console.log(somaListaNumerica)
