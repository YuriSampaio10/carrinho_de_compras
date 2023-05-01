let quantidade = [];
const precos = [50.00, 80.00, 120.00, 150.00, 25.00];
let soma = 0


// obtendo os inputs e botões do HTML no JS
const produtos = document.getElementById("produtos");
const unidades = document.getElementById("unidades");
const produtostotal = document.getElementById("produtostotal");
const buttonAdiciona = document.getElementById("adicionarAoCarrinho");
const buttonTotal = document.getElementById("buttonTotal");
const buttonNotasDadas = document.getElementById("buttonNotasDadas");
const buttonCalcularPreco = document.getElementById('buttonCalcularPreco');
const btnVerEstoque = document.getElementById("btn-ver-estoque");
const tabela = document.getElementById("tabela-estoque");

// adicionando o listener aos botões
buttonAdiciona.addEventListener(onclick = "adicionarAoCarrinho()");
buttonTotal.addEventListener(onclick = "calcularValor()");
buttonCalcularPreco.addEventListener(onclick = "obterPrecoPorIndice()");
btnVerEstoque.addEventListener(onclick = "criarTabela()");

// buttonNotasDadas.addEventListener(onclick="NotasDadas()");


// função que irá adicionar os produtos ao carrinho e exibir o elert de que a foi adicionado
function adicionarAoCarrinho() {
    ProdutoSelecionado = produtos.value;
    unidadeSelecionada = parseInt(unidades.value);

    if (quantidade[ProdutoSelecionado]) {
        // Se já existir uma lista de quantidade para o Produto, adiciona a nova unidade a ela
        quantidade[ProdutoSelecionado].push(unidadeSelecionada);
    } else {
        // Caso contrário, cria uma nova lista de quantidade para o produto e adiciona a quantidade inicial
        quantidade[ProdutoSelecionado] = [unidadeSelecionada];
    }

    alert(`Item ${ProdutoSelecionado} adicionado, quantidade: ${unidadeSelecionada}`)
}



// função para calcular a quantidade total dos produtos
function calcularquantidadeTotal() {
    // Obtém o valor selecionado no seletor de produtos
    ProdutoSelecionado = produtostotal.value;

    var listaProdutos = quantidade[ProdutoSelecionado]; // Obtém a lista de quantidades para o produto selecionado

    if (listaProdutos) {
        //calcula o total
        soma = listaProdutos.reduce(function (a, b) {
            return a + b;
        });

        alert(`A quantidade de ${ProdutoSelecionado} é: ${soma.toFixed(0)}`);
    } else {
        alert("Não existe produtos no carrinho")
    }


}



// Função para obter o preço total com base no índice da opção
function obterPrecoPorIndice(indice) {

    // Obter o índice da opção selecionada
    var indice = produtostotal.selectedIndex;

    // Verificar se o índice está dentro dos limites do array
    if (indice >= 0 && indice < precos.length) {
        return alert(`o valor de cada peça é ${precos[indice]} e o total é ${precos[indice] * soma}`);
    } else {
        return 0; // Valor padrão caso o índice seja inválido
    }
}



//adicionar evento para o botao

// verifica se o estoque está vazio
function criarTabela() {
    // Obtém o valor selecionado no seletor de produtos
    ProdutoSelecionado = produtostotal.value;

    var listaProdutos = quantidade[ProdutoSelecionado]; // Obtém a lista de quantidades para o produto selecionado

     if (listaProdutos === 0) {
        alert("não tem nada");
       
      } }



    // // seleciona campo da tabela
    // tabela.querySelector("tbody").innerHTML = "";


    // // cria uma tabela dentro do htmlx
    // quantidade.forEach(function (item) {

//         const tr = document.createElement("tr");
//         tr.innerHTML =
//             `<td>${item.nome}</td>
//             <td>${item.preco}</td>
//             <td>${item.quantidade}</td>
//             <td>${item.dataEntrada}</td>
//             <td><button> Remover do Estoque </button></td > `


//         // encontra o botão remover item
//         tr.querySelector("button").addEventListener("click", function () {


//             // encontra o item dentro do array
//             const index = estoque.indexOf(item);

//             // remove o item da tabela
//             estoque.splice(index, 1);

//             // remove a linha em branco do objeto
//             tabela.querySelector("tbody").removeChild(tr);
//         })

//         // adiciona uma linha a tabela
//         tabela.querySelector("tbody").appendChild(tr);
//     })

//     // mostrar tabela
//     tabela.style.display = "table";

// }








// function calcularValorTotalCarrinho() {

// // mostra as notas dadas para os filmes
// function NotasDadas() {
//     alert("Notas: " + notas[filmesMedia.value]);
// }