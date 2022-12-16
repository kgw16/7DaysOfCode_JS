const opcao = prompt("digite 1 para escolher frontend e 2 para backend");
let reactOuVue = ''
let cOuJava = ''

if(opcao == 1) {
    reactOuVue = prompt("digite 1 para react e digite 2 para vue");
}else{
    cOuJava = prompt("digite 1 para c# ou digite 2 para java ");
}

const fullstackOuEspecialista = prompt("digite 1 para fullstack ou 2 para especialista");

if(opcao == 1 && reactOuVue == 1){
    alert('voce escolheu frontend, React');
}
if(opcao == 1 && reactOuVue == 2){
    alert('voce escolheu frontend, Vue');
}

if(opcao == 2 && cOuJava == 1){
    alert('vc escolheu backend, C#');
}
if(opcao == 2 && cOuJava == 2){
    alert('vc escolheu backend, Java');
}

if(fullstackOuEspecialista == 1){
    alert('fullstack')
}else{
    alert('especialista')
}


let outraLinguagens = prompt('digite ok se vc gostaria de aprender outras tecnologias')
let tecnologias = []
do{
    if (outraLinguagens == 'ok') {
        let tecnologia = prompt('digite a tecnologia que vc gostaria de aprender')
        alert('muito boa a iniciativa de aprender uma nova linguagem')
        tecnologias.push(tecnologia);
        outraLinguagens = prompt('digite ok se vc gostaria de aprender outras tecnologias')
    }else{
        outraLinguagens = null
    }
  
}while(outraLinguagens == 'ok')

alert(tecnologias)

// 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

// 2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

// 3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.