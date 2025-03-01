let i = 0

// um laço que vai esperar uma condição pra ele parar

// laço sobre a condição
while ( i < 10){ 
    console.log(i, 'while')
    i++
}


while( i % 2 == 0){
    console.log(`${i} numero par`)
    i++
}


let count = 10

while ( count > 0){
    console.log('contagem regressiva', count)
    count --

}

console.log('fim da contagem')



// 

let num = 0
let soma = 0

while (num <= 10) {
    // a soma é igual a soma + num
    console.log(soma)
    soma += num 
    num ++
}

console.log(`A soma dos numeros de 0 a 10 é: ${soma}`)
