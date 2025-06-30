// Configuração do canvas
const canvas = document.getElementById("avatarCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");

// Base de dados das imagens
const imagemDB = {
  base: ["./img/base.png"],
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
    "./img/olho_1.png",
    "./img/olho_2.png",
    "./img/olho_3.png",
    "./img/olho_4.png",
  ],
  boca: [
    "./img/boca_1.png",
    "./img/boca_2.png",
    "./img/boca_3.png",
    "./img/boca_4.png",
  ],
  roupa: [
    "./img/olho_1.png",
    "./img/olho_2.png",
    "./img/olho_3.png",
    "./img/olho_4.png",
  ],
};
// Estado atual do avatar
const avatar = {
  base: null,
  olhos: null,
  nariz: null,
  cabelo: null,
  boca: null,
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
