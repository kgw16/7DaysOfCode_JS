let condicional = true;
let numero1 = 0;
let numero2 = 0;
let resultado = 0;

while(condicional){
    let operacaoEscolhida = prompt('Escola uma operação a ser realizada entre soma, subtracao, multiplicacao, divisao ou se desejar, sair, para finalizar o programa. ')

    if(operacaoEscolhida == 'sair'){
        break;
    }

    if(operacaoEscolhida != "soma" || operacaoEscolhida != "subtracao" || operacaoEscolhida != "multiplicaccao" || operacaoEscolhida != "divisao" ){
        continue;
    }

    numero1 = parseFloat(prompt('digite o primeiro numero')) 
    numero2 = parseFloat(prompt('digite o segundo numero')) 
    
    if(operacaoEscolhida == 'soma'){
        soma(numero1,numero2);
    }

    if(operacaoEscolhida == 'subtracao'){
        subtracao(numero1,numero2);
    }

    if(operacaoEscolhida == 'multiplicacao'){
        multiplicacao(numero1,numero2);
    }

    if(operacaoEscolhida == 'divisao'){
        divisao(numero1,numero2);
    }
    
}


function soma(a,b){
    resultado = a + b;
    alert(resultado) ;
}
function subtracao(a,b){
    resultado = a - b;
    alert(resultado) ;
}
function multiplicacao(a,b){
    resultado = a*b;
    alert(resultado) ;
}
function divisao(a,b){
    resultado = a / b;
    alert(resultado) ;
}









// Para o exercício de hoje: você já parou para pensar como uma calculadora funciona?

// Ela pede para você digitar um número, depois você seleciona um tipo de operação, um outro número, e ela faz sozinha o cálculo para te mostrar o resultado! Incrível, né?

// Neste último desafio, a minha proposta para você é: crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.

// Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.

// Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.

// As opções disponíveis deverão ser: soma, subtração, multiplicação, divisão, e sair. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".