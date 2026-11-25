

// COMPRAFÁCIL - CADASTRO DE USUÁRIO

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

// Verifica se o nome foi preenchido e possui pelo menos 3 caracteres
if (nome.length < 3) {

    // Exibe a mensagem de erro
    mensagemCadastro.textContent =
        "Digite seu nome completo (mínimo de 3 caracteres).";

    // Coloca o cursor novamente no campo nome
    campoNome.focus();

    // Interrompe a execução do código
    return;
}
    });

// VALIDAÇÃO DO E-MAIL


// Verifica se o e-mail foi preenchido
if (email === "") {

    // Exibe mensagem de erro
    mensagemCadastro.textContent = "Digite seu e-mail.";

    // Foca no campo e-mail
    campoEmail.focus();

    // Interrompe a execução
    return;
}

// Verifica se o formato do e-mail é válido
if (!campoEmail.validity.valid) {

    // Exibe mensagem de erro
    mensagemCadastro.textContent = "Digite um e-mail válido.";

    // Foca no campo e-mail
    campoEmail.focus();

    // Interrompe a execução
    return;
}

}

