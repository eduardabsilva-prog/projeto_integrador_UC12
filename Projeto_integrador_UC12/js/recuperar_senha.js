// ==========================================
// COMPRAFÁCIL - RECUPERAÇÃO DE SENHA
// ==========================================


// Seleciona o formulário
const formularioRecuperacao = document.getElementById("form-recuperacao");

// Seleciona o campo de e-mail
const emailRecuperacao = document.getElementById("email");

// Seleciona a mensagem de retorno
const mensagemRecuperacao = document.getElementById("recovery-message");


// Verifica se o formulário existe na página
if (formularioRecuperacao) {

    // Evento de envio do formulário
    formularioRecuperacao.addEventListener("submit", (event) => {

        // Evita recarregar a página
        event.preventDefault();

        // Captura o e-mail digitado
        const email = emailRecuperacao.value.trim();

        // Limpa a mensagem anterior
        mensagemRecuperacao.textContent = "";

        // Verifica se o e-mail foi preenchido
        if (email === "") {
            mensagemRecuperacao.textContent = "Digite seu e-mail.";
            emailRecuperacao.focus();
            return;
        }

        // Verifica se o formato do e-mail é válido
        if (!emailRecuperacao.validity.valid) {
            mensagemRecuperacao.textContent = "Digite um e-mail válido.";
            emailRecuperacao.focus();
            return;
        }

        // Exibe uma confirmação simulada
        mensagemRecuperacao.textContent =
            "Se este e-mail estiver cadastrado, você poderá recuperar sua conta.";

    });

}