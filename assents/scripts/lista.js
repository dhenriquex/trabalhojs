//selecao de elementos Dom
const categoriaBtn = document.querySelectorAll("[data-category]");
const opcaoSec = document.querySelectorAll(".opcao");
const opcaoBtn = document.querySelectorAll(".opcao-btn");
// função para alterar a categoria visivel
function escolherCategoria(category) {
    //retira a classe active e esconde todas as opcçoes das demais categoria
  categoriaBtn.forEach((btn) => btn.classList.remove("active"));
  opcaoSec.forEach((section) => section.classList.remove("active"));

  const CategoriaBtnSelecionado = document.querySelector(
    `[data-category="${category}"]`
  );
  // encontrea o  o categoria selecionada
  const sectionSelecionado = document.getElementById(`${category}-options`);
  // Se ambos os elementos existem, ativa os selecionados
  if (CategoriaBtnSelecionado && sectionSelecionado) {
    CategoriaBtnSelecionado.classList.add("active");
    sectionSelecionado.classList.add("active");
  }
}

categoriaBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    escolherCategoria(category);
  });
});

opcaoBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const categoria = Object.keys(button.dataset)[0];
    const categoriaBtn = document.querySelectorAll(`[data-${categoria}]`);
    categoriaBtn.forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");

    const value = button.dataset[categoria];
    avatarState[categoria] = parseInt(value);

    console.log("Avatar atualizado:", avatarState);
    updateAvatar();
  });
});

updateAvatar();
