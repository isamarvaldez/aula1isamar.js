let prompt = require ("prompt-sync")()
let primeironumero = parseInt( prompt("Digite o primeiro numero: ") )
let segundronumero = parseInt( prompt("Digite o primeiro numero: ") )
let terceironumero = parseInt( prompt("Digite o primeiro numero: ") ) 
if (primeironumero < segundronumero && segundronumero < terceironumero) {
    console.log("os numeros estao em ordem crescente!!")

}else {
    console.log("os numeros nao estao em ordem crescente")
}
