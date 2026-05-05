function gerarCPF() {
    const container = document.getElementById("resposta");
    const opcaoSelecionada = document.querySelector('input[name="format"]:checked');

    container.innerHTML = '';

    let cpf = '';
    let numerosCPF;

    do {
        numerosCPF = gerarNumerosAleatorios(0, 9);
    } while (cpfSequenciaRepetida(numerosCPF));

    let digitoValidador1 = gerarDigitoValidador(numerosCPF);
    numerosCPF.push(digitoValidador1);

    let digitoValidador2 = gerarDigitoValidador(numerosCPF);
    numerosCPF.push(digitoValidador2);

    if (opcaoSelecionada.value === "true") {
        cpf = formatarCPF(numerosCPF);
    } else {
        cpf = juntarNumerosCPF(numerosCPF);
    }

    container.innerHTML = cpf;
}

function gerarNumerosAleatorios(min, max) {
    let numerosBase = [];

    for (let i = 0; i < 9; i++) {
        const numeroAleatorio =
            Math.floor(Math.random() * (max - min + 1)) + min;

        numerosBase.push(numeroAleatorio);
    }

    return numerosBase;
}

function gerarDigitoValidador(numerosBase) {
    let contador = numerosBase.length + 1;
    let somador = 0;
    let resto = 0;

    numerosBase.forEach(numero => {
        somador += numero * contador;
        contador--;
    });

    resto = calcularResto(somador);

    return resto;
}

function calcularResto(somaTotal) {
    let restoDivisao = (somaTotal * 10) % 11;

    if (restoDivisao === 10) {
        restoDivisao = 0;
    }

    return restoDivisao;
}

function copiarCpfGerado() {
    const buscaCPF = document.getElementById("resposta");
    const cpfTexto = buscaCPF.innerHTML;

    navigator.clipboard.writeText(cpfTexto)
        .then(() => {
            alert("Copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar:", err);
        });
}

function formatarCPF(valor) {
    const cpfTexto = juntarNumerosCPF(valor);

    return cpfTexto.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        "$1.$2.$3-$4"
    );
}

function juntarNumerosCPF(valor) {
    return valor.join("");
}

function cpfSequenciaRepetida(vetorCPF) {
    for (let i = 1; i < vetorCPF.length; i++) {
        if (vetorCPF[i] !== vetorCPF[0]) {
            return false;
        }
    }

    return true;
}