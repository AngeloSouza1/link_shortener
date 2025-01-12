document.getElementById('linkForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const originalUrl = document.getElementById('original_url').value;

  // Enviar a requisição para a API de encurtamento
  fetch('/api/v1/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      link: {
        original_url: originalUrl
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.short_url) {
      const shortUrl = `http://localhost:3000/${data.short_url}`;
      document.getElementById('short_url').textContent = shortUrl;
      document.getElementById('short_url').href = shortUrl;
      document.getElementById('result').style.display = 'block';
      
      // Feedback de sucesso
      showFeedback('Link encurtado com sucesso!', 'success');
    } else {
      showFeedback('Ocorreu um erro ao encurtar o link!', 'error');
    }
  })
  .catch(error => {
    showFeedback('Erro ao criar link encurtado.', 'error');
  });
});

// Função para exibir feedback de sucesso ou erro
function showFeedback(message, type) {
  const feedbackElement = document.getElementById('feedback');
  feedbackElement.textContent = message;
  feedbackElement.style.display = 'block';
  feedbackElement.style.color = type === 'success' ? 'green' : 'red';
}

// Função para copiar o link encurtado para a área de transferência
document.getElementById('copyButton').addEventListener('click', function() {
  const shortUrl = document.getElementById('short_url').href;

  // Copiar para a área de transferência
  navigator.clipboard.writeText(shortUrl)
    .then(() => {
      // Atualizar o feedback após copiar o link
      showFeedback('Link copiado com sucesso!', 'success');

      // Animação de sucesso no botão
      const copyButton = document.getElementById('copyButton');
      copyButton.textContent = 'Link Copiado!';
      copyButton.style.backgroundColor = '#218838'; // Cor verde de sucesso
      copyButton.style.pointerEvents = 'none'; // Desabilita o botão temporariamente

      setTimeout(() => {
        copyButton.textContent = 'Copiar Link';
        copyButton.style.backgroundColor = '#28a745'; // Cor original
        copyButton.style.pointerEvents = 'auto'; // Habilita o botão novamente
      }, 2000); // Após 2 segundos, reseta o botão
    })
    .catch(() => {
      showFeedback('Erro ao copiar o link.', 'error');
    });
});
