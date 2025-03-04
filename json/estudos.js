// criando um json em JS

const pessoa = {
    nome: 'Diogo',
    idade: 23,
    profissao: 'Programador'
};


console.log(`Imprimir apenas o nome: ${pessoa.nome}`)
console.log(`Imprimir a idade: ${pessoa.idade}`)
console.log(`Imprimir profissao da pessoa: ${pessoa.profissao}`)


console.log('Adicionar um campo ao meu json, vou ver como fica o antes e o depois')
console.log('----ANTES----')
console.log(pessoa)
pessoa.email = 'diogo.teste@gmail.com'
console.log('----DEPOIS----')
console.log(pessoa)
console.log(pessoa.email)


console.log('----MODIFICANDO-----')
pessoa.idade = 100

console.log('----MODIFIQUEI A IDADE PRA 100')
console.log(pessoa)


console.log('-----EXCLUINDO------')
delete pessoa.profissao

console.log('-----APAGANDO A PROFISSAO DO JSON------')  
console.log(pessoa)
