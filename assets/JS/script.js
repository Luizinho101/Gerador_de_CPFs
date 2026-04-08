function main() {
    const container = document.getElementById("resposta");
    const opcaoSelecionada = document.querySelector('input[name="format"]:checked');

    if (!opcaoSelecionada) {
        alert("Selecione uma opção!");
        return;
    }

    container.innerHTML = ''; 
    let cpf = [];

    for (let i = 0; i < 9; i++) {
        cpf[i] = geraValorAleatorio(0, 9);
    }
    cpf[9] = validaPrimeiroNumero(cpf, 10);
    cpf[10] = validaSegundoNumero(cpf, 11);

    let convertido = cpf.join(''); 

    
    const p = document.createElement('p');
    p.id = 'id_paragrafo';
    p.textContent = convertido; 
    container.appendChild(p);

   
    if (opcaoSelecionada.value === "true") {
        const cpfComPontos = gerarPotucaoCPF(); 
        p.textContent = cpfComPontos;
    }


    const btn_copiar = document.createElement('button');
    btn_copiar.textContent = 'Copiar';
    btn_copiar.onclick = function() {
        copiarCPF();
    };
    container.appendChild(btn_copiar);
}
function geraValorAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function validaPrimeiroNumero(array, valor1){
    let soma = 0;
    let contador = 0; 
    let restoDIvisao =0;
            
    for (let i = valor1; i >= 2; i--) {
        soma += array[contador] * i;
        contador++; 
    }
    restoDIvisao = (soma * 10) % 11;

    if(restoDIvisao == 10){
        restoDIvisao = 0;
    } 
       
    return restoDIvisao;
}

function validaSegundoNumero(array, valor2){
    let soma = 0;
    let contador = 0; 
    let restoDIvisao =0;
            
    for (let i = valor2; i >= 2; i--) {
              
        soma += array[contador] * i;
        contador++; 
    }

    restoDIvisao = (soma * 10) % 11;

    if(restoDIvisao == 10){
        restoDIvisao = 0;
    }      
    return restoDIvisao;
}

function copiarCPF(){

    const cpfTexto = document.getElementById('id_paragrafo').innerText;

    navigator.clipboard.writeText(cpfTexto).then(() => {
        alert("CPF copiado com sucesso!");
    }).catch(err => {
        console.error("Erro ao copiar: ", err);
    })
}

function gerarPotucaoCPF(){

    const cpfTexto = document.getElementById('id_paragrafo').innerText;
    const cpfFormatado =  cpfTexto.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    alert(cpfFormatado);
    return cpfFormatado;
}