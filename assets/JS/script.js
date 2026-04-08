const { createElement } = require("react");

function main(){

    let cpf = [];

    const container = document.getElementById("resposta");
    container.innerHTML = '';

    const p = document.createElement('p');
    p.id = 'id_paragrafo';


    const btn_copiar = document.createElement('button');
    btn_copiar.textContent = 'Copiar'
    btn_copiar.onclick = function (){
        copiarCPF();
    }


    for(let i =0; i < 9; i ++){
        let numeroAleatorio = geraValorAleatorio(0, 9);

        cpf[i] = numeroAleatorio;
    }

    let primeiroValidador = validaPrimeiroNumero(cpf, 10);
   

    cpf[9] = primeiroValidador;

     let segundoValidador = validaSegundoNumero(cpf, 11);
    cpf[10] = segundoValidador;

    let convertido = cpf.join('');

    p.innerHTML = convertido;

    container.appendChild(p);
    container.appendChild(btn_copiar);

    //document.getElementById('resposta').innerHTML = convertido + '<p>Copiar</p>';
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