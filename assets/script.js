// Função para obter o valor do parâmetro da URL
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função principal para atualizar o conteúdo do <p>
function atualizarSaudacao() {
    const nome = getParameterByName('nome');
    const saudacaoElemento = document.getElementById('texto-de-convite');

    if (nome) {
        saudacaoElemento.innerHTML = `Convidamos você <strong>${nome}</strong> para fazer parte do nosso <strong>lindo momento</strong> em que diremos <strong>"sim"</strong> diante de <strong>Deus</strong> e de todas as <strong>pessoas especiais</strong> que estarão no nosso <strong>casamento</strong>.`
    } else {
        saudacaoElemento.innerHTML = `Venha fazer parte do nosso <strong>lindo momento</strong> em que diremos <strong>"sim"</strong> diante de <strong>Deus</strong> e de todas as <strong>pessoas especiais</strong> que estarão no nosso <strong>casamento</strong>.`
    }
}

// Atualize a saudação quando o script for carregado
atualizarSaudacao();
