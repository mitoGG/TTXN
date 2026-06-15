document.addEventListener("DOMContentLoaded", function() {
    
    // --- Lógica do Botão de Agendamento ---
    const botaoAgendar = document.getElementById("botao-agendar");
    const mensagemStatus = document.getElementById("mensagem-status");

    botaoAgendar.addEventListener("click", function() {
        botaoAgendar.textContent = "A verificar...";
        botaoAgendar.disabled = true;

        setTimeout(function() {
            mensagemStatus.classList.remove("escondido");
            mensagemStatus.classList.add("sucesso");
            mensagemStatus.innerHTML = "✓ Temos horários disponíveis para hoje! Entre em contacto pelo WhatsApp.";
            
            botaoAgendar.textContent = "Verificar Disponibilidade";
            botaoAgendar.disabled = false;
        }, 1500);
    });

    // --- NOVA LÓGICA: Botões de Compra de Produtos ---
    const botoesComprar = document.querySelectorAll(".botao-comprar");

    botoesComprar.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Pega o nome do produto direto do atributo customizado 'data-produto'
            const nomeProduto = botao.getAttribute("data-produto");
            
            // Simulação de ação de compra
            alert(`Você escolheu: ${nomeProduto}! Redirecionando para o fechamento do pedido...`);
        });
    });
});