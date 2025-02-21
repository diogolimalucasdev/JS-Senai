let nota  = 10

// declara o if ( fica a condição) { retorno da função}

if(nota == 10){
    return console.log(`Aprovado por exelencia, nota ${nota}`)

}else if(nota >= 7){
    return console.log(`Aprovado, sua nota foi: ${nota} `)

}else if(nota >= 4.5){
    return console.log(`Sua nota foi ${nota}, venha na secretaria agendar a recuperação`)

}else {
    return console.log(`Sua nota foi ${nota}, por isso reprovou`)
}