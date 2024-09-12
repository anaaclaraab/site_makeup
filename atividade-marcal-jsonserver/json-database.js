document.addEventListener("DOMContentLoaded", () => {
  const linkAPI = "http://localhost:3000/posts";

  const listaProduto = document.getElementById("produto-lista");

  function carregarProdutos() {
    fetch(linkAPI)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((product) => {
          const elementHTML = `
            <componente-produto class="produto">
              <img
                slot="imagem-produto"
                src="${product.image}"
                alt="${product.name}"
              />

              <h2 slot="nome-produto">
                ${product.name}
              </h2>

              <p slot="descricao-produto">
                ${product.description}
              </p>

              <p slot="faixa-preco">
                ${product.price}
              </p>

              <button class="btn-primary adicionar-produto"
                slot="botao"
                data-id="${product.id}"
                data-name="${product.name}"
                data-price="${product.price}"
                data-image="${product.image}">Adicionar ao carrinho</button>
              </a>
            </componente-produto>
            `;
          listaProduto.insertAdjacentHTML("beforeend", elementHTML);
        });

        document.querySelectorAll(".adicionar-produto").forEach((botao) => {
          botao.addEventListener("click", (event) => {
            const produto = {
              id: event.target.getAttribute("data-id"),
              name: event.target.getAttribute("data-name"),
              price: event.target.getAttribute("data-price"),
              image: event.target.getAttribute("data-image"),
            };
            adicionarAoCarrinho(produto);
          });
        });
      })
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }

  function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produto);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert(`O produto ${produto.name} foi adicionado com sucesso!`);
  }

  carregarProdutos();
});
