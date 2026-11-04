document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.querySelector('input[type="submit"]');
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const inputMensagem = document.getElementById("mensagem");

    btnEnviar.addEventListener("click", (event) => {
        // Evita o recarregamento padrão da página
        event.preventDefault();

        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        // Validação simples
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        // Simula o envio bem-sucedido
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre a trilogia foi enviada com sucesso.`);

        // Limpa os campos após o envio
        inputNome.value = "";
        inputEmail.value = "";
        inputMensagem.value = "";
    });
});