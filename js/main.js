const controleAtributos = document.querySelectorAll('.controle');
const estatisticas = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

function atualizaEstatistica(peca, ajuste) {
    estatisticas.forEach(elemento => {
        if(ajuste === "-") {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        } else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }
    });
}

function ajustaValores(ajuste, input, evento) {
    if(ajuste === "-") {
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
            atualizaEstatistica(evento.target.dataset.peca, ajuste);
        }
    }
    else {
        input.value = parseInt(input.value) + 1;
        atualizaEstatistica(evento.target.dataset.peca, ajuste);
    }
}

controleAtributos.forEach(function (elemento) {
    
    const controleAjustes = elemento.querySelectorAll('[data-controle-ajuste]');
    const input = elemento.querySelector('[data-controle-contador]');

    controleAjustes.forEach(elemento => {
        elemento.addEventListener('click', function (evento){
            ajustaValores(elemento.getAttribute('data-controle-ajuste'), input, evento);
        });
    });
});

function trocaImagem(cor){
    document.querySelector(".robo").src="assets/img/robotron/Robotron 2000 - " + cor + ".png";
 }
