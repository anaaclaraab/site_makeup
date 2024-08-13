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

                        <a href="ver_mais.html">
                            <button class="btn-primary">Adicionar ao carrinho</button>
                        </a>
                    </coponente-produto>
                    `;
                    listaProduto.insertAdjacentHTML("beforeend", elementHTML);
                });
            }).catch((error) => console.error("Erro ao carregar produtos:", error));
    }

    carregarProdutos();
})