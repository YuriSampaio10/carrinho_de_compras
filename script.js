let quantidade = [];
const precos = [50.00, 80.00, 120.00, 150.00, 25.00];

// obtendo os inputs e botões do HTML no JS
let produtos = document.getElementById("produtos");
let unidades = document.getElementById("unidades");
let produtostotal = document.getElementById("produtostotal");
let buttonAdiciona = document.getElementById("adicionarAoCarrinho");
let buttonTotal = document.getElementById("buttonTotal");
let buttonNotasDadas = document.getElementById("buttonNotasDadas");

// adicionando o listener aos botões
buttonAdiciona.addEventListener(onclick="adicionarAoCarrinho()");
buttonTotal.addEventListener(onclick="calcularValor()");
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
function calcularValor() {
    // Obtém o valor selecionado no seletor de produtos
    ProdutoSelecionado = produtostotal.value;

    var listaProdutos = quantidade[ProdutoSelecionado]; // Obtém a lista de quantidades para o produto selecionado
    var media = 0;

    if (listaProdutos) {
        //calcula o total
        var soma = listaProdutos.reduce(function (a, b) {
            return a + b;
        });
        
    }

    alert(`A quantidade de ${ProdutoSelecionado} é: ${soma.toFixed(0)}`);

}

// // mostra as notas dadas para os filmes
// function NotasDadas() {
//     alert("Notas: " + notas[filmesMedia.value]);
// }