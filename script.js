
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mensagem = document.querySelector("#mensagem")

let mapa = document.querySelector("#mapa")
let mensagemok = false
let emailok = false
let assuntook = false

email.style.width = '100%'
assunto.style.width = '100%'

function validaMensagem(){
    let txtMensagem = document.querySelector("#txtMensagem")

    if(mensagem.value.length < 1){
        txtMensagem.innerHTML = 'Preencha com sua mensagem'
        txtMensagem.style.display = 'block'
        txtMensagem.style.color = 'red'
        mensagemok = false
    }else{
        mensagemok = true
        txtMensagem.style.display = 'none'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(!email.value.length){
        txtEmail.innerHTML = 'Preencha com um email valído'
        txtEmail.style.color = "red"
        setTimeout(function(){ txtEmail.style.display = 'none'} , 1300)
        emailok = false
        txtEmail.style.transition = '.7s ease'
    }
    else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.style.display = 'block'
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"
        emailok = false
        txtEmail.style.transition = '.7s ease'
    }else{
        txtEmail.innerHTML = 'Email Valido'
        txtEmail.style.color = 'green'
        setTimeout(function(){ txtEmail.style.display = 'none'} , 1300)
        txtEmail.style.transition = '.7s ease'
        emailok = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length < 1){
        txtAssunto.style.display = 'block'
        txtAssunto.innerHTML = 'Assunto Obrigatorio'
        txtAssunto.style.color = "red"
        assuntook = false
        txtAssunto.style.transition = '.7s ease'
    }
    else if(assunto.value.length > 100){
        txtAssunto.innerHTML = 'texto muito grande. Maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        txtAssunto.style.transition = '.7s ease'
        assuntook = true
    }else{
        txtAssunto.style.display = 'block'
        txtAssunto.innerHTML = 'Assunto Valido'
        txtAssunto.style.color = 'green'
        setTimeout(function(){ txtAssunto.style.display = 'none'} , 1300)
        txtAssunto.style.transition = '.7s ease'
        assuntook = true
    }
}

function enviar(){
    if(mensagemok == true && emailok == true && assuntook == true){
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