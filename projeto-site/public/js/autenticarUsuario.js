function autenticar(){

    let imagemAguarde = document.getElementById("aguardeLogin");

    imagemAguarde.style.visibility = 'visible';

    var formLogin = document.forms.form_usuario;

    var formularioAutenticacao = document.getElementById("autenticar_usuario");

    var dataFormulario =  new URLSearchParams(new FormData(formularioAutenticacao));

    fetch("/usuarios/autenticar", {
        method: "POST",
        body: dataFormulario
    }).then(resposta =>{

        console.log(formLogin.elements.email.value);

        if(resposta.ok){
            resposta.json().then(json =>{
                sessionStorage.nomeUsuario = json.nomeUsuario;
                sessionStorage.emailUsuario = json.emailUsuario;
                sessionStorage.senhaUsuario = json.senhaUsuario;
                /* console.log(sessionStorage); */
                window.location.href = "home.html";
            });

        }else{

            console.log('Erro de Login');

            resposta.text().then(texto =>{
                console.error(texto);
                let mensagemError = document.getElementById("mesagemErro");
                mensagemError.style.visibility = "visible";
                imagemAguarde.style.visibility = "hidden";
                mensagemError.innerHTML = texto;
            })

        }

    });

    return false;
}

function verificarFormulario(){
    var formLogin = document.forms.form_usuario;
    console.log(formLogin.elements.email.value);
}