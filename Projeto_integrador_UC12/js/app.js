// =========================================
// COMPRAFÁCIL - JAVASCRIPT PRINCIPAL
// =========================================

// =========================================
// COMPRAFÁCIL - JAVASCRIPT PRINCIPAL
// =========================================


// Seleciona o elemento principal do aplicativo
const app = document.getElementById("app");


// Função que cria a tela inicial
function renderSplashScreen() {

    // Insere a estrutura da Splash Screen dentro do main
    app.innerHTML = `
        <section class="splash-screen">

            <div class="splash-content">

                <!-- Logo do CompraFácil -->
                <div class="logo-container">

                    <svg class="logo-icon" viewBox="0 0 100 100" 
                         xmlns="http://www.w3.org/2000/svg">

                        <!-- Cesta do carrinho -->
                        <path d="M22 30 H32 L42 65 H75 L85 38 H36"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="6"
                              stroke-linecap="round"
                              stroke-linejoin="round"/>

                        <!-- Parte inferior do carrinho -->
                        <path d="M45 73 H73"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="5"
                              stroke-linecap="round"/>

                        <!-- Rodinhas -->
                        <circle cx="48" cy="83" r="5" fill="#55C653"/>
                        <circle cx="72" cy="83" r="5" fill="#55C653"/>

                        <!-- Folha decorativa -->
                        <path d="M57 22 C57 9 72 7 82 10 C80 23 70 31 57 28"
                              fill="#55C653"/>

                        <path d="M58 28 L75 13"
                              stroke="#1D2854"
                              stroke-width="3"
                              stroke-linecap="round"/>

                    </svg>

                    <!-- Nome do aplicativo -->
                    <h1 class="logo-name">
                        Compra<span>Fácil</span>
                    </h1>

                </div>

                <!-- Slogan -->
                <p class="splash-slogan">
                    Sua compra, mais simples.
                </p>

                <!-- Indicador de carregamento -->
                <div class="splash-loading">

                    <div class="loading-track">
                        <div class="loading-progress"></div>
                    </div>

                    <p>Preparando tudo para você...</p>

                </div>

            </div>

            <!-- Rodapé -->
            <footer class="splash-footer">
                COMPRAR BEM. VIVER MELHOR.
            </footer>

        </section>
    `;
}

// Função que inicia o aplicativo
function iniciarAplicativo() {

    // Verifica se o elemento principal existe
    if (!app) {
        console.error("Elemento principal do aplicativo não encontrado!");
        return;
    }

    // Exibe a Splash Screen
    renderSplashScreen();

    // Aguarda 2,5 segundos e redireciona para o Login
    setTimeout(() => {

        // Abre a página de Login
        window.location.href = "pages/login.html";

    }, 2500);

    // Confirma a inicialização
    console.log("CompraFácil iniciado com sucesso!");
}


// Aguarda o HTML carregar antes de iniciar o aplicativo
document.addEventListener("DOMContentLoaded", iniciarAplicativo);