var numero1 = 0
var numero2 = 0
var numero3 = 0
var numero4 = 0
var numero5 = 0

function verificar() {

    var elemento = document.getElementById("background-selecao");
    var corSelect = document.getElementById("corSelect");
    var contaSelect = document.getElementById("contaSelect");
    var nomeSelect = document.getElementById("nomeSelect");
    var animalSelect = document.getElementById("animalSelect");
    var profissaoSelect = document.getElementById("profissaoSelect");
    var esporteSelect = document.getElementById("esporteSelect")

    // Value

    var corSelecionada = corSelect.value;
    var contaSelecionada = contaSelect.value;
    var nomeSelecionada = nomeSelect.value;
    var animalSelecionada = animalSelect.value;
    var profissaoSelecionada = profissaoSelect.value;
    var esporteSelecionada = esporteSelect.value

    // Verificação dos resultados

    if (corSelecionada === "4" && contaSelecionada === "1" && nomeSelecionada === "1" &&
        animalSelecionada === "0" && profissaoSelecionada === "1" && esporteSelecionada === "4") {
        numero1 = 1;
    } else {
        numero1 = 0;
    }

    mudarCorElemento(elemento, corSelecionada);

    verificarResultados();
}

function verificar2() {

    var elemento = document.getElementById("background-selecao2");
    var corSelect = document.getElementById("corSelect2");
    var contaSelect = document.getElementById("contaSelect2");
    var nomeSelect = document.getElementById("nomeSelect2");
    var animalSelect = document.getElementById("animalSelect2");
    var profissaoSelect = document.getElementById("profissaoSelect2");
    var esporteSelect = document.getElementById("esporteSelect2")

    // Value

    var corSelecionada = corSelect.value;
    var contaSelecionada = contaSelect.value;
    var nomeSelecionada = nomeSelect.value;
    var animalSelecionada = animalSelect.value;
    var profissaoSelecionada = profissaoSelect.value;
    var esporteSelecionada = esporteSelect.value

    // Verificação dos resultados

    if (corSelecionada === "0" && contaSelecionada === "2" && nomeSelecionada === "3" &&
        animalSelecionada === "3" && profissaoSelecionada === "2" && esporteSelecionada == "0") {
        numero2 = 1;
    } else {
        numero2 = 0;
    }

    mudarCorElemento(elemento, corSelecionada);

    verificarResultados();
}

function verificar3() {

    var elemento = document.getElementById("background-selecao3");
    var corSelect = document.getElementById("corSelect3");
    var contaSelect = document.getElementById("contaSelect3");
    var nomeSelect = document.getElementById("nomeSelect3");
    var animalSelect = document.getElementById("animalSelect3");
    var profissaoSelect = document.getElementById("profissaoSelect3");
    var esporteSelect = document.getElementById("esporteSelect3")

    // Value

    var corSelecionada = corSelect.value;
    var contaSelecionada = contaSelect.value;
    var nomeSelecionada = nomeSelect.value;
    var animalSelecionada = animalSelect.value;
    var profissaoSelecionada = profissaoSelect.value;
    var esporteSelecionada = esporteSelect.value

    // Verificação dos resultados

    if (corSelecionada === "3" && contaSelecionada === "3" && nomeSelecionada === "4" &&
        animalSelecionada === "2" && profissaoSelecionada === "3" && esporteSelecionada == "3") {
        numero3 = 1;
    } else {
        numero3 = 0;
    }

    mudarCorElemento(elemento, corSelecionada);

    verificarResultados();
}

function verificar4() {

    var elemento = document.getElementById("background-selecao4");
    var corSelect = document.getElementById("corSelect4");
    var contaSelect = document.getElementById("contaSelect4");
    var nomeSelect = document.getElementById("nomeSelect4");
    var animalSelect = document.getElementById("animalSelect4");
    var profissaoSelect = document.getElementById("profissaoSelect4");
    var esporteSelect = document.getElementById("esporteSelect4")

    // Value

    var corSelecionada = corSelect.value;
    var contaSelecionada = contaSelect.value;
    var nomeSelecionada = nomeSelect.value;
    var animalSelecionada = animalSelect.value;
    var profissaoSelecionada = profissaoSelect.value;
    var esporteSelecionada = esporteSelect.value

    // Verificação dos resultados

    if (corSelecionada === "2" && contaSelecionada === "0" && nomeSelecionada === "0" &&
        animalSelecionada === "4" && profissaoSelecionada === "0" && esporteSelecionada == "2") {
        numero4 = 1;
    } else {
        numero4 = 0;
    }

    mudarCorElemento(elemento, corSelecionada);

    verificarResultados();
}

function verificar5() {

    var elemento = document.getElementById("background-selecao5");
    var corSelect = document.getElementById("corSelect5");
    var contaSelect = document.getElementById("contaSelect5");
    var nomeSelect = document.getElementById("nomeSelect5");
    var animalSelect = document.getElementById("animalSelect5");
    var profissaoSelect = document.getElementById("profissaoSelect5");
    var esporteSelect = document.getElementById("esporteSelect5")

    // Value

    var corSelecionada = corSelect.value;
    var contaSelecionada = contaSelect.value;
    var nomeSelecionada = nomeSelect.value;
    var animalSelecionada = animalSelect.value;
    var profissaoSelecionada = profissaoSelect.value;
    var esporteSelecionada = esporteSelect.value

    // Verificação dos resultados

    if (corSelecionada === "1" && contaSelecionada === "4" && nomeSelecionada === "2" &&
        animalSelecionada === "1" && profissaoSelecionada === "4" && esporteSelecionada == "1") {
        numero5 = 1;
    } else {
        numero5 = 0;
    }

    mudarCorElemento(elemento, corSelecionada);

    verificarResultados();
}




function mudarCorElemento(elemento, corSelecionada) {

    if (corSelecionada === "-1") {
        elemento.style.backgroundColor = "#CCC";
    } else if (corSelecionada === "0") {
        elemento.style.backgroundColor = "#FFC222";
    } else if (corSelecionada === "1") {
        elemento.style.backgroundColor = "#1D44B8";
    } else if (corSelecionada === "2") {
        elemento.style.backgroundColor = "#FFFFFF";
    } else if (corSelecionada === "3") {
        elemento.style.backgroundColor = "#008000";
    } else if (corSelecionada === "4") {
        elemento.style.backgroundColor = "#FF0000";
    }

}

function verificarResultados() {

    if (numero1 == 1 && numero2 == 1 && numero3 == 1 && numero4 == 1 && numero5 == 1) {
        alert("Parabéns pela conclusão do teste lógico! Sua habilidade em resolver desafios mostra sua mente afiada e determinação.");
    }

}