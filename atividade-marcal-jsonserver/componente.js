const template = document.createElement("template");
const style = document.createElement("style");
const globalStyles = new CSSStyleSheet();
globalStyles.replaceSync(`
.produto img {
    max-width: 100%;
    height: auto;
}

nav {
    background-color: rgb(150, 236, 232);
    overflow: hidden;
    width: calc(100% - 40px);
    text-align: center;
    margin: 10px;

}

nav a {
    display: inline-block;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    margin-inline-start: 80px;
    margin-inline-end: 80px;

}

/* Estilo para o contêiner de produtos */
.produto-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* Espaçamento entre os produtos */
    justify-content: space-around;
}


/* Estilo para cada produto */
.produto {
    width: 300px;
    /* Largura fixa para todos os produtos */
    box-sizing: border-box;
    /* Inclui padding e border no width */
    text-align: center;
    /* Centraliza o texto dentro do produto */
    border: 1px solid #ddd;
    /* Adiciona uma borda leve */
    padding: 10px;
    /* Espaçamento interno */
    border-radius: 8px;
    /* Bordas arredondadas */
    background-color: #f9f9f9;
    /* Cor de fundo clara */
}


/* Estilo para as imagens */
.produto img {
    width: 100%;
    /* Faz com que a imagem preencha o contêiner do produto */
    height: 300px;
    /* Define a altura das imagens para manter o tamanho consistente */
    object-fit: cover;
    /* Faz com que a imagem cubra o contêiner sem distorcer */
    border-radius: 8px;
    /* Bordas arredondadas para as imagens */
}


/* Estilo para o botão */
.btn-primary {
    background-color: #007bff;
    /* Cor de fundo azul */
    color: white;
    /* Cor do texto branca */
    border: none;
    /* Remove a borda padrão */
    padding: 10px 20px;
    /* Espaçamento interno do botão */
    border-radius: 5px;
    /* Bordas arredondadas do botão */
    cursor: pointer;
    /* Muda o cursor para indicar que é clicável */
    text-decoration: none;
    /* Remove o sublinhado do link */
}


.btn-primary:hover {
    background-color: #0056b3;
    /* Cor do botão ao passar o mouse */
}
`);

template.innerHTML = `
  <slot name="imagem-produto">COLOQUE A TAG IMG AQUI</slot>
  <slot name="nome-produto">COLOQUE O NOME DO PRODUTO AQUI</slot>
  <slot name="descricao-produto">COLOQUE A DESCRIÇÃO DO PRODUTO AQUI</slot>
  <slot name="faixa-preco">COLOQUE A FAIXA DE PREÇO DO PRODUTO</slot>
  <slot name="botao"></slot>
`;

class Componente extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
    shadowRoot.adoptedStyleSheets = [globalStyles];
  }
}

customElements.define("componente-produto", Componente);
