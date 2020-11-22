function cadastrar(){

    var formulario = document.getElementById("formularioCadastrar");

    var dataFormulario = new URLSearchParams(new FormData(formulario));
    
    fetch("/usuarios/cadastrar", {
        method: 'POST',
        body: dataFormulario
    }).then((response) =>{

        if(response.ok){
            window.location = "index.html";
            alert("Cadastrado Com Sucesso");
        }else{

            console.log('Erro de cadastro!');
            response.text().then((resposta) =>{
                alert(resposta);
            });

        }

    });

    return false;
}


/* Funcao Auto chamada teste */
/* (() =>{
    
})() */