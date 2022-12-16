let lista = {
    frutas:[],
    laticinios:[],
    congelados:[],
    doces:[]
}


let inicio = ''
let categoria =''
let itemRemovido = ''
let indexItem = ''


do{ 
    if (lista['frutas'].length == 0 && lista['laticinios'].length == 0 && lista['congelados'].length == 0 && lista['doces'].length == 0) {
        inicio = prompt('vc quer adicionar algum item na sua lista de compra? digite sim ou nao ')
    }else{
        inicio = prompt('vc quer adicionar algum item na sua lista de compra? digite sim ou nao ou digite remover se quiser remover algum item da sua lista')
    }

    if(inicio == 'sim'){
        const item = prompt('digite o item da lista')
        categoria = prompt('qual a categoria vc quer colocar esse item: frutas, laticinios, congelados, doces')
        lista[categoria].push(item);
        console.log(lista[categoria])
    }

    if (inicio == 'remover') {
        itemRemovido = prompt('digite o item a ser removido');

        indexItem = lista['frutas'].indexOf(itemRemovido)
        if(indexItem != -1)
        lista['frutas'].splice(indexItem,1)

        indexItem = lista['laticinios'].indexOf(itemRemovido)
        if(indexItem != -1)
        lista['laticinios'].splice(indexItem,1)

        indexItem = lista['congelados'].indexOf(itemRemovido)
        if(indexItem != -1)
        lista['congelados'].splice(indexItem,1)

        indexItem = lista['doces'].indexOf(itemRemovido)
        if(indexItem != -1)
        lista['doces'].splice(indexItem,1)

        console.log(lista)

        inicio = 'sim'
    } 

}while(inicio == "sim")

let container = document.getElementById('mensagem')

let mensagem = `
    <h1>Lista de compras</p>
    <p>Frutas: ${lista['frutas']}</p>
    <p>Laticinios: ${lista['laticinios']}</p>
    <p>Congelados: ${lista['congelados']}</p>
    <p>Doces: ${lista['doces']}</p>
`
container.innerHTML = mensagem









//indexOf('Banana')
//frutas.splice(pos, 1)

//var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.



// Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

// Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

// Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

// Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

// Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de "você deseja adicionar uma comida na lista de compras"?

// A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

// Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

// Por fim, ele voltará para o ciclo inicial de perguntas.

// Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

// Por exemplo: "Não foi possível encontrar o item dentro da lista!"

// Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.