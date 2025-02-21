let nota = 10


switch (true) {
    case (nota === 10):
        return console.log(`Aprovado por exelencia, nota ${nota}`)
        break;

    default:
        return console.log(`Sua nota foi ${nota}, por isso reprovou`)
        break;
        // nesse caso nao preciso do break, pq ja tenho return
}



