// console.log("Exemplo 4")

let prompt = require("prompt-sync")();
// let primeiraNota = parseFloat ( prompt("Digite a primeira nota: ") )
// let segundaNota = parseFloat ( prompt("Digite a segunda nota: ") )
// let soma = primeiraNota + segundaNota
// let media = soma / 2
// console.log("A media dos alunos que vao embora anges da hora e: " + media)


//Quero validar se o numero digitado pelo usuario
//esta no intervalo entre 10 a 20
// let prompt = require( 'prompt-sync' ) ()
// let numero = parseInt (prompt("digite um numero"));
// if (numero >= 10 && numero <20) {
//     console.log("O numero informado esta no intervalo desejado, entre 1")
    
// }else{
//     console.log("O numero esta fora do intercvalo desejado!!!!!")
// }

let animal = prompt("Digite o nome do animal para saber o que ele teem a dizer: ")
switch(animal){
    case 'cachorro' :
    console.log("au uuuuuu")
    break;
    case 'gato' :
    console.log("miauuuuu")
    break;
    case 'vaca' :
    console.log("muuuuuu")
    break;
    case 'papagaio' :
    console.log("voce foi a culpa desse amor acabar...")
    console.log("https://www.youtube.com/watch?v=wAs_kCFSiLO")
    break;
    default:
        console.log("conhecooo nao")
        break;
}





