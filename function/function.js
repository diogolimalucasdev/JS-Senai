
function Saudacao(name) {
    console.log(`Bem vinda, ${name}`)
}

let name = 'Maria Jose'
Saudacao(name)


function BuscarPares(num) {

    for(i = 0; i <= num; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

BuscarPares(30)