// Pega o nome da página que está aberta
let paginaAtual = window.location.pathname.split("/").pop();

// Seleciona todos os links da barra lateral
let itensMenu = document.querySelectorAll(".item");

// Percorre todos os links
itensMenu.forEach(item => {

    // Verifica se o link corresponde à página atual
    if (item.getAttribute("href") === paginaAtual) {

        // Adiciona a classe ativo
        item.classList.add("ativo");

    }

});