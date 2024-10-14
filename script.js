const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const header = document.querySelector('.header');
const circle = document.createElement('div');
circle.classList.add('circle');
header.appendChild(circle);

// Carregar os sons
const startupSound = new Audio('iniciar.mp3'); // Som ao iniciar
const sendSound = new Audio('receber.mp3'); // Som ao enviar
const receiveSound = new Audio('enviar.mp3'); // Som ao receber

// Reproduzir som de início ao carregar a página
window.onload = () => {
    startupSound.play(); // Toca o som de início
};

function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        addMessage(userMessage, 'user');
        userInput.value = '';

        // Emitir som de envio
        sendSound.play(); 
        
        setTimeout(() => {
            const botMessage = generateResponse(userMessage);
            addMessage(botMessage, 'bot');
            triggerCircleAnimation(); 
            
            // Emitir som de recebimento
            receiveSound.play(); 
        }, 1000);
    }
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    const messageText = document.createElement('div');
    messageText.classList.add('text');
    messageText.textContent = text;

    messageDiv.appendChild(messageText);
    messagesContainer.appendChild(messageDiv);
    
    // Rolar a caixa de mensagens para baixo automaticamente
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Para animação da mensagem
    messageDiv.style.animation = 'fadeIn 0.3s forwards';
}

// Função para gerar uma resposta mais dinâmica da IA
function generateResponse(userMessage) {
    const responses = [
        "Estou aqui, ouvindo você.",
        "O que você gostaria de compartilhar?",
        "Isso é muito interessante, continue!",
        "Eu adoro conversar com você.",
        "Parece que você está refletindo sobre algo importante.",
        "Você poderia me dizer mais sobre isso?",
        "Isso me faz pensar..."
    ];

    if (userMessage.includes("como você está")) {
        return "Estou ótimo, obrigado por perguntar!";
    } else if (userMessage.includes("ajuda")) {
        return "Claro! Como posso ajudar?";
    }

    return responses[Math.floor(Math.random() * responses.length)];
}

// Função para acionar a animação de brilho do círculo
function triggerCircleAnimation() {
    circle.classList.add('glow'); // Adiciona a classe de brilho
    setTimeout(() => {
        circle.classList.remove('glow'); // Remove a classe após 1 segundo
    }, 2000); // Tempo total de 2 segundos
}

// Eventos
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
