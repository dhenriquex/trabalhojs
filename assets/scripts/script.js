// Configuração do canvas
const canvas = document.getElementById("avatarCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");

// Base de dados das imagens
const imagemDB = {
  base: ["./img/base_contorno.png"],
  olhos: [
    "./img/olho_1.png",
    "./img/olho_2.png",
    "./img/olho_3.png",
    "./img/olho_4.png",
  ],
  nariz: [
    "./img/nariz_1.png",
    "./img/nariz_2.png",
    "./img/nariz_3.png",
  ],
  cabelo: [
    "./img/cabelo_1.png",
    "./img/cabelo_2.png",
    "./img/cabelo_3.png",
  ],
  chapeu: [
    "./img/chapeu_1.png",
    "./img/chapeu_2.png",
    "./img/chapeu_3.png",
    "./img/chapeu_4.png",
    "./img/chapeu_5.png",
  ],
  boca: [
    "./img/boca_1.png",
    "./img/boca_2.png",
    "./img/boca_3.png",
    "./img/boca_4.png",
  ],
  roupa: [
    "./img/roupa_1.png",
    "./img/roupa_2.png",
    "./img/roupa_3.png",
  ],
  fundo: [
    "./img/fundo.png",
  ],
  detalheFundo: [
    "./img/detalheFundo_1.png",
    "./img/detalheFundo_2.png"
  ],
  baseOlho: [
    "./img/olhoFundo_1.png",
    "./img/olhoFundo_2.png",
    "./img/olhoFundo_3.png"
  ],
  baseCor: [
    "./img/base_cor.png"
  ],
  bochecha: ["./img/bochecha.png"],
};
// Estado atual do avatar
const avatar = {
  base: null,
  olhos: null,
  nariz: null,
  cabelo: null,
  chapeu:null,
  boca: null,
  roupa: null,
  fundo: null,
  detalheFundo: null,
  baseOlho: null,
  baseCor: null,
  bochecha: null,
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
    // console.log(
    //   `Imagens carregadas para ${category}:`,
    //   imagensCarregadas[category]
    // );
  }
  desenharAvatar();
}

// Função para criar os botões de opções
function criarOpcoesBotoes(category, urls) {
  const container = document.querySelector(`#${category}-options .opcoes-grid`);
  
  // Redefinir item selecionado para nenhum
  const noneBtn = document.createElement("button");
  noneBtn.className = "opcao-btn";
  noneBtn.dataset.category = category;
  noneBtn.dataset.option = ""; 
  noneBtn.title = "X";
  noneBtn.innerText = "X";
  noneBtn.onclick = () => {
    avatar[category] = null;
    atualizarBotoesAtivos(category, null);
    desenharAvatar();
  };
  container.appendChild(noneBtn);
  
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

function atualizarBotoesAtivos(category, selectedIndex) {
  const container = document.querySelector(`#${category}-options .opcoes-grid`);
  container.querySelectorAll(".opcao-btn").forEach((btn) => {
    const opt = btn.dataset.option === "" ? null : Number(btn.dataset.option);
    if (opt === selectedIndex) btn.classList.add("selected");
    else btn.classList.remove("selected");
  });
}

// Gerar aleatório
function gerarAvatarAleatorio() {
  for (const categoria in imagemDB) {
    const opcoes = imagemDB[categoria];
    if (Array.isArray(opcoes) && opcoes.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
      avatar[categoria] = indiceAleatorio;
      atualizarBotoesAtivos(categoria, avatar[categoria]);
    }
  }
  // Aleatorizar cores dos traços
  for (const cor in strokeColors) {
    strokeColors[cor] = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const picker = document.getElementById('strokeColor-' + cor);
    if (picker) picker.value = strokeColors[cor];
  }
  desenharAvatar();
}
