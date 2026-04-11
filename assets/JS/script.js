function main() {
    const container = document.getElementById("resposta");
    const opcaoSelecionada = document.querySelector('input[name="format"]:checked');


    container.innerHTML = '';

    let cpf = ''; 
    let tamanho;
    do {
        tamanho = geraNumerosBase(0, 9);
    } while (pegaSequenciaRepetida(tamanho));
  
    let digitoValidador1 = gerarDigitosValidadores(tamanho);
    tamanho.push(digitoValidador1);
    let digitoValidador2 = gerarDigitosValidadores(tamanho);
    tamanho.push(digitoValidador2);

    if (opcaoSelecionada.value === "true") {
       cpf = gerarPotucaoCPF(tamanho); 
    }else{
        cpf = limparCPF(tamanho);
    }
   container.innerHTML = cpf;
}


function geraNumerosBase(min, max) {
    let numerosBase = [];
    for(let i = 0; i < 9; i++)
    {
        const numeroAleatorio =  Math.floor(Math.random() * (max - min + 1)) + min; 
        numerosBase.push(numeroAleatorio);
    }
    return numerosBase;
}

function gerarDigitosValidadores(numerosBase){

    let contador = numerosBase.length  + 1;
    let somador  = 0;
    let resto = 0;

    numerosBase.forEach(numero => {
        somador += numero * contador;
        contador--;
    });
    
    resto = calcularResto(somador);
    return resto;
}

function calcularResto(somaTotal){

    let restoDIvisao = 0;

    restoDIvisao = (somaTotal * 10) % 11;

    if(restoDIvisao == 10){
        restoDIvisao = 0;
    }
    return restoDIvisao;      
}

function copiarCPF(){
    const buscaCPF = document.getElementById("resposta");
    const innerHtmlCPF = buscaCPF.innerHTML

    navigator.clipboard.writeText(innerHtmlCPF).then(() => {
        alert('Copiado com Sucesso !!')
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    })
}

function gerarPotucaoCPF(valor){
    const cpfTexto = limparCPF(valor);
    const cpfFormatado =  cpfTexto.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    return cpfFormatado;
}

function limparCPF(valor){
    const cpfTexto = valor.join("");
    return cpfTexto;
}

function pegaSequenciaRepetida(vetorCPF) {
    for (let i = 1; i < vetorCPF.length; i++) {
        if (vetorCPF[i] !== vetorCPF[0]) {
            return false; 
        }
    }
    return true; 
}