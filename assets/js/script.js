/* 
Case Sensitive = Reconhece letras maiúsculas e minúsculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let conteudoOk = false
nome.style.width = "100%"
email.style.width = "100%"
conteudo.style.width = "100%"
function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido!"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido."
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}


function validaConteudo() {
   let txtConteudo = document.querySelector("#txtConteudo")

    if (conteudo.value.length >=100 ) {
        txtConteudo.innerHTML = "Você ultrapassou o limite de texto!"
        txtConteudo.style.color = "red"
        txtConteudo.style.display = "block"
    } else {
        txtConteudo.style.display = "none"
        conteudoOk = true
    }
}


function enviar (){
    if (nomeOk == true && emailOk == true && conteudoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}