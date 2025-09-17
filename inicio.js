// Função de boas-vindas
function mostrarBoasVindas() {
  alert('Bem-vindo ao site de energia solar!');
}

// Função para validar o formulário
function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }
  return true;
}

// Função para enviar mensagem personalizada pelo WhatsApp
function enviarWhatsApp(event) {
  event.preventDefault();
  if (!validarFormulario()) return;

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = encodeURIComponent(
    `Olá, meu nome é ${nome}.\nTelefone: ${telefone}\nMensagem: ${mensagem}`
  );
  window.open(`https://wa.me/558288534437?text=${texto}`, '_blank');
}

// Inicialização ao carregar a página
window.onload = function() {
  mostrarBoasVindas();

  // Adiciona evento ao formulário
  const form = document.getElementById('whatsappForm');
  if (form) {
    form.addEventListener('submit', enviarWhatsApp);
  }
};
function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }
  return true;
}
function mostrarBoasVindas() {
  alert('Bem-vindo ao site de energia solar!');
}

function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos!');
    return false;
  }
  return true;
}

function enviarWhatsApp(event) {
  event.preventDefault();
  if (!validarFormulario()) return;

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = encodeURIComponent(
    `Olá, meu nome é ${nome}.\nTelefone: ${telefone}\nMensagem: ${mensagem}`
  );
  window.open(`https://wa.me/558288534437?text=${texto}`, '_blank');
}

window.onload = function() {
  mostrarBoasVindas();
  const form = document.getElementById('whatsappForm');
  if (form) {
    form.addEventListener('submit', enviarWhatsApp);
  }
};