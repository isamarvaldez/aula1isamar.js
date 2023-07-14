console.log
let prompt = require("prompt-sync")();

let nome = prompt("Digite o nome: ")
let cargo = prompt ("Digite o cargo: ")
let salario =parseFloat(prompt  ("Digite o salario:"))

if (salario <1000){
   let resultado = (salario*(10/100)) + salario

   
    console.log (nome)
    console.log (cargo)
    console.log (resultado)


}else{
    console.log("sem modificacao")
}