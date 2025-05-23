function mostrarOpcao(checkbox) {
  const perguntaDiv = checkbox.closest('.pergunta');
  const select = perguntaDiv.querySelector('.percentual');
  const textarea = perguntaDiv.querySelector('.observacao');
  const simCheckbox = perguntaDiv.querySelector(`input[name="${checkbox.name.split('_')[0]}_sim"]`);
  const obsCheckbox = perguntaDiv.querySelector(`input[name="${checkbox.name.split('_')[0]}_obs"]`);

  // Mostrar select se "Sim" estiver marcado
  if (simCheckbox.checked) {
    select.style.display = 'inline-block';
  } else {
    select.style.display = 'none';
    select.value = '';
  }

  // Mostrar textarea se "Obs" estiver marcado
  if (obsCheckbox.checked) {
    textarea.style.display = 'block';
  } else {
    textarea.style.display = 'none';
    textarea.value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Oculta todos os selects e textareas no carregamento
  const selects = document.querySelectorAll('.percentual');
  selects.forEach(select => select.style.display = 'none');

  const textareas = document.querySelectorAll('.observacao');
  textareas.forEach(textarea => textarea.style.display = 'none');
});

function salvarFormulario() {
  const form = document.getElementById('aep-form');
  const razaoSocial = form.querySelector('#razao-social').value.trim();
  const cargo = form.querySelector('#cargo').value.trim();
 
  window.print(); // Trigger browser's print dialog
}

function enviarFormulario() {
  alert('O envio por e-mail requer configuração de servidor. Clique em "Salvar" para baixar o PDF e envie-o manualmente pelo seu cliente de e-mail.');
}