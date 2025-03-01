// - **bjetivo:** Criar uma função que calcule o fatorial de um número (por exemplo, 5!) utilizando um laço `for`.
// - **Dica:** Inicialize uma variável com 1 e multiplique-a pelos números de 1 até o número desejado.

function fatorial (numero) {
    let resultado = numero
    for(let i = 1; i < numero; i++){
        numero  *= i
    }

    return resultado
}


console.log(fatorial(5))
