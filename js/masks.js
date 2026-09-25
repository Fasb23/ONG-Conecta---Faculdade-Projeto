/* ===================================================
   CONECTA+ : MÁSCARAS DE FORMULÁRIO (ATIVIDADE 1)
   Formata campos de CPF, Telefone e CEP
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const inputCPF = document.getElementById('cpf');
  const inputTelefone = document.getElementById('telefone');
  const inputCEP = document.getElementById('cep');
  const formCadastro = document.getElementById('form-cadastro');
  const feedbackSucesso = document.getElementById('mensagem-sucesso');

  // 1. MÁSCARA DE CPF: 000.000.000-00
  if (inputCPF) {
    inputCPF.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, ''); // Mantém apenas números
      if (valor.length > 11) valor = valor.slice(0, 11);

      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      e.target.value = valor;
    });
  }

  // 2. MÁSCARA DE TELEFONE: (00) 00000-0000 ou (00) 0000-0000
  if (inputTelefone) {
    inputTelefone.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, '');
      if (valor.length > 11) valor = valor.slice(0, 11);

      if (valor.length > 10) {
        // Celular (9 dígitos): (11) 98765-4321
        valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      } else if (valor.length > 6) {
        // Fixo ou celular digitando: (11) 4321-1234
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
      } else if (valor.length > 2) {
        valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      }
      e.target.value = valor;
    });
  }

  // 3. MÁSCARA DE CEP: 00000-000
  if (inputCEP) {
    inputCEP.addEventListener('input', (e) => {
      let valor = e.target.value.replace(/\D/g, '');
      if (valor.length > 8) valor = valor.slice(0, 8);
      valor = valor.replace(/(\d{5})(\d{1,3})/, '$1-$2');
      e.target.value = valor;
    });
  }

  // 4. ENVIO E FEEDBACK DO FORMULÁRIO
  if (formCadastro && feedbackSucesso) {
    formCadastro.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o recarregamento padrão da página

      feedbackSucesso.style.display = 'block';
      formCadastro.reset();
      feedbackSucesso.scrollIntoView({ behavior: 'smooth' });
    });
  }
});