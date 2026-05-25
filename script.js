// Aguarda que todo o HTML seja carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona os elementos do HTML pelos seus IDs
    const botaoAgendar = document.getElementById("botao-agendar");
    const mensagemStatus = document.getElementById("mensagem-status");

    // Adiciona um evento de clique ao botão
    botaoAgendar.addEventListener("click", function() {
        
        // Modifica o texto do botão para simular carregamento
        botaoAgendar.textContent = "A verificar...";
        botaoAgendar.disabled = true;

        // Simula uma resposta do servidor após 1.5 segundos
        setTimeout(function() {
            // Remove a classe que esconde a mensagem
            mensagemStatus.classList.remove("escondido");
            mensagemStatus.classList.add("sucesso");
            
            // Define o texto de sucesso
            mensagemStatus.innerHTML = "✓ Temos horários disponíveis para hoje! Entre em contacto pelo WhatsApp.";
            
            // Restaura o botão original
            botaoAgendar.textContent = "Verificar Disponibilidade";
            botaoAgendar.disabled = false;
        }, 1500);
        
    });
});