
// BARRA LATERAL

fetch("../html/barralateral.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Não foi possível carregar a barra lateral.");
        }

        return response.text();
    })
    .then(html => {

        document.body.insertAdjacentHTML("afterbegin", html);

        // Identifica a página atual
        const paginaAtual = window.location.pathname
            .split("/")
            .pop();

        // Destaca o atalho correspondente
        document.querySelectorAll(".menu-barralateral .item")
            .forEach(item => {

                const destino = item.getAttribute("href");

                if (destino === paginaAtual) {
                    item.classList.add("ativo");
                }

            });

    })
    .catch(erro => console.error(erro));


// =================================
// FOTO DE PERFIL
// =================================

// Identifica os elementos da página
const inputFoto = document.getElementById("inputFoto");
const previewFoto = document.getElementById("previewFoto");
const fotoTopo = document.getElementById("fotoPerfilTopo");

// Recupera a foto salva no navegador
const fotoSalva = localStorage.getItem("fotoPerfil");

// Exibe a foto salva no perfil e no topo
if (fotoSalva) {
    if (previewFoto) previewFoto.src = fotoSalva;
    if (fotoTopo) fotoTopo.src = fotoSalva;
}

// Verifica se existe o campo de escolha de foto
if (inputFoto) {

    inputFoto.addEventListener("change", function () {

        const arquivo = this.files[0];

        if (!arquivo) return;

        // Verifica se o arquivo é uma imagem
        if (!arquivo.type.startsWith("image/")) {
            alert("Escolha uma imagem válida!");
            return;
        }

        // Lê a imagem selecionada
        const leitor = new FileReader();

        leitor.onload = function () {

            // Salva a foto no navegador
            localStorage.setItem("fotoPerfil", leitor.result);

            // Atualiza a foto da página de perfil
            if (previewFoto) {
                previewFoto.src = leitor.result;
            }

            // Atualiza a foto do topo
            if (fotoTopo) {
                fotoTopo.src = leitor.result;
            }

        };

        leitor.readAsDataURL(arquivo);
    });
}

// =================================
// NOME DO USUÁRIO - JAVASCRIPT
// =================================

// Identifica os elementos
const inputNome = document.getElementById("inputNome");
const nomeTopo = document.getElementById("nomeUsuarioTopo");

// Recupera o nome salvo
const nomeSalvo = localStorage.getItem("nomeUsuario");

// Exibe o nome salvo no campo e no topo
if (nomeSalvo) {
    if (inputNome) {
        inputNome.value = nomeSalvo;
    }

    if (nomeTopo) {
        nomeTopo.textContent = nomeSalvo;
    }
}

// Permite alterar o nome
if (inputNome) {
    inputNome.addEventListener("input", function () {

        // Salva o nome no navegador
        localStorage.setItem("nomeUsuario", inputNome.value);

        // Atualiza o nome no topo
        if (nomeTopo) {
            nomeTopo.textContent = inputNome.value;
        }

    });
}