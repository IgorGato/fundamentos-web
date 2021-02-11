// var variavel de escopo global
// let variavel de escopo local
// const variavel de escopo global mas nao alteravel

// por Tag: getElementByTagName()
// por Id: getElementById()
// por Nome: getElementsByName()
// por Classe: getElementByClassName()
// por Seletor: querySelector()

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeok = false
let emailok = false
let assuntook = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome(){

    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
        nomeok = true
    }

}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        emailok = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'texto muito grande. Maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntook = true
    }
}

function enviar(){
    if(nomeok == true && emailok == true && assuntook == true){
        alert("Mensagem enviada")
    }else{
        alert("Preencha todos os campos corretamente")
    }
}

function zoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
    mapa.style.transition = '.7s ease'
}

function normal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}