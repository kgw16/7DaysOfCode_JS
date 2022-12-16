const nome = prompt("Digite a seu nome:")
const idade = prompt('Quantos anos você tem?')
const linguagem = prompt('Qual linguagem de programação você está estudando?')

alert("Olá " + nome + ", você tem " + idade +" anos e já está aprendendo " + linguagem + "!")

const resposta = prompt( "Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")

if(resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}

const botao = document.getElementById("botao")
botao.addEventListener("click", ()=> window.location.reload())
// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?
// - "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"


// Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

// Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

// E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?