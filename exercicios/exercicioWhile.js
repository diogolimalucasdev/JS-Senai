// - **Objetivo:** Calcular a soma de todos os números pares entre 1 e 20 utilizando um laço `while`.
// - **Dica:** Utilize um `if` dentro do `while` para verificar se o número é par.
let validar = 0
let sum = 0
while(validar < 20) {

    validar % 2 == 0 ? sum += validar : console.log(`Numero ${validar} nao é par`)

    validar++

    // if(validar % 2 ==0 ){
    //     console.log("entrou")
    //     sum += validar
    // }else{
    //     console.log(`Numero ${validar} nao é par `)
    // }
    // validar++
}

console.log(`A soma é: ${sum}`)