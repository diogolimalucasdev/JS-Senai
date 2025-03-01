// alert('estou rodando')
// prompt('Digite seu nome')

let nome = prompt('Digite seu nome')
console.log(nome, 'linha 7')

let valor1 = prompt('Digite um valor: ')
console.log(typeof valor1 )
if (isNaN(valor1)) {
    alert('O valor digitado nao é um numero!')
}

let valor2 = prompt('Digite o valor2: ')
if (isNaN(valor2)) {
    alert('O valor digitado nao é um numero!')
}

// Podemos usar o number tbm 
//  exemplo:
// let soma = Number(valor1) + Number(valor2)
let soma = parseFloat(valor1) + parseFloat(valor2)
alert(`${nome} O resultado de ${valor1} + ${valor2} =  ${soma}`)



// transformando para string
let string = toString(valor1)
console.log(typeof string, 'linha 28')