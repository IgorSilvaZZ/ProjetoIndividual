let nomeUsuario;
let emailUsuario
let senhaUsuario;

/* sessionStorage.nomeUsuario = json.nomeUsuario;
sessionStorage.emailUsuario = json.emailUsuario;
sessionStorage.senhaUsuario = json.senhaUsuario; */

function redirecionarLogin(){
    window.location.href = "index.html";
}

function verificarSessao(){
    nomeUsuario = sessionStorage.nomeUsuario;
    emailUsuario = sessionStorage.emailUsuario;
    senhaUsuario = sessionStorage.senhaUsuario;

    if(emailUsuario == undefined){
        redirecionarLogin();
    }else{
        validarSessao();
        document.getElementById("nomeUser").innerHTML = `Olá ${nomeUsuario}`;
    }

    console.log(nomeUsuario);

}

function finalizarSessao(){
    fetch(`/usuarios/sair/${emailUsuario}`, {cache:'no-store'});
}

function logOff(){
    finalizarSessao();
    sessionStorage.clear();
    redirecionarLogin();
}

function validarSessao(){
    fetch(`/usuarios/sessao/${emailUsuario}`, {cache: 'no-store'})
    .then(resposta =>{
        if(resposta.ok){
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);
            });
        }else{
            console.error('Sessão :.( ');
            logOff();
        }
    })
}

verificarSessao();