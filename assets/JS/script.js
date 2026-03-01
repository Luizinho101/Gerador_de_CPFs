
function main(){

    let cpf = [];

    console.log("Olá mundo")

    for(let i =0; i < 9; i ++){
        let numeroAleatorio = geraValorAleatorio(0, 9);

        cpf[i] = numeroAleatorio;
    }

    let primeiroValidador = validaPrimeiroNumero(cpf, 10);
   

    cpf[9] = primeiroValidador;

     let segundoValidador = validaSegundoNumero(cpf, 11);
    cpf[10] = segundoValidador;

    let convertido = cpf.join('');

     console.log(convertido);

    document.getElementById('resposta').innerHTML = convertido;
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