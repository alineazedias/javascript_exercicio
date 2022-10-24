var global_senhaValida = "1234";

function controllerAcesso() {
    var senha = document.getElementById("senha").value;

    var validaAcesso(senha)
}

function validaAcesso(senha = "") {
    if (senha == global_senhaValida) {
        return "ACESSO PERMITIDO";
    } else {
        return "ACESSO NEGADO";
    }
}