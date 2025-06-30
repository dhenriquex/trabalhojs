let categoriaAtiva = "base";
function inicializarNavegacao() {
  const listaItems = document.querySelectorAll(".lista li");
  const opcoes = document.querySelectorAll(".opcao");

  // Esconde todos os color pickers
  function esconderTodosPickers() {
    document.querySelectorAll('.color-picker-group').forEach(el => el.style.display = 'none');
  }
  // Mostra o color picker do tipo ativo
  function mostrarPicker(tipo) {
    esconderTodosPickers();
    const picker = document.getElementById('color-picker-group-' + tipo);
    if (picker) picker.style.display = 'flex';
  }
  // Ativa a categoria 'base' ao carregar
  listaItems.forEach((li) => li.classList.remove("active"));
  opcoes.forEach((opcao) => opcao.classList.remove("active"));
  document.querySelector('.lista li[data-category="base"]').classList.add("active");
  document.getElementById("base-options").classList.add("active");
  categoriaAtiva = "base";
  mostrarPicker('base');
  listaItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.dataset.category;

      // Atualiza lista ativa
      listaItems.forEach((li) => li.classList.remove("active"));
      item.classList.add("active");

      // Atualiza opção ativa
      opcoes.forEach((opcao) => opcao.classList.remove("active"));
      document.getElementById(`${category}-options`).classList.add("active");

      categoriaAtiva = category;
      mostrarPicker(category);
    });
  });
}