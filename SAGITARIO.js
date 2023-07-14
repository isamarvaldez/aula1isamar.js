let prompt =  require('prompt-sync')()
let numerodeusuario = parseInt (prompt("Digite o numero do usuario: "))
if(numerodeusuario % 2 == 0 ) {
    console.log("O numero inserido é par")
}else{
    //exibe mensagem
    console.log("O numero inserido é ímpar")

}