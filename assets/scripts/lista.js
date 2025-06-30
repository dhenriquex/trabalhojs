let categoriaAtiva = "base";
function inicializarNavegacao() {
  const listaItems = document.querySelectorAll(".lista li");
  const opcoes = document.querySelectorAll(".opcao");

  // Esconde todos os color pick
  function esconderTodosPickers() {
    document.querySelectorAll('.color-picker-group').forEach(el => el.style.display = 'none');
  }
  // Mostra o color picker do tipo ativo
  function mostrarPicker(tipo) {
    esconderTodosPickers();
    const picker = document.getElementById('color-picker-group-' + tipo);
    if (picker) picker.style.display = 'flex';
  }
  // Deixa todos os color pickers invisíveis, mas clicáveis, e exibe uma bola colorida customizada
  document.querySelectorAll('.color-picker-group input[type="color"]').forEach(el => {
    el.style.opacity = '0';
    el.style.position = 'absolute';
    el.style.width = '2.5em';
    el.style.height = '2.5em';
    el.style.margin = '0';
    el.style.cursor = 'pointer';
    el.style.zIndex = '2';
    el.style.left = '0';
    el.style.top = '0';
    el.style.right = '0';
    el.style.bottom = '0';
    el.style.inset = '0';
    // Cria uma bola colorida customizada
    let wrapper = el.parentElement;
    if (!wrapper.classList.contains('color-ball-wrapper')) {
      wrapper.style.position = 'relative';
      wrapper.classList.add('color-ball-wrapper');
      let ball = document.createElement('span');
      ball.className = 'color-ball-custom';
      ball.style.display = 'inline-block';
      ball.style.width = '2.5em';
      ball.style.height = '2.5em';
      ball.style.borderRadius = '50%';
      ball.style.background = el.value;
      ball.style.boxShadow = '0 2px 8px #0002';
      ball.style.border = '2px solid #bbb';
      ball.style.position = 'relative';
      ball.style.zIndex = '1';
      ball.style.pointerEvents = 'auto';
      wrapper.insertBefore(ball, el);
      // Faz o span disparar o click do input
      ball.addEventListener('click', function() {
        el.click();
      });
      // Atualiza a cor da bola ao mudar o input
      el.addEventListener('input', function() {
        ball.style.background = this.value;
      });
    }
  });
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