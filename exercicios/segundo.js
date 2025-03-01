let valorNumerico = 5

let valorTexto = "5"


// jeito que eu fiz

if(valorNumerico === valorTexto) {
    console.log("o tipo das variaveis sao diferentes")
}else if(valorNumerico == valorTexto) {
    console.log("O valor das variaveis sao identicas")
}else {
    console.log("valor nao esperado")
}


//  jeito que o professor fez

let value = '5'
let compareSimples = 5 == value
// valida se o type do value é igual o do number
let compareEstrito = 5 === value

console.log(`Comparação simples, retorno: ${compareSimples}`)
console.log(`Comparação Estrito, retorno: ${compareEstrito}`)



// jeito que eu fiz para validar se um numero é maior que 10


let verificarNumero = 8

console.log(verificarNumero > 10)


// jeito do professor

let num = 7
const valida10 = num > 10

console.log(valida10, 'valida10')
   