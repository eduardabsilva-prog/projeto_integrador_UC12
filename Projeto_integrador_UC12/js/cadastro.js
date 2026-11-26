
/* 
   COMPRAFÁCIL - CADASTRO DE USUÁRIO*/

// Seleciona o formulário de cadastro
const formularioCadastro = document.getElementById("form-cadastro");

// Seleciona o campo de nome
const campoNome = document.getElementById("nome");

// Seleciona o campo de e-mail
const campoEmail = document.getElementById("email");

// Seleciona o campo de senha
const campoSenha = document.getElementById("senha");

// Seleciona o campo de confirmação de senha
const campoConfirmarSenha = document.getElementById("confirmar-senha");

// Seleciona o elemento que exibirá as mensagens
const mensagemCadastro = document.getElementById("cadastro-message");



// ETAPA 2 - EVENTO DE ENVIO DO FORMULÁRIO


// Verifica se o formulário existe na página
if (formularioCadastro) {

    // Escuta o evento de envio do formulário
    formularioCadastro.addEventListener("submit", (event) => {

        // Impede que a página recarregue ao enviar
        event.preventDefault();


        
        // ETAPA 3 - CAPTURAR OS DADOS DO USUÁRIO
        

        // Captura o nome e remove espaços extras
        const nome = campoNome.value.trim();

        // Captura o e-mail e remove espaços extras
        const email = campoEmail.value.trim();

        // Captura a senha digitada
        const senha = campoSenha.value;

        // Captura a confirmação da senha
        const confirmarSenha = campoConfirmarSenha.value;

        // Limpa a mensagem anterior
        mensagemCadastro.textContent = "";


        
        // ETAPA 4 - VALIDAÇÃO DO NOME
        

        // Verifica se o nome possui pelo menos 3 caracteres
        if (nome.length < 3) {

            // Exibe a mensagem de erro
            mensagemCadastro.textContent =
                "Digite seu nome completo (mínimo de 3 caracteres).";

            // Coloca o cursor no campo nome
            campoNome.focus();

            // Interrompe a execução
            return;
        }


    
        // ETAPA 5 - VALIDAÇÃO DO E-MAIL
        

        // Verifica se o e-mail foi preenchido
        if (email === "") {

            // Exibe a mensagem de erro
            mensagemCadastro.textContent = "Digite seu e-mail.";

            // Coloca o cursor no campo e-mail
            campoEmail.focus();

            // Interrompe a execução
            return;
        }

        // Verifica se o formato do e-mail é válido
        if (!campoEmail.validity.valid) {

            // Exibe a mensagem de erro
            mensagemCadastro.textContent = "Digite um e-mail válido.";

            // Coloca o cursor no campo e-mail
            campoEmail.focus();

            // Interrompe a execução
            return;
        }

        if (!campoEmail.validity.valid) {
             mensagemCadastro.textContent = "Digite um e-mail válido.";
            campoEmail.focus();
            return;
}

// ETAPA 6 - VALIDAÇÃO DA SENHA

// Verifica se a senha foi preenchida
if (senha === "") {

    // Exibe mensagem de erro
    mensagemCadastro.textContent = "Digite sua senha.";

    // Foca no campo senha
    campoSenha.focus();

    // Interrompe a execução
    return;
}

// Verifica se a senha possui pelo menos 8 caracteres
if (senha.length < 8) {

    // Exibe mensagem de erro
    mensagemCadastro.textContent =
        "A senha deve ter pelo menos 8 caracteres.";

    // Foca no campo senha
    campoSenha.focus();

    // Interrompe a execução
    return;
}

// ETAPA 7 - CONFIRMAR A SENHA

// Verifica se o campo de confirmação foi preenchido
if (confirmarSenha === "") {

    // Exibe mensagem de erro
    mensagemCadastro.textContent = "Confirme sua senha.";

    // Foca no campo de confirmação
    campoConfirmarSenha.focus();

    // Interrompe a execução
    return;
}

// Verifica se as duas senhas são iguais
if (senha !== confirmarSenha) {

    // Exibe mensagem de erro
    mensagemCadastro.textContent = "As senhas não coincidem.";

    // Foca no campo de confirmação
    campoConfirmarSenha.focus();

    // Interrompe a execução
    return;
}

    
    // ETAPA 9 - REDIRECIONAR PARA A PAGINA INICIAL
    

    // Exibe a mensagem de sucesso
    mensagemCadastro.textContent = "Cadastro realizado com sucesso!";

    // Aguarda 1,5 segundo e direciona para a Home
    setTimeout(() => { // permite executar um código depois de determinado tempo.

        // Abre a página inicial do CompraFácil
        window.location.href = "home.html";

    }, 1500);


    });

}
