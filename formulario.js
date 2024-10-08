var animes = [];
var elementos = 0;

function guardarDados(event) {
    var anime = document.getElementById("anime").value;
    var ano = document.getElementById("ano").value;
    var nota = document.getElementById("nota").value;
    var genero = document.getElementById("genero").
        options[document.getElementById("genero").
            selectedIndex].innerHTML;

    animes.push({
        'anime': anime,
        'ano': ano,
        'genero': genero,
        'nota': nota
    });

    event.preventDefault();
    exibirAnimes();
}

function limparCampos() {
    document.getElementById("anime").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("genero").selectedIndex = 0;
}

function exibirAnimes() {
    var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];

    var novaLinha = tabela.insertRow();

    var anime = novaLinha.insertCell(0);
    var genero = novaLinha.insertCell(1);
    var ano = novaLinha.insertCell(2);
    var nota = novaLinha.insertCell(3);

    anime.textContent = animes[elementos].anime;
    genero.textContent = animes[elementos].genero;
    ano.textContent = animes[elementos].ano;
    nota.textContent = animes[elementos].nota;

    elementos++;
}
