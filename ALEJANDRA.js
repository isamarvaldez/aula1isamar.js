let prompt = require('prompt-sync')()

let primeiroNumero = parseInt ( prompt('Digite o primeeiro numero: '))
let segundoNumero = parseInt ( prompt('Digite o primeeiro numero: '))
if(primeiroNumero > segundoNumero){
    console.log("o numero" + primeiroNumero + "é maior que" + segundoNumero)

}else {
    console.log("o numero " + segundoNumero + "é maior que " + primeiroNumero)
}


