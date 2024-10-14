// Esperar o carregamento completo da página antes de reproduzir o som
window.onload = () => {
    // Reproduzir som de início
    const startupSound = new Audio('iniciar.mp3'); // Som ao iniciar
    startupSound.play();

    // Redirecionar após 3 segundos para a tela de chat
    setTimeout(() => {
        window.location.href = 'index.html'; // Redireciona para a tela de chat
    }, 3000);
};
