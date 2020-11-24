function cadastrar(){

    let imagemAguarde = document.getElementById("aguardeCadastro");

    imagemAguarde.style.display = 'block';

    var formulario = document.getElementById("formularioCadastrar");

    var dataFormulario = new URLSearchParams(new FormData(formulario));

    if( document.getElementById("nomeCompleto").value == "" || document.getElementById("userName").value == "" || document.getElementById("emailUser").value == "" || document.getElementById("senhaUser").value == "" ){

        alert("Preencha todos os campos");
        imagemAguarde.style.display = 'none';   

    }else if(document.getElementById("senhaUser").value != document.getElementById("senhaConfirma").value){

        alert("Coloca a senha correspondente!");
        imagemAguarde.style.display = 'none';

    }else{

        fetch("/usuarios/cadastrar", {
            method: 'POST',
            body: dataFormulario
        }).then((response) =>{
    
            if(response.ok){
                alert("Cadastrado Com Sucesso");
                window.location = "index.html";
            }else if(response.status == 400){
                response.text().then((resposta) =>{
                    let mensagemError = document.getElementById("mesagemErro");
                    mensagemError.style.display = 'block';
                    imagemAguarde.style.display = 'none';
                    mensagemError.innerHTML = texto;
                    /* alert(resposta); */
                });
            }else{
                console.log('Erro de cadastro!');
                response.text().then((resposta) =>{
                    alert(resposta);
                });
            }
        });


    }
    return false;
}


/* Funcao Auto chamada teste */
/* (() =>{
    
})() */