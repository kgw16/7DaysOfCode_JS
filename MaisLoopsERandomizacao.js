const numeroSecreto = Math.floor(Math.random()*11);
let numeroChutado = ''
alert('tente acerta o numero secreto entre 0 e 10')

for(let i = 0; i < 3 ; i++){

    numeroChutado = prompt('faça um chute entre 0 e 10');
    let numeroChutadoConvertido =(parseInt(numeroChutado) || parseInt(numeroChutado) == 0)  ? "number": "string";
    
    console.log(numeroChutadoConvertido)

    if(numeroChutado == numeroSecreto){
        alert('parabens vc acertou o número secreto é: ' + numeroSecreto)
        break;
    }
    if(i==2){
        alert('o numero secreto é: ' + numeroSecreto)
        break
    }
    if(numeroChutadoConvertido == "string"){
        alert('vc não digitou um número, digite entre o número 0 e 10')
    }
    if(numeroChutado < 0){
        alert('vc errou, o número digitado é menor que 0, esse numero tem que ser entre (0 e 10)')
    }
    if(numeroChutado > 10){
        alert('vc errou, o número digitado é maior que 10, esse numero tem que ser entre (0 e 10)')
    }
    if(numeroChutado > 0 && numeroChutado < numeroSecreto){
        alert('vc errou, o numero secreto é maior do que o numero que vc chutou')
    }
    if(numeroChutado < 10 && numeroChutado > numeroSecreto){
        alert('vc errou, o numero secreto é menor do que o numero que vc chutou')
    }
}



// Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

// Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

// Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

// No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

// Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.