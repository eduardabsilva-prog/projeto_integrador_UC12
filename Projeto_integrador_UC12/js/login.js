// ==========================================
// COMPRAFÁCIL - FUNCIONALIDADES DO LOGIN
// ==========================================


// Seleciona o campo de senha no HTML
const campoSenha = document.getElementById("senha");

// Seleciona o botão de mostrar senha
const botaoMostrarSenha = document.getElementById("toggle-senha");


// Verifica se os elementos existem na página
if (campoSenha && botaoMostrarSenha) {

    // Adiciona um evento de clique ao botão
    botaoMostrarSenha.addEventListener("click", () => {

        // Verifica se a senha está escondida
        if (campoSenha.type === "password") {

            // Torna a senha visível
            campoSenha.type = "text";

            // Altera o texto do botão
            botaoMostrarSenha.textContent = "Ocultar";

            // Atualiza a descrição acessível
            botaoMostrarSenha.setAttribute("aria-label", "Ocultar senha");

        } else {

            // Esconde novamente a senha
            campoSenha.type = "password";

            // Volta o texto do botão
            botaoMostrarSenha.textContent = "Mostrar";

            // Atualiza a descrição acessível
            botaoMostrarSenha.setAttribute("aria-label", "Mostrar senha");

        }

    });

}


// VALIDAÇÃO DO FORMULÁRIO DE LOGIN

// Seleciona o formulário de login
const formularioLogin = document.getElementById("form-login");

// Seleciona o campo de e-mail
const campoEmail = document.getElementById("email");

// Seleciona a área de mensagens
const mensagemLogin = document.getElementById("login-message");


// Verifica se o formulário existe
if (formularioLogin) {

    // Evento executado ao enviar o formulário
    formularioLogin.addEventListener("submit", (event) => {

        // Impede o envio padrão do formulário
        event.preventDefault();

        // Captura os valores digitados
        const email = campoEmail.value.trim();
        const senha = campoSenha.value.trim();

        // Limpa a mensagem anterior
        mensagemLogin.textContent = "";

        // Verifica se o e-mail foi preenchido
        if (email === "") {
            mensagemLogin.textContent = "Digite seu e-mail.";
            campoEmail.focus();
            return;
        }

        // Verifica se o formato do e-mail é válido
        if (!campoEmail.validity.valid) {
            mensagemLogin.textContent = "Digite um e-mail válido.";
            campoEmail.focus();
            return;
        }

        // Verifica se a senha foi preenchida
        if (senha === "") {
            mensagemLogin.textContent = "Digite sua senha.";
            campoSenha.focus();
            return;
        }

        // Se todas as verificações forem aprovadas
        mensagemLogin.textContent = "Campos preenchidos corretamente!";

    });

}