// Variáveis de controle do scroll
let lastScrollY = 0;
const header = document.querySelector('.site-header');

// Altura em pixels a partir da qual o header começa a esconder
const hideOffset = 150; 

// Função que monitora o evento de scroll da janela
window.addEventListener('scroll', () => {
    // Posição atual do scroll
    const currentScrollY = window.scrollY;

    // 1. Se o scroll atual for maior que o último scroll (SCROLLANDO PARA BAIXO)
    // E estiver abaixo de 150px (para não esconder no topo da página)
    if (currentScrollY > lastScrollY && currentScrollY > hideOffset) {
        // Esconde o header adicionando a classe
        header.classList.add('header-hidden');
    } 
    // 2. Se o scroll atual for menor que o último scroll (SCROLLANDO PARA CIMA)
    // E o scroll estiver abaixo do limite (para mostrar apenas quando o usuário estiver no conteúdo)
    else if (currentScrollY < lastScrollY && currentScrollY > hideOffset) {
        // Mostra o header removendo a classe
        header.classList.remove('header-hidden');
    }
    // 3. Se o usuário estiver no topo da página (até 150px), sempre mostra o header
    else if (currentScrollY <= hideOffset) {
         header.classList.remove('header-hidden');
    }

    // 4. Atualiza a última posição do scroll para a próxima verificação
    lastScrollY = currentScrollY;
});