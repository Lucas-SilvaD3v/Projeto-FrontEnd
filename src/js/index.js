/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as roupas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as roupas
        passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada roupa, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
*/

// passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS
const botaoFiltrar = document.querySelector(".btn-filtrar");

// passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener("click", function () {
  // passo 3 - pegar os valores dos campos de categoria e preço
  const categoriaSelecionada = document.querySelector("#categoria").value;
  const precoMaximoSelecionado = document.querySelector("#preco").value;

  // passo 4 - para cada roupa, verificar se ela deve ser mostrada ou escondida baseado nos filtros que a pessoa digitou
  const roupas = document.querySelectorAll(".roupa");

  roupas.forEach(function (roupa) {
    const categoriaRoupa = roupa.dataset.categoria;
    const precoRoupa = roupa.dataset.preco;

    let mostrarRoupa = true;

    const temFiltroDeCategoria = categoriaSelecionada !== "";

    const roupaNaoBateComFiltroDeCategoria =
      categoriaSelecionada.toLowerCase() !== categoriaRoupa.toLowerCase();

    if (temFiltroDeCategoria && roupaNaoBateComFiltroDeCategoria) {
      mostrarRoupa = false;
    }

    const temFiltroDePreco = precoMaximoSelecionado !== "";
    
    const roupaNaoBateComFiltroDePrecoMaximo =
      parseFloat(precoRoupa) > parseFloat(precoMaximoSelecionado);

    if (temFiltroDePreco && roupaNaoBateComFiltroDePrecoMaximo) {
      mostrarRoupa = false;
    }

    if (mostrarRoupa) {
      roupa.classList.add("mostrar");
      roupa.classList.remove("esconder");
    } else {
      roupa.classList.remove("mostrar");
      roupa.classList.add("esconder");
    }
  });
});
