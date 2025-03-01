// - **Objetivo:** Imprimir o quadrado dos números de 1 a 5 utilizando o laço `do...while`.
// - **Dica:** Lembre-se de atualizar a variável de controle dentro do bloco.


let numeroQuadrado = 0

do {
    let quadrado = numeroQuadrado * numeroQuadrado
    console.log(`O numero ${numeroQuadrado} * ${numeroQuadrado} = ${quadrado}`)
    numeroQuadrado++
    
} while (numeroQuadrado <= 5)