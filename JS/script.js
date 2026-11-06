document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.querySelector('input[type="submit"]');
    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const inputMensagem = document.getElementById("mensagem");

    btnEnviar.addEventListener("click", (event) => {
        event.preventDefault();

        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem sobre a trilogia foi enviada com sucesso.`);
        
        inputNome.value = "";
        inputEmail.value = "";
        inputMensagem.value = "";
    });
});