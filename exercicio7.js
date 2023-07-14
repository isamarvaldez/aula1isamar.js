let prompt = require ("prompt-sync")()
let nome = prompt ('Digite o nome de usuario: ')
let senha = prompt ('Digite senha: ')
if(nome == "admin" && senha == "senha123") {
    //usuario permitido
    console.log("usuario admin permitido!!")
    }else{
        //exibe mensagem
        console.log("voce nao passará")

    }