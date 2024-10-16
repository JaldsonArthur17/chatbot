window.onload = () => {
    const startBtn = document.getElementById('startBtn');
    const circle = document.getElementById('loadingCircle');
    const loadingText = document.getElementById('loadingText');
    
    if (!startBtn) {
        console.error('Botão "Iniciar" não encontrado!');
        return; 
    }
    startBtn.addEventListener('click', () => {
    
        startBtn.style.display = 'none';

        const startupSound = new Audio('iniciar.mp3'); 
        startupSound.play();

        circle.style.display = 'block';
        circle.style.animation = 'glow 1.5s infinite alternate';

        loadingText.style.display = 'block';

        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 4000);  
    });
};
