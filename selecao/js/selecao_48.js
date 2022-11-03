function controllerNumero() {
    let numero = parseInt(document.querySelector("#numero").value);
    let resultado = numeroParImpar(numero);
    saidaDados("Resultado:" + resultado);

    let valor = {
        numeroDigitado: numero,
        resultadoEncontrado: resultado
    }

    salvarResultado(valor);
}

function numeroParImpar(numero = 0) {
    if (numero % 2 == 0) {
        return "PAR"
    }
    return "IMPAR"
}

function saidaDados(texto_saida) {
    document.getElementById("saidaTexto").innerHTML = texto_saida;
}

function salvarResultado(obj) {

    localStorage.setItem("numero", obj.numeroDigitado);
    localStorage.setItem("resultado", obj.resultadoEncontrado);

    //pegar os dados do local storage e converte para o objeot
    let dadosValores = JSON.parse(localStorage.getItem("valores"));
    //verificar se nao tem dados
    if (dadosValores) {
        //criar um vetor (array)
        dadosValores = [];
    }
    //adicionar o obj a lista que foi resgatada do local storage
    dadosValores.push(obj);

    let json = JSON.stringify(dadosValores);

    localStorage.setItem("valores", json);
}

function listaResultado() {
    let dadosNumero = parsefloat(localStorage.getItem("numero"));
    let dadosResultado = localStorage.getItem("resultado");
    let dadosValores = localStorage.getItem("valores");
    let x = dadosNumero.toString();
}

function carregarValores() {
    listaResultado();
}