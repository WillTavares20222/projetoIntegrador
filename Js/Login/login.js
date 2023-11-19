
function logar(){
    const username = document.getElementById("username").value;
    const senha = document.getElementById("senha").value;

    if(username === 'admin' && senha === 'admin'){
        location.href="./PagePrincipal/PaginaPrincipal.html";
    }else{
        window.alert("Senha ou usuário inválido");
    }
}



