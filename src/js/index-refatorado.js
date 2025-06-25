// Passo 1 - Pega o botão de aplicar filtros
const botaoFiltrar = document.querySelector(".btn-filtrar");

botaoFiltrar.addEventListener("click", aplicarFiltros);

// Função que filtra as Roupa com base nos filtros de categoria e preço
function aplicarFiltros() {
  const categoriaSelecionada = pegarCategoriaSelecionada();
  const precoMaximoSelecionado = pegarPrecoMaximoSelecionado();
  const roupas = pegarRoupas();

  roupas.forEach(function (roupa) {
    const categoriaValida = verificarCategoria(roupa, categoriaSelecionada);
    const precoValido = verificarPreco(roupa, precoMaximoSelecionado);

    const deveMostrarRoupa = categoriaValida && precoValido;

    mostrarOuEsconderRoupa(roupa, deveMostrarRoupa);
  });
}

// Função para pegar o valor do campo de categoria
function pegarCategoriaSelecionada() {
  return document.querySelector("#categoria").value;
}

// Função para pegar o valor do campo de preço
function pegarPrecoMaximoSelecionado() {
  return document.querySelector("#preco").value;
}

// Função para pegar todas as roupas
function pegarRoupas() {
  return document.querySelectorAll(".roupa");
}

// Função para verificar se a roupa corresponde ao filtro de categoria
function verificarCategoria(roupa, categoriaSelecionada) {
  const categoriaRoupa = roupa.dataset.categoria;
  return categoriaSelecionada === "" || categoriaSelecionada.toLowerCase() === categoriaRoupa.toLowerCase();
}

// Função para verificar se a roupa corresponde ao filtro de preço
function verificarPreco(roupa, precoMaximoSelecionado) {
  const precoRoupa = roupa.dataset.preco;
  return precoMaximoSelecionado === "" || parseFloat(precoRoupa) <= parseFloat(precoMaximoSelecionado);
}

// Função para mostrar ou esconder a roupa
function mostrarOuEsconderRoupa(roupa, deveMostrar) {
  if (deveMostrar) {
    roupa.classList.add("mostrar");
    roupa.classList.remove("esconder");
  } else {
    roupa.classList.remove("mostrar");
    roupa.classList.add("esconder");
  }
}