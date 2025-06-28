// Configuração do canvas
const canvas = document.getElementById("avatarCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");

// Base de dados das imagens
const imagemDB = {
  olhos: [
    "./assents/img/boca/gt1.jpg",
    "./assents/img/boca/gt1.jpg",
    "./assents/img/boca/gt1.jpg",
  ],
  nariz: [
    "./assents/img/boca/gt2.jpg",
    "./assents/img/boca/gt3.jpg",
    "./assents/img/boca/gt1.jpg",
  ],
  cabelo: [
    "./assents/img/boca/gt2.jpg",
    "./assents/img/boca/gt3.jpg",
    "./assents/img/boca/gt1.jpg",
  ],
  boca: [
    "./assents/img/boca/gt2.jpg",
    "./assents/img/boca/gt3.jpg",
    "./assents/img/boca/gt1.jpg",
  ],
  orelha: [
    "../img/orelha/gt1.jpg",
    "../img/orelha/gt2.webp",
    "../img/orelha/gt3.jpg",
  ],
  franja: [
    "../img/franja/gt1.jpg",
    "../img/franja/gt2.webp",
    "../img/franja/gt3.jpg",
  ],
  roupa: [
    "../img/roupa/gt1.jpg",
    "../img/roupa/gt2.webp",
    "../img/roupa/gt3.jpg",
  ],
};
// Estado atual do avatar
const avatar = {
  olhos: null,
  nariz: null,
  cabelo: null,
  boca: null,
  orelha: null,
  franja: null,
  roupa: null,
};

let imagensCarregadas = {};

// Função para carregar uma imagem
function carregarImagem(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.src = url;
  });
}

// Função para carregar todas as imagens
async function carregarTodasImagens() {
  for (const [category, urls] of Object.entries(imagemDB)) {
    imagensCarregadas[category] = [];
    for (const url of urls) {
      const img = await carregarImagem(url);
      imagensCarregadas[category].push(img);
    }
    criarOpcoesBotoes(category, urls);
  }
  desenharAvatar();
}

// Função para criar os botões de opções
function criarOpcoesBotoes(category, urls) {
  const container = document.querySelector(`#${category}-options .opcoes-grid`);
  // Botões para cada opção
  urls.forEach((url, index) => {
    const button = document.createElement("button");
    button.className = "opcao-btn";
    button.dataset.category = category;
    button.dataset.option = index;
    button.title = `${category} ${index + 1}`;
    // Tenta usar a imagem real, senão usa placeholder
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.alt = `${category} ${index + 1}`;
    imgElement.onerror = () => {
      button.innerHTML = `${category}<br>${index + 1}`;
    };
    button.appendChild(imgElement);
    button.onclick = () => {
      avatar[category] = index;
      atualizarBotoesAtivos(category, index);
      desenharAvatar();
    };
    container.appendChild(button);
  });
}
window.onload = function () {
  inicializarNavegacao();
  carregarTodasImagens();
};
