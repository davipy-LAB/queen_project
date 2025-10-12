document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona o container dos links (a lista <ul>)
    // Isso é mais eficiente do que selecionar todos os <a> individualmente
    const navContainer = document.querySelector('.main-nav ul');

    // Se o container de navegação não existir, paramos o script.
    if (!navContainer) return; 

    // Adiciona um único 'escutador' de evento de clique ao container
    // Usamos o recurso de 'Delegação de Eventos'
    navContainer.addEventListener('click', function(e) {
        
        // Verifica se o clique foi em um link <a> dentro do container
        // O método 'closest' encontra o elemento <a> pai mais próximo
        const link = e.target.closest('.main-nav a');

        // Se não clicou em um link ou o link não existe, não faz nada
        if (!link) return;

        // 1. Previne o comportamento padrão do link (o pulo abrupto)
        e.preventDefault();

        // 2. Pega o valor do atributo 'href' (ex: '#futebol')
        const targetId = link.getAttribute('href');

        // Valida: Garante que o href é um link interno (começa com '#')
        if (!targetId || !targetId.startsWith('#')) return;

        // 3. Encontra o elemento de destino usando o seletor de ID
        const targetElement = document.querySelector(targetId);

        // 4. Se o elemento for encontrado, executa a rolagem suave
        if (targetElement) {
            
            // Verifica se o navegador suporta a rolagem suave com options
            if ('scrollIntoView' in targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Garante que a seção inicie no topo da viewport
                });
            } else {
                // Fallback (para navegadores muito antigos): usa rolagem padrão
                window.location.hash = targetId;
            }
        }
    });
});