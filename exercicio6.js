let prompt = require('prompt-sync')()
let nota1 = parseFloat( prompt("digite a primeira nota: "))
let nota2 = parseFloat( prompt("digite a segunda nota: "))
let nota3 = parseFloat( prompt("digite a terceira nota: "))
let nota4 = parseFloat( prompt("digite a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4
if (media  >= 7){
    console.log("aprovado")
}else if (media <7 && media >= 5) {
    console.log("recuperacao")

 }  else{
    console.log("reprovado")
 } 
