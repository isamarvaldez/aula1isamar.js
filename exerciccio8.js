let prompt = require ("prompt-sync")()
let numero = prompt ("Digite um numero de 1 a 7: ")
if (numero == 1){
    console.log("esse dia é segunda feira")
}else if(numero == 2){
    console.log("esse dia é terca feira")
    
}else if(numero == 3){
    console.log("esse dia é quarta")
}else if(numero == 4){
    console.log("esse dia é quinta")
    
}else if(numero == 5){
    console.log("esse dia é sexta")

}else if(numero == 6){
    console.log("esse dia é sabado")
}else if(numero == 7){
    console.log("esse dia é domingo")

}else {
    console.log("o valor digitado nao corresponde a um dia da semana")

}
