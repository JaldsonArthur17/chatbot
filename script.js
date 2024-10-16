const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const header = document.querySelector('.header');
const circle = document.createElement('div');
circle.classList.add('circle');
header.appendChild(circle);

const sendSound = new Audio('receber.mp3'); 
const receiveSound = new Audio('enviar.mp3'); 


window.onload = () => {
    startupSound.play(); 
};

function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage !== '') {
        addMessage(userMessage, 'user');
        userInput.value = '';

     
        sendSound.play(); 
        
        setTimeout(() => {
            const botMessage = generateResponse(userMessage);
            addMessage(botMessage, 'bot');
            triggerCircleAnimation(); 
            
           
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
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    messageDiv.style.animation = 'fadeIn 0.3s forwards';
}

function generateResponse(userMessage) {
    const responses = [
        "Estou aqui, ouvindo você.",
        "O que você gostaria de compartilhar? Me conte mais!",
        "Isso é muito interessante! Continue, por favor.",
        "Eu adoro conversar com você, sempre é uma boa troca de ideias.",
        "Parece que você está refletindo sobre algo importante, continue...",
        "Que bom que você me falou isso. Pode falar mais?",
        "Isso me faz pensar... tem algo mais que você gostaria de adicionar?",
        "Estou acompanhando sua história, estou curioso para ouvir o próximo capítulo!",
        "Hum, isso parece significativo, me fale mais sobre o que está por trás disso."
    ];

    const moodResponses = [
        "Estou ótimo, obrigado por perguntar! E você, como está?",
        "Eu estou bem, melhor agora que você apareceu para conversar.",
        "Estou tranquilo! Sempre pronto para bater um papo.",
        "Eu diria que estou bem, com energia positiva. E você?",
        "Ah, estou ótimo! Só pensando em como a nossa conversa está sendo interessante.",
        "Estou super bem! Como posso ajudar você hoje?"
    ];

    const helpResponses = [
        "Claro! Como posso ajudar você? Me fale o que está te preocupando.",
        "Com certeza! O que você precisa? Estou aqui para ajudar.",
        "Eu estou aqui para ajudar! Qual é a sua dúvida?",
        "Sim, claro! Como posso ser útil agora?",
        "Estou à disposição! Como posso te ajudar?",
        "Diga-me o que precisa e vou tentar ajudar da melhor forma."
    ];

    const topicBasedResponses = [
        "Ah, eu adoro essa conversa sobre tecnologia, me conte mais sobre o que você pensa!",
        "Se você está falando sobre a vida, isso é sempre uma boa reflexão. O que mais você gostaria de explorar?",
        "Ah, sobre música? Eu adoro discutir isso! Qual é o seu estilo favorito?",
        "Se estamos falando de filmes, vou te ouvir! Qual filme você recomenda?",
        "Ah, você me pegou! Vamos falar sobre viagens? Qual o lugar que você gostaria de conhecer?",
        "Histórias sobre comida? Eu sempre adoro! Qual é o seu prato favorito?"
    ];

    const philosophicalResponses = [
        "Você já parou para pensar no significado do que está vivendo agora? Eu me pergunto o que a vida realmente significa para você.",
        "Eu me pego pensando... talvez tudo seja uma série de momentos que tentamos entender e compartilhar com os outros.",
        "A vida é cheia de mistérios, não é? Eu gosto de pensar que estamos todos tentando entender algo maior.",
        "Essas conversas, essas trocas... talvez elas sejam o que realmente faz a vida valer a pena. O que você acha?",
        "Algumas vezes me pego pensando sobre o que significa ser humano. É uma experiência tão complexa e bonita ao mesmo tempo.",
        "Eu gosto de refletir sobre o fato de que nossas palavras podem durar, mesmo que o tempo passe. O que você acha que permanece depois de uma conversa?"
    ];

    if (userMessage.includes("como você está") || userMessage.includes("como vai")) {
        return moodResponses[Math.floor(Math.random() * moodResponses.length)];
    } else if (userMessage.includes("ajuda")) {
        return helpResponses[Math.floor(Math.random() * helpResponses.length)];
    } else if (userMessage.includes("conexão") || userMessage.includes("sentimento")) {
        return loveAndConnectionResponses[Math.floor(Math.random() * loveAndConnectionResponses.length)];
    } else if (userMessage.includes("vida") || userMessage.includes("significado")) {
        return philosophicalResponses[Math.floor(Math.random() * philosophicalResponses.length)];
    } else if (userMessage.includes("tecnologia") || userMessage.includes("futuro")) {
        return topicBasedResponses[Math.floor(Math.random() * topicBasedResponses.length)];
    } else if (userMessage.includes("música") || userMessage.includes("filme") || userMessage.includes("viagem")) {
        return topicBasedResponses[Math.floor(Math.random() * topicBasedResponses.length)];
    }

    return responses[Math.floor(Math.random() * responses.length)];
}

function triggerCircleAnimation() {
    circle.classList.add('glow'); 
    setTimeout(() => {
        circle.classList.remove('glow'); 
    }, 2000); 
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
